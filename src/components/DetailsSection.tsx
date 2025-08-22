import React, { useState } from "react";

const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="w-full bg-white py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            See it for yourself
          </h2>
          <p className="text-lg text-gray-600">
            Request access to see DYNA in action and learn how it can transform
            your operations.
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-elegant p-6 sm:p-8">
          <form
            action="https://formsubmit.co/badejo.semilore.7@gmail.com"
            method="POST"
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const formEl = e.currentTarget as HTMLFormElement;
              const body = {
                name: formData.fullName,
                email: formData.email,
                title: "",
                company: formData.company,
                useCase: "Request access",
                states: [],
                totalUnits: "0",
              };
              fetch("/api/deployment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              })
                .catch(() => {})
                .finally(() => formEl.submit());
            }}
          >
            {/* FormSubmit configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New Request Access submission"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/" />
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company (optional)"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
              >
                Request access
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
