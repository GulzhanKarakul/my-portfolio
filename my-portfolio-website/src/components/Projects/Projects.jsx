import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { projects } from '../../utils/constants'
import './Projects.css'

export default function Projects() {


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>My Projects</h2>
                        <p>During my professional journey, I have developed various web projects, encompassing both commercial and non-commercial ventures. Below, I will list some of them, and you can explore them through the following links:</p>
                        <Tab.Container id='projects-tab' defaultActiveKey='first'>
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first' className="text-center">
                                    <h5 className="mb-4">Html, Css and Vanilla JS Projects</h5>
                                    <Row>
                                        {
                                            projects.vanillaJS.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project} 
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second' className="text-center">
                                    <h5 className="mb-4">React and React Native Projects</h5>
                                    <Row>
                                        {
                                            projects.react.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project} 
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third' className="text-center">
                                    <h5 className="mb-4">Vue Projects</h5>
                                    <Row>
                                        {
                                            projects.vue.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...project} 
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}