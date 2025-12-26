import React from "react";

interface BlogPostCardProps {
  title: string;
  date: string;
  imageUrl: string;
  onClick: () => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  date,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="flex flex-col cursor-pointer group" onClick={onClick}>
      <div
        className="relative overflow-hidden mb-4 hover-lift-enhanced"
        style={{
          height: "280px",
          width: "100%",
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-col">
        <h2
          className="line-clamp-1 mb-2"
          style={{
            color: "white",
            fontSize: "clamp(16px, 4vw, 20px)",
            fontWeight: "500",
            fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          title={title}
        >
          {title}
        </h2>
        <div
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "clamp(12px, 3vw, 14px)",
            fontWeight: "normal",
            fontFamily: "UntitledSans, system-ui, -apple-system, sans-serif",
          }}
        >
          {date}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
