import { Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <section id="home">
      <Container className="h-100">
        <Row className="h-100">
          <Col
            className="h-100 d-flex flex-column justify-content-center"
            md={6}
          >
            <h1>Bonjour les amis</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              ullam eos voluptatum suscipit non architecto!
            </p>
            <a
              href=""
              className="btn btn-warning rounded-pill maBtn px-5 btn-lg text-uppercase shadow"
            >
              Nous contacter
            </a>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
