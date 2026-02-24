import Card from 'react-bootstrap/Card';
import { motion } from 'framer-motion';

export default function GroupCardComponent({ group, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <Card style={{ width: '100%', margin: 'auto', height: '200px' }}>
        <Card.Img
          variant="top"
          src={group.image}
          alt="Group Image"
          style={{ objectFit: 'cover', objectPosition: 'center', height: '70%', width: '100%' }}
        />
        <Card.Body style={{ padding: 0, height: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '5%', textAlign: 'center' }}>{group.mainText}</p>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
