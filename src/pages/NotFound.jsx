import Image from "react-bootstrap/Image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
        padding: '20px',
        position: 'relative',
        zIndex: 1,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Image
        style={{ width: '50%', minWidth: '100px', maxWidth: '200px', margin: '30px' }}
        src={`${process.env.PUBLIC_URL}/assets/error.png`}
      />
      <h4 className="poppins-bold" style={{ color: 'var(--text-primary)' }}>
        The Requested Page Was Not Found!
      </h4>
    </motion.div>
  );
}
