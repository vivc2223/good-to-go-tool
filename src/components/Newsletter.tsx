
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

const newsletterSchema = z.object({
  email: z.string().email("Valid email is required"),
});

type NewsletterData = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterData) => {
    try {
      const response = await axios.post("/api/newsletter", {
        email: data.email,
      });

      const result = response.data;

      // Send newsletter signup to FormSubmit via AJAX
      try {
        const formSubmitData = new FormData();
        formSubmitData.append("_subject", "New Newsletter Signup");
        formSubmitData.append("_template", "table");
        formSubmitData.append("_captcha", "false");
        formSubmitData.append("Email", data.email);
        formSubmitData.append("Signup Date", new Date().toLocaleDateString());

        await axios.post(
          "https://formsubmit.co/ajax/team@dynarobotics.ai",
          formSubmitData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } catch (e) {
        console.warn("FormSubmit newsletter AJAX failed (non-blocking):", e);
      }

      if (result.alreadySubscribed) {
        toast({
          title: "Already subscribed!",
          description: "This email is already subscribed to our newsletter.",
        });
      } else {
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
      }

      // Reset form
      reset();
    } catch (error) {
      console.error("Error submitting newsletter:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe to newsletter. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontSize: "clamp(28px, 5vw, 41px)",
              fontWeight: "normal",
              lineHeight: "1.1",
              color: "white",
            }}
          >
            Join Our Newsletter
          </h3>
        </div>

        <form
          className="flex flex-col gap-y-8 max-w-md mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email Field */}
          <div className="flex flex-col gap-y-2">
            <label
              htmlFor="newsletter-email"
              className="text-base font-medium text-white tracking-normal"
            >
              Email *
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="newsletter-email"
                  name="email"
                  type="email"
                  className={`w-full px-3 py-2 border rounded-md text-base font-normal text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF4D00] focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.email && (
              <span className="text-red-400 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Subscribe Button */}
          <div className="self-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-3 transition-all duration-300 hover:gap-4 text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:gap-3"
            >
              <span
                className="text-lg font-medium text-white"
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  textDecorationThickness: "1px",
                }}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </span>
              {!isSubmitting && (
                <div className="w-8 h-8 rounded-full border-white border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-disabled:group-hover:translate-x-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
