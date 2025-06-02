// src/components/ui/Badge.tsx
import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
