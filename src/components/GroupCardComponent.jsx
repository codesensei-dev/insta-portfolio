import Card from 'react-bootstrap/Card';


export default function GroupCardComponent({ group, onClick }) {

  return (
    <Card style={{ width: '100%', margin: 'auto', height: '200px' }} onClick={onClick}>
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

  );
}