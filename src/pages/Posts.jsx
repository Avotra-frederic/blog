import { Card, Col, Container, Row } from "react-bootstrap"
import img from "./../assets/image/fond.jpg"
function Posts() {
  return (
    <section>
        <Container className="py-5">
            <h1 className="text-center my-5">Posts</h1>
            <Row>
                <Col md={4} className="mb-3" >
                    <Card className="shadow border-0">
                        <img src={img} alt="" className="card-img-top" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3" >
                    <Card className="shadow border-0">
                        <img src={img} alt="" className="card-img-top" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3" >
                    <Card className="shadow border-0">
                        <img src={img} alt="" className="card-img-top" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
               
               
            </Row>
        </Container>
    </section>
  )
}

export default Posts