import { FC } from "react";

interface CurvedArrowProps {
  direction: "left" | "right";
  className?: string;
}

const CurvedArrow: FC<CurvedArrowProps> = ({ direction, className = "" }) => {
  const isLeft = direction === "left";
  const arrowSrc = isLeft ? "/images/left.png" : "/images/right.png";

  return (
    <img
      src={arrowSrc}
      alt=""
      aria-hidden="true"
      className={`w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-32 object-contain ${className}`}
      loading="eager"
    />
  );
};

export default CurvedArrow;
