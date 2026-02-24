import Image from 'react-bootstrap/Image';
import { motion } from 'framer-motion';
import '../css/ProfileSection.css';

export default function ProfileSection({ user }) {
  return (
    <motion.div
      style={{ textAlign: 'center', margin: '10px', position: 'relative', zIndex: 1 }}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } }
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
        }}
      >
        <div className="profile-avatar-ring">
          <Image
            src={user.image}
            roundedCircle
            width="150"
            height="150"
            alt="codesensei profile image"
            style={{ width: '7%', minWidth: '150px', display: 'block', background: 'var(--avatar-bg)', transition: 'background 0.5s ease' }}
            loading="lazy"
          />
        </div>
      </motion.div>

      <link rel="preload" href={user.image} as="image" />

      <motion.h4
        className="profile-name"
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
        }}
      >
        {user.name}
      </motion.h4>

      <motion.h5
        className="profile-userId"
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
        }}
      >
        {user.userId}
      </motion.h5>

      <motion.h6
        className="profile-description"
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
        }}
      >
        {user.description}
      </motion.h6>
    </motion.div>
  );
}
