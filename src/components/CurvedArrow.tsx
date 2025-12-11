import { FC } from "react";

interface CurvedArrowProps {
  direction: "left" | "right";
  className?: string;
}

const CurvedArrow: FC<CurvedArrowProps> = ({ direction, className = "" }) => {
  const isLeft = direction === "left";

  return (
    <svg
      width="60"
      height="100"
      viewBox="0 0 60 100"
      fill="none"
      className={`${className} ${isLeft ? "scale-x-[-1]" : ""}`}
    >
      {/* Main curved line - parenthesis style curve */}
      <path
        d="M30 5 Q 55 30, 55 50 Q 55 70, 30 95"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        className="text-foreground"
      />
      {/* Arrow head at bottom */}
      <path
        d="M20 85 L 30 95 L 30 82"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      />
    </svg>
  );
};

export default CurvedArrow;
