import Card from 'react-bootstrap/Card';


export default function GroupCardComponent({group, onClick}){

    let imageUrl =
      'https://fastly.picsum.photos/id/1083/200/200.jpg?hmac=ocBiYtawFGXm884DNfTBRQy65ZWvsTQf_XCnlTUdtB4';

    return (
      <Card style={{ width: '100%', margin: 'auto' }} onClick={onClick}>
        <Card.Img
          variant="top"
          src={imageUrl}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <Card.Body style={{ padding: 0 }}>
          <p style={{ margin: '5%' }}>{group.mainText}</p>
        </Card.Body>
      </Card>
    );
}