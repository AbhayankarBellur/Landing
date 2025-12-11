import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-black text-center font-montserrat"
        >
          Warmpawz
        </motion.h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/user-walkthrough")}
            className="px-8 py-4 bg-black text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-800 transition-colors"
          >
            End User Walk Through
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/vendor-onboarding")}
            className="px-8 py-4 bg-gray-100 text-black border border-gray-300 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-200 transition-colors"
          >
            Vendor Onboarding
          </motion.button>
        </div>
      </div>
    </main>
  );
};

export default Index;
