import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import contactImg from '../../assets/img/contact-img.svg';
import mailSendImg from '../../assets/img/mail-send.png'
import mailErrorImg from '../../assets/img/mail-error.png'
import './Contact.css';


export default function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category] : value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch('https://us-central1-my-portfolio-server-7f900.cloudfunctions.net/addMessage/contact', {
            method: 'POST',
            headers: {
                "Content-Type" : "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result = await response.json();
        setFormDetails(formInitialDetails);

        if(result.code === 200){
            setStatus({success: true, message: "Message sent Successefuly"});
        } else {
            setStatus({ success : false, message: "Something went wrong, please try again later."});
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col 
                                    sm={6} 
                                    className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.firstName} 
                                        placeholder="First Name" 
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                        required />
                                </Col>
                                <Col 
                                    sm={6} 
                                    className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.lastName} 
                                        placeholder="Last Name" 
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col 
                                    sm={6} 
                                    className="px-1">
                                    <input 
                                        type="email" 
                                        value={formDetails.email} 
                                        placeholder="Email" 
                                        onChange={(e) => onFormUpdate('email', e.target.value)} 
                                        required/>
                                </Col>
                                <Col 
                                    sm={6} 
                                    className="px-1">
                                    <input 
                                        type="tel" 
                                        value={formDetails.phone} 
                                        placeholder="Phone No." 
                                        onChange={(e) => onFormUpdate('phone', e.target.value)} 
                                        />
                                </Col>
                                <Col>
                                    <textarea 
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                        required   
                                    ></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && (
                                        <Col className="mail-answer pt-3 text-center">
                                            <p className={status.success === false ? 'danger ' : 'success'}>{status.message}</p>
                                            <img src={status.success ? mailSendImg : mailErrorImg} alt="Mail send" />
                                        </Col>
                                    )
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}