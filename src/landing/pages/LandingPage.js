import { connect } from 'react-redux';
import { Container, Image, Row, Col, Card, Alert } from 'react-bootstrap';

import companyBranding from '../../assets/CompanyBranding.jpg';

const LandingPage = (props) => {
  const { user_status } = props;
  const not_active_alert =
    user_status.loggedIn && !user_status.approved ? (
      <Alert variant="danger">
        Your account is not activated. Go to{' '}
        <Alert.Link href="#">CYBER MINDS</Alert.Link>. to activate.
      </Alert>
    ) : null;

  return (
    <>
      <Container>
        {not_active_alert}

        <Image width="100%" src={companyBranding} fluid />
        <Row style={{ marginTop: '25px', marginBottom: '25px' }}>
          <Col sm={4}>
            <Card bg="dark" text="light" style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card bg="dark" text="light" style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card bg="dark" text="light" style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(LandingPage);
