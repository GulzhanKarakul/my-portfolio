import { Col } from "react-bootstrap";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function ProjectCard({title, description, imgUrl, webUrl, gitUrl}) {
    return (
        <Col sm={6} md={4}> 
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span >{description}</span><br />
                    <div className='social-icon mt-2'>
                        <a href={webUrl}><FontAwesomeIcon icon={faLink} /></a>
                        <a href={gitUrl}><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
            </div>
        </Col>
    )
}

// Определяем типы ожидаемых свойств с помощью prop-types
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    webUrl: PropTypes.string.isRequired,
    gitUrl: PropTypes.string.isRequired
};