import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { LiaPaperPlane } from "react-icons/lia";

function Contact() {
  const [data, setData] = useState({username:"",email:"",subject:"", message:""}) 
  /**
   * event = {target:{}}
   * @param {
   * } event 
   */
  const handleChange =(event)=>{
    setData((prevData)=>{
      return {...prevData, [event.target.name]:event.target.value}
    })

    console.log(data);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    emailjs.send("service_u40agsd","template_tch0cxh",data).then((response)=>{
      console.log(response.text);
    },(error)=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    emailjs.init({
      publicKey:"oUG9LH9W7RJu09DWh"
    })
  },[])

  return (
    <section>
      <Container className="py-5">
        <h1 className="text-center my-3">Contact</h1>
        <Row>
          <Col md={6}></Col>
          <Col md={6} className="py-3">
            <form action="" onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="username"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="username" name="username" value={data.username} onChange={handleChange}/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput1"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="email" name="email" value={data.email} onChange={handleChange} />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput2"
                label="Subject"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="subject" name="subject" value={data.subject} onChange={handleChange} />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  value={data.message}
                  onChange={handleChange}
                  name="message"
                />
              </FloatingLabel>
              <Button
                type="submit"
                color="warning"
                className="rounded-pill px-5"
                size="lg"
              >
                Submit&nbsp;
                <LiaPaperPlane size={20} />
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
