import React, { useState, useRef, useEffect, useCallback } from "react";
import { Upload } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useUniversalScrollReveal } from "@/hooks/useUniversalScrollReveal";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  useCase: z.string().min(1, "Use case is required"),
  states: z.array(z.string()).min(1, "At least one state is required"),
  totalUnits: z.string().min(1, "Total units is required"),
  files: z.array(z.instanceof(File)).min(1, "At least one file is required"),
});

const newsletterSchema = z.object({
  email: z.string().email("Valid email is required"),
});

type FormData = z.infer<typeof formSchema>;
type NewsletterData = z.infer<typeof newsletterSchema>;

const DeploymentSection = () => {
  const { elementRef: headingRef, style: headingStyle } =
    useUniversalScrollReveal();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      company: "",
      useCase: "",
      states: [],
      totalUnits: "",
      files: [],
    },
  });

  const newsletterForm = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors, isSubmitting },
    reset: resetDeploymentForm,
  } = form;

  const {
    control: newsletterControl,
    handleSubmit: handleNewsletterSubmit,
    formState: {
      errors: newsletterErrors,
      isSubmitting: isNewsletterSubmitting,
    },
    reset: resetNewsletterForm,
  } = newsletterForm;

  const watchedStates = watch("states");
  const watchedFiles = watch("files");

  // Handle clicking outside dropdown to close it
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, handleClickOutside]);

  const handleStateSelect = (state: string) => {
    const currentStates = watchedStates;
    const newStates = currentStates.includes(state)
      ? currentStates.filter((s) => s !== state)
      : [...currentStates, state];
    setValue("states", newStates);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes

    const validFiles = files.filter((file) => {
      const validTypes = [
        "video/mp4",
        "video/webm",
        "video/quicktime",
        "image/jpeg",
        "image/png",
        "application/pdf",
      ];
      return validTypes.includes(file.type);
    });

    const oversizedFiles = validFiles.filter((file) => file.size > maxFileSize);
    const acceptableFiles = validFiles.filter(
      (file) => file.size <= maxFileSize
    );

    if (oversizedFiles.length > 0) {
      toast({
        title: "Files too large",
        description: `${
          oversizedFiles.length
        } file(s) exceed the 5MB limit and were not added: ${oversizedFiles
          .map((f) => f.name)
          .join(
            ", "
          )}  Please upload smaller video files or reduce their size.`,
        variant: "destructive",
      });
    }

    if (watchedFiles.length + acceptableFiles.length > 5) {
      toast({
        title: "Too many files",
        description: "Maximum 5 files allowed",
        variant: "destructive",
      });
      return;
    }

    if (acceptableFiles.length > 0) {
      setValue("files", [...watchedFiles, ...acceptableFiles]);
    }

    event.target.value = "";
  };

  const removeFile = (index: number) => {
    const newFiles = watchedFiles.filter((_, i) => i !== index);
    setValue("files", newFiles);
  };

  const onSubmitDual = handleSubmit(async (data) => {
    try {
      // 1) Post to API and get file URLs back
      const apiFormData = new FormData();
      apiFormData.append("name", data.name);
      apiFormData.append("email", data.email);
      apiFormData.append("title", data.title);
      apiFormData.append("company", data.company);
      apiFormData.append("useCase", data.useCase);
      apiFormData.append("states", JSON.stringify(watchedStates));
      apiFormData.append("totalUnits", data.totalUnits);

      watchedFiles.forEach((file, index) => {
        apiFormData.append(`files[${index}]`, file);
      });

      const apiResponse = await axios.post("/api/deployment", apiFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // 2) Send a non-redirecting email via FormSubmit AJAX with pretty labels and file info
      try {
        const formSubmitData = new FormData();
        formSubmitData.append("_subject", "New Deployment Request");
        formSubmitData.append("_template", "table");
        formSubmitData.append("_captcha", "false");
        formSubmitData.append("Name", data.name);
        formSubmitData.append("Email", data.email);
        formSubmitData.append("Title", data.title);
        formSubmitData.append("Company", data.company);
        formSubmitData.append("Use Case", data.useCase);
        formSubmitData.append("States", watchedStates.join(", "));
        formSubmitData.append("Total Units", data.totalUnits);

        // Add file information
        const fileList = watchedFiles
          .map(
            (file, index) =>
              `${index + 1}. ${file.name} (${(file.size / 1024 / 1024).toFixed(
                2
              )}MB)`
          )
          .join("\n");
        formSubmitData.append("Uploaded Files", fileList);
        formSubmitData.append(
          "Note",
          "Files have been uploaded to secure storage and will be reviewed by our team."
        );

        // Also try to attach the actual files to FormSubmit
        watchedFiles.forEach((file, index) => {
          formSubmitData.append(`attachment_${index + 1}`, file, file.name);
        });

        await axios.post(
          "https://formsubmit.co/ajax/team@dynarobotics.ai",
          formSubmitData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } catch (e) {
        console.warn("FormSubmit AJAX failed (non-blocking):", e);
      }

      toast({
        title: "Request received!",
        description:
          "Thanks for your submission. We’ll review and get back to you shortly.",
      });

      // Reset the form state and selected files
      resetDeploymentForm({
        name: "",
        email: "",
        title: "",
        company: "",
        useCase: "",
        states: [],
        totalUnits: "",
        files: [],
      });
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Error submitting deployment:", error);
      toast({
        title: "Error",
        description: "Failed to submit deployment request to our API.",
        variant: "destructive",
      });
    }
  });

  const onNewsletterSubmit = async (data: NewsletterData) => {
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
      resetNewsletterForm();
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
    <section
      id="deployment-form"
      className="w-full relative"
      style={{
        backgroundImage:
          "url(/lovable-uploads/a73721e9-6bfa-485a-b25d-50bf945ce1ed.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Section wrapper with full width to match task cards alignment */}
      <div className="relative z-10 h-full flex flex-col justify-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-16 pb-12 sm:pb-16">
        {/* Two column layout: Each column contains header + content together */}
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-[64px] w-full">
          {/* Left Column - Header + Deployment Form */}
          <div className="flex flex-col w-full lg:w-1/2">
            {/* Left Column Header */}
            <div
              className="text-left mb-9"
              ref={headingRef}
              style={headingStyle}
            >
              <h2
                className="leading-tight"
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(28px, 5vw, 41px)",
                  fontWeight: "normal",
                  lineHeight: "1.1",
                }}
              >
                <span className="text-white">Start Deploying with DYNA</span>
              </h2>
            </div>

            {/* Deployment Form (AJAX only, no redirect) */}
            <form
              className="flex flex-col gap-y-[32px]"
              onSubmit={onSubmitDual}
            >
              {/* Hidden field to carry states selection (kept for potential future integrations) */}
              <input
                type="hidden"
                name="states"
                value={watchedStates.join(", ")}
              />
              {/* Requestor Name */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="name"
                  className="text-base font-medium text-white tracking-normal"
                >
                  Requester Name *
                </label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="name"
                      name="name"
                      type="text"
                      className={`w-full px-3 py-2 border rounded-md text-base font-normal text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.name && (
                  <span className="text-red-400 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="email"
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
                      id="email"
                      name="email"
                      type="email"
                      className={`w-full px-3 py-2 border rounded-md text-base font-normal text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
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

              {/* Title */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="title"
                  className="text-base font-medium text-white tracking-normal"
                >
                  Title *
                </label>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="title"
                      name="title"
                      type="text"
                      className={`w-full px-3 py-2 border rounded-md text-base font-normal text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                        errors.title ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.title && (
                  <span className="text-red-400 text-sm">
                    {errors.title.message}
                  </span>
                )}
              </div>

              {/* Company */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="company"
                  className="text-base font-medium text-white tracking-normal"
                >
                  Company *
                </label>
                <Controller
                  name="company"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="company"
                      name="company"
                      type="text"
                      className={`w-full px-3 py-2 border rounded-md text-base font-normal text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                        errors.company ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.company && (
                  <span className="text-red-400 text-sm">
                    {errors.company.message}
                  </span>
                )}
              </div>

              {/* Use Case */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="useCase"
                  className="text-base font-medium text-white tracking-normal"
                >
                  Use Case *
                </label>
                <Controller
                  name="useCase"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="useCase"
                      name="useCase"
                      type="text"
                      placeholder="e.g. cup placement, sorting, folding, kitting"
                      className={`w-full px-3 py-2 border rounded-md text-base font-normal text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder:text-gray-500 ${
                        errors.useCase ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.useCase && (
                  <span className="text-red-400 text-sm">
                    {errors.useCase.message}
                  </span>
                )}
              </div>

              {/* States Multi-Select */}
              <div className="flex flex-col gap-y-2">
                <label className="text-base font-medium text-white tracking-normal">
                  States Where Sites Are Located *
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full px-3 py-2 border rounded-md text-base font-normal text-gray-900 text-left focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white ${
                      errors.states ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    {watchedStates.length > 0
                      ? `${watchedStates.length} states selected`
                      : "Select states..."}
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {US_STATES.map((state) => (
                        <label
                          key={state}
                          className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={watchedStates.includes(state)}
                            onChange={() => handleStateSelect(state)}
                            className="mr-2"
                          />
                          <span className="text-gray-900">{state}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                {watchedStates.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {watchedStates.map((state) => (
                      <span
                        key={state}
                        className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-sm text-gray-900"
                      >
                        {state}
                        <button
                          type="button"
                          onClick={() => handleStateSelect(state)}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                {errors.states && (
                  <span className="text-red-400 text-sm">
                    {errors.states.message}
                  </span>
                )}
              </div>

              {/* Total Units */}
              <div className="flex flex-col gap-y-2">
                <label
                  htmlFor="totalUnits"
                  className="text-base font-medium text-white tracking-normal"
                >
                  Total Units Needed *
                </label>
                <Controller
                  name="totalUnits"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="totalUnits"
                      name="totalUnits"
                      type="number"
                      min="1"
                      className={`w-full px-3 py-2 border rounded-md text-base font-normal text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                        errors.totalUnits ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {errors.totalUnits && (
                  <span className="text-red-400 text-sm">
                    {errors.totalUnits.message}
                  </span>
                )}
              </div>

              {/* Upload Section */}
              <div className="flex flex-col gap-y-2">
                <label className="text-base font-medium text-white tracking-normal">
                  Upload Videos and Images of Task Workflows *
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center ${
                    errors.files ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-white mb-2">
                    Drag and drop files here, or click to browse
                  </p>
                  <p className="text-xs text-white mb-4">
                    MP4, MOV, JPG, PNG, PDF (max 5 files, 5MB per file)
                  </p>
                  <input
                    type="file"
                    name="files"
                    multiple
                    accept=".mp4,.mov,.webm,.jpg,.jpeg,.png,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById("file-upload")?.click()
                    }
                    className="inline-flex items-center justify-center border font-medium py-2 px-4 rounded-full transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--teal-gradient-start), var(--teal-gradient-middle), var(--teal-gradient-end))",
                      color: "white",
                      border: "1px solid var(--teal-gradient-middle)",
                    }}
                  >
                    Browse Files
                  </button>
                </div>

                {watchedFiles.length > 0 && (
                  <div className="space-y-2">
                    {watchedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded"
                      >
                        <span className="text-sm truncate text-black">
                          {file.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {errors.files && (
                  <span className="text-red-400 text-sm">
                    {errors.files.message}
                  </span>
                )}
              </div>

              {/* Start Deployment Button */}
              <div className="self-start">
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
                    {isSubmitting ? "Submitting..." : "Start Deployment"}
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

          {/* Right Column - Header + Newsletter Signup */}
          <div className="flex flex-col w-full lg:w-1/2">
            {/* Right Column Header */}
            <div className="text-left mb-9">
              <h3
                className="leading-tight"
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(28px, 5vw, 41px)",
                  fontWeight: "normal",
                  lineHeight: "1.1",
                  color: "white",
                }}
              >
                Join Our Newsletter
              </h3>
              {/* <p
                className="text-lg leading-relaxed mt-4"
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(16px, 1.5vw, 18px)",
                  fontWeight: "normal",
                  lineHeight: "1.5",
                  color: "white",
                }}
              >
                Stay updated on the latest developments in robotics and AI
                deployment. Get insights from real-world deployments and be the
                first to know about new capabilities.
              </p> */}
            </div>

            {/* Newsletter Form (AJAX only, no redirect) */}
            <form
              className="flex flex-col gap-y-[32px]"
              onSubmit={handleNewsletterSubmit(onNewsletterSubmit)}
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
                  control={newsletterControl}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="newsletter-email"
                      name="email"
                      type="email"
                      className={`w-full px-3 py-2 border rounded-md text-base font-normal text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${
                        newsletterErrors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                  )}
                />
                {newsletterErrors.email && (
                  <span className="text-red-400 text-sm">
                    {newsletterErrors.email.message}
                  </span>
                )}
              </div>

              {/* Subscribe Button */}
              <div className="self-start">
                <button
                  type="submit"
                  disabled={isNewsletterSubmitting}
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
                    {isNewsletterSubmitting ? "Subscribing..." : "Subscribe"}
                  </span>
                  {!isNewsletterSubmitting && (
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
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
