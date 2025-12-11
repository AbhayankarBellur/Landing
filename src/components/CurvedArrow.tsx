import { FC } from "react";

interface CurvedArrowProps {
  direction: "left" | "right";
  className?: string;
}

const CurvedArrow: FC<CurvedArrowProps> = ({ direction, className = "" }) => {
  const isLeft = direction === "left";

  return (
    <svg
      width="80"
      height="120"
      viewBox="0 0 80 120"
      fill="none"
      className={`${className} ${isLeft ? "scale-x-[-1]" : ""}`}
    >
      <path
        d="M10 10 Q 70 40, 40 80 Q 20 100, 40 110"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        className="text-foreground"
      />
      <path
        d="M30 100 L 40 115 L 50 105"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground"
      />
    </svg>
  );
};

export default CurvedArrow;
