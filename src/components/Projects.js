import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Move Network International",
      description: "A mountain-climbing app built using FastAPI, Mongo DB, and React. Integrated APIs for real-time updates on weather conditions and topological maps leveraging the database of British and Irish Hills. MunroGo is a comprehensive guide to all of Scotland's 282 Munros.",
      imgUrl: projImg3,
      link: "https://elijahram.gitlab.io/munro-go/"
    },
    {
      title: "MunroGo",
      description: "A mountain-climbing app built using FastAPI, Mongo DB, and React. Integrated APIs for real-time updates on weather conditions and topological maps leveraging the database of British and Irish Hills. MunroGo is a comprehensive guide to all of Scotland's 282 Munros.",
      imgUrl: projImg1,
      link: "https://elijahram.gitlab.io/munro-go/"
    },
    {
      title: "AutoMate",
      description: "A mountain-climbing app built using FastAPI, Mongo DB, and React. Integrated APIs for real-time updates on weather conditions and topological maps leveraging the database of British and Irish Hills. MunroGo is a comprehensive guide to all of Scotland's 282 Munros.",

      imgUrl: projImg2,
      link: "https://elijahram.gitlab.io/munro-go/"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects that I have worked on. Click on the project card to see the deployed application or the codebase.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
