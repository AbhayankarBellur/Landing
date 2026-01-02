import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      onClick={handleBackToHome}
      className={`fixed top-24 left-6 z-50 p-3 backdrop-blur-sm rounded-full shadow-lg transition-colors border ${className || "bg-background/80 border-border hover:bg-background text-foreground"}`}
      aria-label="Go back to home"
    >
      <ArrowLeft className="w-5 h-5" />
    </motion.button>
  );
};

export default BackButton;