import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Skills.css'
import data from '../../utils/data.json'
import { useEffect, useState } from "react";

export default function Skills() {
    const [ experienceYears, setExperienceYears ] = useState(null);

    useEffect(() => {
        setExperienceYears(getExperienceYears());
    }, [])

    function getExperienceYears() {
        const startDate = new Date('2022-09-01');
        const today = new Date();

        const differenceInMilliseconds = today - startDate;
        const oneDayMilliseconds = 24 * 60 * 60 * 1000;
        const daysDifference = Math.floor(differenceInMilliseconds / oneDayMilliseconds);
        console.log(daysDifference);

        return (daysDifference / 365).toFixed(1);
    }


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>I have been programming for {experienceYears} years and aspire to continuous development.<br /><br />In the future, after honing my skills as a frontend developer, I also want to study backend (Python/PHP).</p>
                        <Carousel responsive={data.responsive} infinite={true} className="skill-slider">
                            {
                                data.skills.map((item, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <h5>{item.translation}</h5>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
