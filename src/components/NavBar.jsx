import styles from './NavBar.module.css'
import logo from '../assets/img/im.png'
import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


function OffcanvasExample() {
   return (
      <nav>
         {['sm'].map((expand) => (
            <Navbar key={expand} expand={expand} className={styles.nav}>
               <Navbar.Brand><span>Pedro H. Rocha</span></Navbar.Brand>
               <Navbar.Toggle style={{ textAlign:"center", border: "none", boxShadow: "none" }} className={styles.navbar_icon} />
               <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
               >
                  <Offcanvas.Header closeButton className={styles.offcanvas_header}>
                     <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Menu
                     </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className={styles.offcanvas_body}>
                     <Nav className="justify-content-end flex-grow-1">
                        <NavLink to='/' className={styles.nav_link}>Home</NavLink>
                        <NavLink to='/projects' className={styles.nav_link}>Projetos</NavLink>
                        <NavLink to='/contact' className={styles.nav_link}>Contato</NavLink>
                     </Nav>
                  </Offcanvas.Body>
               </Navbar.Offcanvas>
            </Navbar>
         ))}
      </nav>
   );
}

export default OffcanvasExample;