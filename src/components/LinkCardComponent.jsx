import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/Container';

export default function LinkCardComponent({link}){
    return (
      <div
        style={{ textAlign: 'center', margin: '20px auto', maxWidth: '600px' }}
      >
        <a href={link.url} target="_blank" style={{ textDecoration: 'none' }}>
          <Card>
            <Container style={{ padding: '0 10px' }}>
              <Row>
                <Col
                  lg={2}
                  xs={2}
                  style={{
                    padding: '5px',
                    margin: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    fluid
                    src={link.thumbnail}
                    rounded
                    style={{
                      aspectRatio: '1/1',
                      width: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </Col>
                <Col
                  lg={8}
                  xs={8}
                  style={{
                    margin: '5px',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Card.Text
                    className="poppins-regular"
                    style={{ margin: '0' }}
                  >
                    {link.text}
                  </Card.Text>
                </Col>
                {/* <Col lg={2}>
                <Button width={'0px'}>
                  <Image src={testButton} rounded width={'100%'} />
                </Button>
              </Col> */}
              </Row>
            </Container>
          </Card>
        </a>
      </div>
    );
}