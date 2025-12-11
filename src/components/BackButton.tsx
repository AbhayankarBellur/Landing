import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      onClick={() => navigate("/")}
      className="fixed top-6 left-6 z-50 p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-background transition-colors border border-border"
      aria-label="Go back to home"
    >
      <ArrowLeft className="w-5 h-5 text-foreground" />
    </motion.button>
  );
};

export default BackButton;
