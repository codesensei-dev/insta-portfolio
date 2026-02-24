import Image from "react-bootstrap/Image";
import { motion } from "framer-motion";

export default function FooterSection({ user }) {
  return (
    <motion.div
      style={{ textAlign: 'center', margin: '10px', position: 'relative', zIndex: 1 }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
      }}
    >
      <motion.h5
        className="poppins-medium"
        style={{ margin: '15px 0px' }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        Sare kaani kaani kaani...
      </motion.h5>

      <motion.h6
        className="poppins-regular"
        style={{ margin: '15px 0px' }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        Follow me on
      </motion.h6>

      <div>
        {user.socialLinks.map((socaillink, index) => {
          return (
            <motion.a
              key={index}
              href={socaillink.url}
              style={{ margin: '10px', display: 'inline-block' }}
              aria-label="Instagram Link"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 12 } }
              }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                className="social-icon"
                src={socaillink.icon}
                style={{ aspectRatio: '1/1', width: '40px' }}
              />
            </motion.a>
          );
        })}
      </div>

      <motion.p
        className="poppins-regular"
        style={{ margin: '30px 0px 5px', color: 'var(--text-faint)' }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } }
        }}
      >
        Copyright © 2024 Gowtham Paruchuru
      </motion.p>
    </motion.div>
  );
}
