import { AnimatePresence, motion } from "framer-motion";
import ContactTab from "./ContactTab";
import ProfileTab from "./ProfileTab";
import ProjectsTab from "./ProjectsTab";
import ServicesTab from "./ServicesTab";

export default function TabContent({ activeTab, t, language }) {
  const content = {
    perfil: <ProfileTab t={t} />,
    proyectos: <ProjectsTab t={t} />,
    servicios: <ServicesTab t={t} />,
    contacto: <ContactTab t={t} />,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${activeTab}-${language}`}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.5 }}
      >
        {content[activeTab]}
      </motion.div>
    </AnimatePresence>
  );
}
