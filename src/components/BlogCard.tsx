import React from "react";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  onClick?: () => void;
  navigateTo?: string;
  externalUrl?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  imageUrl,
  imageAlt,
  onClick,
  navigateTo,
  externalUrl,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (externalUrl) {
      window.open(externalUrl, "_blank");
    } else if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={handleClick}>
      {/* Image container with 4:5 aspect ratio */}
      <div
        className="relative group overflow-hidden mb-4 hover-lift-enhanced"
        style={{
          aspectRatio: "4/5",
          width: "100%",
        }}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Title and date */}
      <div className="flex flex-col gap-2">
        <div
          style={{
            color: "white",
            fontWeight: "normal",
            fontSize: "clamp(14px, 3vw, 18px)",
            fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
          }}
        >
          {date}
        </div>
        <h2
          className="leading-tight"
          style={{
            color: "white",
            margin: "0px",
            fontSize: "clamp(16px, 4vw, 20px)",
            fontWeight: "500",
            fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            width: "100%",
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default BlogCard;
