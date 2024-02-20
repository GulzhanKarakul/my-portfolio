import { Col, Container, Row } from "react-bootstrap";
import logo from '../../assets/img/logo_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center justify-content-around">
                    <Col className="footer-image" sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://t.me/gulzhankarakul'><FontAwesomeIcon icon={faTelegram} /></a>
                            <a href='https://github.com/GulzhanKarakul'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href='https://www.linkedin.com/in/gulzhan-karakul-5aabb72aa/'><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                        <p>Phone Number <span className="primary">+77771156580</span></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}