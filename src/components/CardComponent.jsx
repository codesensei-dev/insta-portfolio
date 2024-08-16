import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function CardComponent(props){

    let testUrl =
      'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg';
    let testButton =
      'https://i.pinimg.com/736x/7b/07/79/7b077939dcda060902df44d3700b6d56.jpg';
    return (
      <div style={{ width: '40%', textAlign: 'center', margin: '20px auto' }}>
        <Card>
          <Container style={{ padding: '10px' }}>
            <Row>
              <Col lg={2}>
                <Image src={testUrl} rounded width={'100%'} height={'100%'}/>
              </Col>
              <Col lg={8}>
                <p className='poppins-regular' style={{'margin' : '20px auto'}}> {props.link.text} </p>
              </Col>
              {/* <Col lg={2}>
                <Button width={'0px'}>
                  <Image src={testButton} rounded width={'100%'} />
                </Button>
              </Col> */}
            </Row>
          </Container>
        </Card>
      </div>
    );
}