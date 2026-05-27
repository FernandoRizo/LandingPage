import { motion } from "framer-motion";
import { softShadow } from "../../styles/shadows";

export default function NeumoCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`rounded-[2rem] bg-slate-50 p-6 ${className}`}
      style={softShadow}
    >
      {children}
    </motion.div>
  );
}
