import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
    <section id="about" >
        <Container className="py-5">
            <h1 className="text-center my-3" data-aos="fade-up" data-aos-duration="1000">About</h1>
            <Row>
                <Col md={2}></Col>
                <Col md={8} className="py-3">
                <p className='text-center' data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at doloremque, quae dolorem, eius quas dicta, atque iusto suscipit cumque iste. Quisquam labore vero ipsum id inventore nemo non iste?</p>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    </section>
  )
}

export default About