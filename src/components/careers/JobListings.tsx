import React from "react";
import { ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const JobListings = () => {
  interface Role {
    location: string;
    title: string;
    link: string;
    isContactUs?: boolean;
  }
  const jobData = [
    {
      department: "Engineering",
      count: 7,
      roles: [
        {
          location: "Redwood City, CA",
          title: "Senior Software Engineer, Data Platform",
          link: "https://jobs.ashbyhq.com/dyna-robotics/43dcc186-62b1-4641-9365-3cb9767fc653",
        },
        {
          location: "Redwood City, CA",
          title: "Senior Software Engineer, DevOps",
          link: "https://jobs.ashbyhq.com/dyna-robotics/37016340-4b33-4a26-b66c-315f715a99c6",
        },
        {
          location: "Redwood City, CA",
          title: "Senior Robotics Software Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/6e454635-290e-475d-bc21-7e88c1f5f3b9",
        },
        {
          location: "Redwood City, CA",
          title: "Staff Backend Software Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/3d6e2493-b4fa-427d-8a82-2f20004f3426",
        },
        {
          location: "Redwood City, CA",
          title: "Staff Full Stack Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/6a053a64-8959-434d-885b-92cbbd672aa2",
        },
        {
          location: "Redwood City, CA",
          title: "Staff Machine Learning Infrastructure Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/ec8f09de-ee26-4117-9b41-d317b074c2dc",
        },
        {
          location: "Redwood City, CA",
          title: "Senior Robotics Hardware Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/4b938279-230a-490e-aa4b-a750c5880dc9",
        },
      ],
    },
    {
      department: "Research",
      count: 1,
      roles: [
        {
          location: "Redwood City, CA",
          title: "Research Engineer/ Scientist",
          link: "https://jobs.ashbyhq.com/dyna-robotics/357b1b23-0712-489e-b336-1462f186cba7",
        },
      ],
    },
    {
      department: "Operations",
      count: 3,
      roles: [
        {
          location: "Redwood City, CA",
          title: "Data Annotation Specialist",
          link: "https://jobs.ashbyhq.com/dyna-robotics/080a2b88-f724-4585-8d16-2d4839a1d563",
        },
        {
          location: "Redwood City, CA",
          title: "Enterprise Account Executive",
          link: "https://jobs.ashbyhq.com/dyna-robotics/5c6d7c20-a3a9-474f-a588-1f78277c1c3d",
        },
        {
          location: "Redwood City, CA",
          title: "Model Product Manager",
          link: "https://jobs.ashbyhq.com/dyna-robotics/da2e4c70-72cf-4fa9-857b-9ae1593d0c74",
        },
      ],
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16 bg-black">
      <div className="max-w-4xl">
        {/* Section Header - matching home page typography */}
        <div className="mb-12">
          <h2
            className="leading-tight mb-6"
            style={{
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontSize: "clamp(28px, 5vw, 41px)",
              fontWeight: "normal",
              lineHeight: "1.1",
              color: "white",
            }}
          >
            Open Roles
          </h2>
          <p
            className=""
            style={{
              color: "white",
              fontSize: "clamp(16px, 5vw, 20px)",
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontWeight: "normal",
            }}
          >
            Join our team to build the future of robotics and AI.
          </p>
        </div>

        {/* Job Listings Accordion - updated for black background */}
        <Accordion type="multiple" className="space-y-4">
          {jobData.map((department, index) => (
            <AccordionItem
              key={department.department}
              value={`department-${index}`}
              className="border border-gray-600 rounded-lg overflow-hidden bg-black"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-900 transition-colors duration-300">
                <div className="flex items-center justify-between w-full pr-4">
                  <span
                    className="text-xl"
                    style={{
                      color: "white",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontWeight: "normal",
                    }}
                  >
                    {department.department}
                  </span>
                  <span
                    className="text-xl"
                    style={{
                      color: "white",
                      fontFamily:
                        "UntitledSans, system-ui, -apple-system, sans-serif",
                      fontWeight: "normal",
                    }}
                  >
                    {department.count.toString().padStart(2, "0")}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-0 pb-0">
                <div className="space-y-0">
                  {department.roles.map((role, roleIndex) => (
                    <div
                      key={roleIndex}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center px-6 py-4 border-t border-gray-600 hover:bg-gray-900 transition-colors duration-300"
                    >
                      <div
                        style={{
                          color: "white",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                          fontWeight: "normal",
                        }}
                      >
                        {role.location}
                      </div>
                      <div
                        style={{
                          color: "white",
                          fontFamily:
                            "UntitledSans, system-ui, -apple-system, sans-serif",
                          fontWeight: "normal",
                        }}
                      >
                        {role.title}
                      </div>
                      <div className="flex justify-start md:justify-end">
                        <button
                          onClick={() => {
                            window.open(role.link, "_blank");
                          }}
                          className="group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 text-white"
                        >
                          <span
                            className="text-sm"
                            style={{
                              fontFamily:
                                "UntitledSans, system-ui, -apple-system, sans-serif",
                              fontWeight: "normal",
                              textDecoration: "underline",
                              textUnderlineOffset: "4px",
                              textDecorationThickness: "1px",
                              color: "white",
                            }}
                          >
                            Apply Now
                          </span>
                          <div className="w-6 h-6 rounded-full border-white border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                            <svg
                              width="12"
                              height="12"
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
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Us Section */}
        <div className="mt-12">
          <button
            onClick={() => {
              window.location.href = "mailto:careers@dyna.co";
            }}
            className="group inline-flex items-center gap-3 transition-all duration-300 hover:gap-4 text-white"
          >
            <span
              className="text-lg"
              style={{
                fontFamily:
                  "UntitledSans, system-ui, -apple-system, sans-serif",
                fontWeight: "normal",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationThickness: "1px",
                color: "white",
              }}
            >
              Have another role in mind? Contact Us
            </span>
            <div className="w-8 h-8 rounded-full border-white border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
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
          </button>
        </div>

        {/* Equal Opportunity Footer - updated for black background */}
        <div className="mt-16 pt-8 border-t border-gray-600">
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "white",
              fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
              fontWeight: "normal",
            }}
          >
            DYNA is an equal opportunity employer committed to diversity and
            inclusion. We prohibit discrimination based on race, color,
            religion, sex, sexual orientation, gender identity, national origin,
            disability, or any other protected characteristic as defined by law.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
