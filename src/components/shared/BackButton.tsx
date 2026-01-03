import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SCROLL } from "@/config/constants";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className }: BackButtonProps) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleBackToHome = () => {
    navigate("/");
  };

  // Handle scroll to show/hide back button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < SCROLL.navbarShowThreshold) {
        // Always show at top with larger threshold
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > SCROLL.navbarHideThreshold) {
        // Scrolling down - hide button
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show button
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Debounce scroll events for smoother performance
    let ticking = false;
    const debouncedHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.3 }}
      onClick={handleBackToHome}
      className={`fixed top-24 left-6 z-50 p-3 backdrop-blur-sm rounded-full shadow-lg transition-colors border ${className || "bg-background/80 border-border hover:bg-background text-foreground"}`}
      aria-label="Go back to home"
    >
      <ArrowLeft className="w-5 h-5" />
    </motion.button>
  );
};

export default BackButton;