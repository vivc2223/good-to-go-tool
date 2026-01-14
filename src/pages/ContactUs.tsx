import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/lib/supabase";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import ProfileSelection, {
  ProfileType,
} from "@/components/contact/ProfileSelection";
import CommonFields from "@/components/contact/CommonFields";
import BusinessCustomerFields from "@/components/contact/BusinessCustomerFields";
import FileUpload from "@/components/contact/FileUpload";
import { ArrowLeft, Loader2 } from "lucide-react";

// Form schema
const contactFormSchema = z.object({
  profileType: z.string().min(1, "Please select a profile"),
  fullName: z.string().min(1, "Full name is required"),
  workEmail: z.string().email("Valid work email is required"),
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  companySize: z.string().min(1, "Company size is required"),
  country: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  // Business customer specific fields
  hasUseCase: z.string().optional(),
  useCases: z.string().optional(),
  locationOfSites: z.string().optional(),
  unitsNeeded: z.string().optional(),
  files: z.array(z.instanceof(File)).optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactUs = () => {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType | null>(
    null
  );
  const [hasUseCase, setHasUseCase] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      profileType: "",
      fullName: "",
      workEmail: "",
      title: "",
      company: "",
      companySize: "",
      country: "",
      message: "",
      hasUseCase: "",
      useCases: "",
      locationOfSites: "",
      unitsNeeded: "",
      files: [],
    },
  });

  const handleProfileSelect = (profile: ProfileType) => {
    setSelectedProfile(profile);
    form.setValue("profileType", profile);
  };

  const handleBack = () => {
    setSelectedProfile(null);
    form.reset();
    setHasUseCase("");
    setFiles([]);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);

      // Prepare form data for Supabase Edge Function
      const apiFormData = new FormData();
      apiFormData.append("profileType", data.profileType);
      apiFormData.append("name", data.fullName);
      apiFormData.append("email", data.workEmail);
      apiFormData.append("title", data.title);
      apiFormData.append("company", data.company);
      apiFormData.append("companySize", data.companySize);
      if (data.country) apiFormData.append("country", data.country);
      apiFormData.append("message", data.message);

      // Business Customer specific fields
      if (selectedProfile === "Business Customer") {
        if (hasUseCase) apiFormData.append("hasUseCase", hasUseCase);
        if (data.useCases) apiFormData.append("useCase", data.useCases);
        if (data.locationOfSites) {
          apiFormData.append("states", JSON.stringify([data.locationOfSites]));
        }
        if (data.unitsNeeded) apiFormData.append("totalUnits", data.unitsNeeded);

        // Add files if present
        if (files.length > 0) {
          files.forEach((file, index) => {
            apiFormData.append(`files[${index}]`, file);
          });
        }
      }

      // Submit to Supabase Edge Function using fetch for proper FormData handling
      const response = await fetch(
        `${SUPABASE_URL}/functions/v1/deployment-submission`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
          body: apiFormData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit form");
      }

      // Send email via FormSubmit based on profile type
      try {
        const formSubmitData = new FormData();
        formSubmitData.append("_template", "table");
        formSubmitData.append("_captcha", "false");

        if (data.profileType === "Media") {
          // Media-specific email format
          formSubmitData.append("_subject", "Media Inquiry");
          formSubmitData.append("Profile Type", "Media");
          formSubmitData.append("Name", data.fullName);
          formSubmitData.append("Company", data.company);
          formSubmitData.append("Work Email", data.workEmail);
          formSubmitData.append("Message", data.message);

          await axios.post(
            "https://formsubmit.co/ajax/media@dynarobotics.ai",
            formSubmitData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
        } else if (data.profileType === "Investor") {
          // Investor-specific email format
          formSubmitData.append("_subject", "Investor Inquiry");
          formSubmitData.append("Profile Type", "Investor");
          formSubmitData.append("Name", data.fullName);
          formSubmitData.append("Company", data.company);
          formSubmitData.append("Work Email", data.workEmail);
          formSubmitData.append("Message", data.message);

          await axios.post(
            "https://formsubmit.co/ajax/investors@dynarobotics.ai",
            formSubmitData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
        } else if (data.profileType === "Other") {
          // General Inquiry - email only
          formSubmitData.append("_subject", "General Inquiry");
          formSubmitData.append("Profile Type", "General Inquiry");
          formSubmitData.append("Name", data.fullName);
          formSubmitData.append("Company", data.company);
          formSubmitData.append("Work Email", data.workEmail);
          formSubmitData.append("Message", data.message);

          await axios.post(
            "https://formsubmit.co/ajax/team@dynarobotics.ai",
            formSubmitData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
        } else {
          // Business Customer - full details email
          formSubmitData.append("_subject", `[${data.profileType}] New Contact Form Submission`);
          formSubmitData.append("Profile Type", data.profileType);
          formSubmitData.append("Name", data.fullName);
          formSubmitData.append("Work Email", data.workEmail);
          formSubmitData.append("Title", data.title);
          formSubmitData.append("Company", data.company);
          formSubmitData.append("Company Size", data.companySize);
          if (data.country) formSubmitData.append("Country", data.country);
          formSubmitData.append("Message", data.message);

          // Business Customer specific fields
          if (hasUseCase === "yes" || hasUseCase === "multiple") {
            formSubmitData.append("Has Use Case", hasUseCase);
            if (data.useCases) formSubmitData.append("Use Cases", data.useCases);
            if (data.locationOfSites) formSubmitData.append("Location of Sites", data.locationOfSites);
            if (data.unitsNeeded) formSubmitData.append("Units Needed", data.unitsNeeded);
          }

          await axios.post(
            "https://formsubmit.co/ajax/team@dynarobotics.ai",
            formSubmitData,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
        }
      } catch (e) {
        console.warn("FormSubmit AJAX failed (non-blocking):", e);
      }

      // Success message
      toast({
        title: "Thank you for contacting us!",
        description:
          "We've received your message and will get back to you shortly.",
      });

      // Reset form
      form.reset();
      setSelectedProfile(null);
      setHasUseCase("");
      setFiles([]);
    } catch (error) {
      console.error("Error submitting contact form:", error);

      // Extract error message from Error object
      let errorMessage = "There was an error submitting your form. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Contact Us - DYNA Robotics</title>
        <meta
          name="description"
          content="Get in touch with DYNA Robotics. Whether you're a business customer, media, or investor, we'd love to hear from you."
        />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Selection */}
          <ProfileSelection
            selectedProfile={selectedProfile}
            onSelectProfile={handleProfileSelect}
          />

          {/* Form appears after profile selection */}
          {selectedProfile && (
            <div className="mt-12 max-w-3xl mx-auto">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Common fields for all profiles */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                    <h2
                      className="mb-6"
                      style={{
                        fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
                        fontSize: "clamp(20px, 4vw, 28px)",
                        fontWeight: "500",
                        color: "white",
                      }}
                    >
                      Contact Information
                    </h2>
                    <CommonFields form={form} />
                  </div>

                  {/* Business Customer specific fields */}
                  {selectedProfile === "Business Customer" && (
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                      <h2
                        className="mb-6"
                        style={{
                          fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
                          fontSize: "clamp(20px, 4vw, 28px)",
                          fontWeight: "500",
                          color: "white",
                        }}
                      >
                        Additional Information
                      </h2>
                      <BusinessCustomerFields
                        form={form}
                        hasUseCase={hasUseCase}
                        onHasUseCaseChange={setHasUseCase}
                      />

                      {(hasUseCase === "yes" || hasUseCase === "multiple") && (
                        <div className="mt-8">
                          <FileUpload
                            files={files}
                            onFilesChange={(newFiles) => {
                              setFiles(newFiles);
                              form.setValue("files", newFiles);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex items-center justify-between pt-4">
                    <Button
                      type="button"
                      onClick={handleBack}
                      variant="outline"
                      className="bg-transparent border-gray-700 text-white hover:bg-white/10"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Change Profile
                    </Button>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#FF4D00] hover:bg-[#FF4D00]/90 text-white px-8"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
