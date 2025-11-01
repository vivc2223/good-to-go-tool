import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { supabase } from "@/lib/supabase";

const JobListings = () => {
  interface Role {
    location: string;
    title: string;
    link: string;
    isContactUs?: boolean;
  }

  interface Department {
    department: string;
    count: number;
    roles: Role[];
  }

  interface AshbyJobPosting {
    id: string;
    title?: string;
    departmentName?: string;
    locationName?: string;
  }

  interface AshbyResponse {
    results?: AshbyJobPosting[];
  }

  const [jobData, setJobData] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback job data in case API fails
  const fallbackJobData: Department[] = [
    {
      department: "Engineering",
      count: 9,
      roles: [
        {
          location: "Redwood City, CA",
          title: "Hardware Support Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/8c29f7f6-1f77-45fa-ba54-d5a7d80bbd08",
        },
        {
          location: "Redwood City, CA",
          title: "Senior Robotics Software Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/6e454635-290e-475d-bc21-7e88c1f5f3b9",
        },
        {
          location: "Redwood City, CA",
          title: "Senior Software Engineer, ML Data Platform",
          link: "https://jobs.ashbyhq.com/dyna-robotics/43dcc186-62b1-4641-9365-3cb9767fc653",
        },
        {
          location: "Redwood City, CA",
          title: "Sr. Robotics Hardware Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/4b938279-230a-490e-aa4b-a750c5880dc9",
        },
        {
          location: "Redwood City, CA",
          title: "Staff Backend Software Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/3d6e2493-b4fa-427d-8a82-2f20004f3426",
        },
        {
          location: "Redwood City, CA",
          title: "Staff Electrical Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/e11aa73b-bc91-40ac-b0dd-5e435d9bd597",
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
          title: "Staff Navigation Engineer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/1a1fa493-6f04-42d2-8a55-76ecfca6b30d",
        },
      ],
    },
    {
      department: "Operations",
      count: 6,
      roles: [
        {
          location: "Redwood City, CA",
          title: "Data Collection Operator",
          link: "https://jobs.ashbyhq.com/dyna-robotics/3dc6a8a5-98fe-4e33-8a61-08ccff952985",
        },
        {
          location: "Redwood City, CA",
          title: "Enterprise Account Executive",
          link: "https://jobs.ashbyhq.com/dyna-robotics/5c6d7c20-a3a9-474f-a588-1f78277c1c3d",
        },
        {
          location: "Redwood City, CA",
          title: "Industrial Designer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/f9f66415-c495-42a1-81c1-dabae3c2ebde",
        },
        {
          location: "Redwood City, CA",
          title: "Model Product Manager",
          link: "https://jobs.ashbyhq.com/dyna-robotics/da2e4c70-72cf-4fa9-857b-9ae1593d0c74",
        },
        {
          location: "Los Angeles, CA",
          title: "Robot Safety Operator",
          link: "https://jobs.ashbyhq.com/dyna-robotics/2cd2835a-7025-4842-9fc0-4b16c011aaeb",
        },
        {
          location: "Redwood City, CA",
          title: "Technical Sourcer",
          link: "https://jobs.ashbyhq.com/dyna-robotics/590c1681-5737-48c8-89fd-9232e4edfd48",
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
  ];

  // Transform Ashby job postings into our department-based format
  const transformAshbyJobs = (jobPostings: AshbyJobPosting[]): Department[] => {
    // Group jobs by department
    const departmentMap = new Map<string, Role[]>();

    jobPostings.forEach((job) => {
      // Extract department from departmentName
      const department = job.departmentName || "Other";

      // Extract location from locationName
      const location = job.locationName || "Location TBD";

      // Extract title
      const title = job.title || "Position";

      // Construct link using job id
      const link = `https://jobs.ashbyhq.com/dyna-robotics/${job.id}`;

      if (!departmentMap.has(department)) {
        departmentMap.set(department, []);
      }

      departmentMap.get(department)!.push({
        location,
        title,
        link,
      });
    });

    // Convert to array format and sort by department name
    const departments: Department[] = Array.from(departmentMap.entries()).map(
      ([department, roles]) => ({
        department,
        count: roles.length,
        roles,
      })
    );

    // Sort departments alphabetically
    departments.sort((a, b) => a.department.localeCompare(b.department));

    return departments;
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Call the Supabase Edge Function
        const { data, error: fetchError } = await supabase.functions.invoke(
          "fetch-ashby-jobs",
          {
            body: { listedOnly: true, status: "OPEN" },
          }
        );
        if (fetchError) {
          throw fetchError;
        }

        // Transform Ashby API response to our format
        const response = data as AshbyResponse;
        if (response?.results) {
          const transformedData = transformAshbyJobs(response.results);
          setJobData(transformedData);
        } else {
          // If no data or unexpected format, use fallback
          // setJobData(fallbackJobData);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load job listings");
        // Use fallback data on error
        setJobData(fallbackJobData);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        {/* Loading State */}
        {loading && (
          <div className="text-white mb-8">
            <p
              style={{
                fontFamily:
                  "UntitledSans, system-ui, -apple-system, sans-serif",
              }}
            >
              Loading job listings...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-white mb-8">
            <p
              style={{
                fontFamily:
                  "UntitledSans, system-ui, -apple-system, sans-serif",
                color: "#ff6b6b",
              }}
            >
              {error}
            </p>
          </div>
        )}

        {/* Job Listings Accordion - updated for black background */}
        {jobData.length > 0 ? (
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
        ) : (
          !loading && (
            <div className="text-white mb-8">
              <p
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                }}
              >
                No job listings available at this time.
              </p>
            </div>
          )
        )}

        {/* Contact Us Section */}
        <div className="mt-12">
          <button
            onClick={() => {
              window.location.href = "mailto:jobs@dynarobotics.ai";
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
