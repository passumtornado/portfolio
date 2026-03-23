

type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
};

const Spinner = ({
  size = "md",
  className = "",
  label = "Loading",
}: SpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-5 w-5 border-2",
    lg: "h-7 w-7 border-[3px]",
  };

  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      role="status"
      aria-label={label}
    >
      <span
        className={`inline-block rounded-full border-primary/30 border-t-primary animate-spin ${sizeClasses[size]}`}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
};

export default Spinner;
