import React from 'react';
// Importa i componenti necessari da react-bootstrap
import { Navbar, Container, Nav, FormControl, InputGroup, NavDropdown } from 'react-bootstrap';
// Importa il componente NavLink da react-router-dom
import { NavLink } from 'react-router-dom';

// Definisce il componente LinkedInNavbar
export default function LinkedInNavbar() {
  return (
    // Definisce la barra di navigazione con stile e classi specifiche
    <Navbar bg='white' expand='lg' className='top-0 w-100 start-0 fixed-top shadow' style={{height:'64px'}}>
      <Container className='pt-1 pb-2'>
        {/* Logo e barra di ricerca */}
        <NavLink to='/' className='logo-img me-4'>
          <img
            src='https://blog.waalaxy.com/wp-content/uploads/2021/01/index.png'
            alt='LinkedIn Logo'
            style={{ width: '35px' }}
          />
        </NavLink>
        <InputGroup className='d-none d-lg-flex w-25 input-search'>
          <FormControl
            placeholder='Cerca'
            aria-label='Cerca'
            className='bg-light'
          />
          <InputGroup.Text>
            <i className='fas fa-search'></i>
          </InputGroup.Text>
        </InputGroup>

        {/* Toggle per la visualizzazione mobile */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='me-3'/>
        <Navbar.Collapse id='basic-navbar-nav' className='nav-collapse pt-md-5 pt-lg-0 '>
          <Nav className='m-auto nav'>
            {/* Collegamenti di navigazione */}
            <NavLink to='/' className='nav-link d-flex flex-column align-items-center me-4' id='home'>
              <i className='fas fa-home mt-1'></i>
              <span>Home</span>
            </NavLink>
            <Nav.Link href='#network' className='d-flex flex-column align-items-center me-4' id='network'>
              <i className='fas fa-user-friends mt-1'></i>
              <span>Rete</span>
            </Nav.Link>
            <Nav.Link href='#jobs' className='d-flex flex-column align-items-center me-3' id='work'>
              <i className='fas fa-briefcase mt-1'></i>
              <span>Lavoro</span>
            </Nav.Link>
            <Nav.Link href='#messaging' className='d-flex flex-column align-items-center me-3' id='chat'>
              <i className='fas fa-comment-dots mt-1'></i>
              <span>Messaggistica</span>
            </Nav.Link>
            <Nav.Link href='#notifications' className='d-flex flex-column align-items-center me-4' id='notifiche'>
              <i className='fas fa-bell mt-1'></i>
              <span>Notifiche</span>
            </Nav.Link>
            {/* Dropdown per il profilo utente */}
            <NavDropdown title={<span className='d-flex flex-column align-items-center' id='profile'><i className='fas fa-user'></i>Tu</span>} id='nav-dropdown' className='d-flex flex-column align-items-center'>
              <NavDropdown.Item ><NavLink to='/' className='link-dark'/>Profilo</NavDropdown.Item>
              <NavDropdown.Item href='#settings'>Impostazioni</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#logout'>Logout</NavDropdown.Item>
            </NavDropdown>
            <div className='divider ms-5'></div>
          </Nav>      

          <Nav>
            {/* Dropdown per le aziende */}
            <NavDropdown title={<span className='d-flex flex-column align-items-center'><i className='bi bi-grid-3x3-gap-fill'></i>Per le aziende</span>} id='nav-dropdown-business' className='d-flex flex-column align-items-center'>
              <NavDropdown.Item href='#business-profile'>Profilo aziendale</NavDropdown.Item>
              <NavDropdown.Item href='#business-settings'>Impostazioni aziendali</NavDropdown.Item>
            </NavDropdown>
            <div className='w-50 try'>
              Prova Premium per 0 EUR
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
