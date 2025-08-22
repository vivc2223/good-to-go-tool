import React from "react";
import { ArrowRight } from "lucide-react";

interface LineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: "white" | "black";
}

const LineButton: React.FC<LineButtonProps> = ({
  children,
  onClick,
  className = "",
  color = "white",
}) => {
  const textColor = color === "white" ? "text-white" : "text-black";
  const borderColor = color === "white" ? "border-white" : "border-black";

  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-3 transition-all duration-300 hover:gap-4 ${textColor} ${className}`}
    >
      <span
        className={`font-medium ${textColor}`}
        style={{
          fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
          fontSize: "clamp(16px, 5vw, 18px)",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          textDecorationThickness: "1px",
        }}
      >
        {children}
      </span>
      <div
        className={`w-8 h-8 rounded-full ${borderColor} border flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1`}
      >
        <ArrowRight size={16} className={textColor} />
      </div>
    </button>
  );
};

export default LineButton;
