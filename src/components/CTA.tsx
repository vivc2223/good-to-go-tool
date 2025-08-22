import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CTA = () => {
  const [formData, setFormData] = useState({
    requestorName: "",
    title: "",
    email: "",
    company: "",
    useCase: "",
    states: "",
    totalUnits: "",
    files: null as FileList | null,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, useCase: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, files: e.target.files }));
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-black border border-black">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-black text-white mr-2">
              06
            </span>
            <span>Start Your Deployment</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Section Header */}
        <div className="mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight mb-4">
            Get started with DYNA
          </h2>
          <p className="text-xl text-gray-700">
            Let us know how we can support your use case.
          </p>
        </div>

        {/* Stats Grid with Custom Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Launch Steps */}
          <div className="text-left">
            <div className="mb-8">
              <img
                src="/lovable-uploads/1a6278d0-b357-40e4-a58b-b165a156452b.png"
                alt="Robot Arm Icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Launch in 3 Simple Steps
            </h3>
            <p className="text-gray-600 leading-relaxed">Buy. Train. Deploy.</p>
          </div>

          {/* Zero Cost */}
          <div className="text-left">
            <div className="mb-8">
              <img
                src="/lovable-uploads/25131572-a1f0-414f-8b32-fdefd8ea14f0.png"
                alt="Dollar Sign Icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Zero Upfront Cost
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Start generating ROI from day one — no capital expenditure
              required.
            </p>
          </div>

          {/* Performance */}
          <div className="text-left">
            <div className="mb-8">
              <img
                src="/lovable-uploads/f4cf0328-5c9a-4bc9-a97a-41167a5f7f2a.png"
                alt="Bar Chart Icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Proven Performance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              99% quality yield with 150% throughput over full-shift operations.
            </p>
          </div>
        </div>

        {/* Contact Form - moved directly after stats grid */}
        <div className="max-w-4xl">
          <form
            action="https://formsubmit.co/badejo.semilore.7@gmail.com"
            method="POST"
            className="space-y-6"
            encType="multipart/form-data"
            onSubmit={(e) => {
              // Post to API first, then allow native submit
              e.preventDefault();
              const formEl = e.currentTarget as HTMLFormElement;
              const apiFormData = new FormData();
              apiFormData.append("name", formData.requestorName);
              apiFormData.append("title", formData.title);
              apiFormData.append("email", formData.email);
              apiFormData.append("company", formData.company);
              apiFormData.append("useCase", formData.useCase);
              apiFormData.append(
                "states",
                formData.states
                  ? JSON.stringify(
                      formData.states
                        .split(",")
                        .map((s) => s.trim())
                        .filter(Boolean)
                    )
                  : "[]"
              );
              apiFormData.append("totalUnits", formData.totalUnits);
              if (formData.files) {
                Array.from(formData.files).forEach((file, idx) =>
                  apiFormData.append(`files[${idx}]`, file)
                );
              }
              apiFormData.append("message", formData.message);

              fetch("/api/deployment", { method: "POST", body: apiFormData })
                .catch(() => {})
                .finally(() => formEl.submit());
            }}
          >
            {/* FormSubmit configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New DYNA Deployment Inquiry"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/" />
            {/* Bridge controlled select to a native field */}
            <input type="hidden" name="useCase" value={formData.useCase} />
            {/* Row 1: Requestor Name & Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="requestorName"
                  className="text-sm font-medium text-gray-700"
                >
                  Requestor Name *
                </Label>
                <Input
                  id="requestorName"
                  name="requestorName"
                  type="text"
                  required
                  value={formData.requestorName}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="text-sm font-medium text-gray-700"
                >
                  Title *
                </Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>

            {/* Row 2: Email & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="company"
                  className="text-sm font-medium text-gray-700"
                >
                  Company *
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
            </div>

            {/* Row 3: Use Case (Full Width) */}
            <div className="space-y-2">
              <Label
                htmlFor="useCase"
                className="text-sm font-medium text-gray-700"
              >
                Use Case *
              </Label>
              <Select onValueChange={handleSelectChange} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your use case" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="factory">Factory</SelectItem>
                  <SelectItem value="laundry">Laundry</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Row 4: States & Total Units */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="states"
                  className="text-sm font-medium text-gray-700"
                >
                  States Where Sites Are Located *
                </Label>
                <Input
                  id="states"
                  name="states"
                  type="text"
                  required
                  value={formData.states}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="e.g., CA, NY, TX"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="totalUnits"
                  className="text-sm font-medium text-gray-700"
                >
                  Total Units Needed *
                </Label>
                <Input
                  id="totalUnits"
                  name="totalUnits"
                  type="number"
                  required
                  value={formData.totalUnits}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="Enter number of units"
                />
              </div>
            </div>

            {/* Row 5: File Upload (Full Width) */}
            <div className="space-y-2">
              <Label
                htmlFor="files"
                className="text-sm font-medium text-gray-700"
              >
                Upload videos and images of task workflows
              </Label>
              <p className="text-sm text-gray-500 mb-2">
                You may include demo clips, workcell layouts, or task
                recordings.
              </p>
              <Input
                id="files"
                name="files"
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="w-full"
              />
            </div>

            {/* Row 6: Message (Full Width) */}
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Message (optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your specific use case or requirements..."
                className="w-full min-h-[120px]"
              />
            </div>

            {/* Submit Button - line and arrow style */}
            <div className="flex justify-start pt-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 transition-all duration-300 hover:gap-4 text-black"
              >
                <span
                  className="text-lg font-medium text-black"
                  style={{
                    fontFamily:
                      "UntitledSans, system-ui, -apple-system, sans-serif",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    textDecorationThickness: "1px",
                  }}
                >
                  Start Deployment
                </span>
                <div className="w-8 h-8 rounded-full border-black border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
