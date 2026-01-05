import React from "react";

export type ProfileType =
  | "Business Customer"
  | "Media"
  | "Investor"
  | "Other";

interface ProfileSelectionProps {
  selectedProfile: ProfileType | null;
  onSelectProfile: (profile: ProfileType) => void;
}

const profiles = [
  {
    type: "Business Customer" as ProfileType,
    description: "Explore automation solutions",
    image: "/lovable-uploads/dyna-robot.jpg",
  },
  {
    type: "Media" as ProfileType,
    description: "Press and media inquiries",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=1200&fit=crop&q=80",
  },
  {
    type: "Investor" as ProfileType,
    description: "Investment opportunities",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1200&fit=crop&q=80",
  },
  {
    type: "Other" as ProfileType,
    description: "General inquiries",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1200&fit=crop&q=80",
  },
];

const ProfileSelection: React.FC<ProfileSelectionProps> = ({
  selectedProfile,
  onSelectProfile,
}) => {
  return (
    <div className="w-full">
      <h2
        className="text-center mb-8"
        style={{
          fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
          fontSize: "clamp(24px, 5vw, 32px)",
          fontWeight: "500",
          color: "white",
        }}
      >
        Choose your profile
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {profiles.map(({ type, description, image }) => (
          <button
            key={type}
            onClick={() => onSelectProfile(type)}
            className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedProfile === type
                ? "border-[#FF4D00]"
                : "border-gray-700 hover:border-gray-500"
            }`}
            style={{
              aspectRatio: "3/4",
              minHeight: "280px",
            }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 text-left">
              <h3
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(18px, 4vw, 24px)",
                  fontWeight: "500",
                  color: "white",
                  marginBottom: "8px",
                }}
              >
                {type}
              </h3>
              <p
                style={{
                  fontFamily:
                    "UntitledSans, system-ui, -apple-system, sans-serif",
                  fontSize: "clamp(12px, 3vw, 14px)",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                {description}
              </p>
            </div>

            {/* Selection indicator */}
            {selectedProfile === type && (
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 bg-[#FF4D00] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8L6 11L13 4"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSelection;
