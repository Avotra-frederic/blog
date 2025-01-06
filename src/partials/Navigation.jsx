import { useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Navigation() {
  const [onScroll, setonScroll] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 70){
        setonScroll(true)
      }else{
        setonScroll(false);
      }
    })
  },[])
  return (
    <Navbar expand="lg" className={`navbar-dark bg-dark ${onScroll && "bg-dark"}`} fixed='top'>
      <Container>
        <Navbar.Brand href='#'>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="" className='nav-link'>Home</Link>
            <Link to={"/about"} className='nav-link'>About</Link>
            <Link to="/posts" className='nav-link'>Posts</Link>
            <Link to="#link" className='nav-link'>Contact</Link>
            <NavDropdown title="Tools" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">theme</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation