import React from "react";
import { Download } from "lucide-react";

type AnimatedBorderButtonProps = {
  className?: string;
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  onClick?: () => void;
};

const AnimatedBorderButton = ({
  className,
  size = "default",
  children,
  backgroundColor = "bg-black",
  borderColor = "from-primary via-primary/50 to-primary",
  onClick,
}: AnimatedBorderButtonProps) => {
  const baseClasses =
    "relative rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg overflow-hidden group";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className || ""}`;

  return (
    <button onClick={onClick} className={classes}>
      {/* Animated Border */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r ${borderColor} opacity-75 group-hover:opacity-100 transition-opacity`}
        style={{
          animation: "spin 3s linear infinite",
        }}
      />

      {/* Inner Background */}
      <div
        className={`absolute inset-0.5 rounded-full ${backgroundColor} backdrop-blur-sm group-hover:backdrop-filter`}
        style={{
          backdropFilter: "blur(16px)",
        }}
      />

      {/* Content */}
      <span className="relative flex items-center justify-center gap-2 text-white">
        {children}
        <Download className="w-4 h-4" />
      </span>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .group:hover .animated-border-spinner {
          animation-play-state: paused;
        }

        button.group:hover {
          background-color: color-mix(in srgb, #20b2a6 15%, transparent);
          backdrop-filter: blur(16px);
          box-shadow: 0 0 20px color-mix(in srgb, #20b2a6 20%, transparent);
        }

        button.group:hover > div:first-child {
          animation-play-state: paused;
        }
      `}</style>
    </button>
  );
};

export default AnimatedBorderButton;
