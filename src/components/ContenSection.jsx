import { motion } from 'framer-motion';

export default function ContentSection({ DisplayComponent }) {
  return (
    <motion.div
      style={{ textAlign: 'center', margin: '20px', position: 'relative', zIndex: 1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <DisplayComponent />
    </motion.div>
  );
}
