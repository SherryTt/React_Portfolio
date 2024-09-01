import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Projects = () => {

	const projects = [

		{
			title: "Project1",
			description: "Design & Development",
			imgUrl: projImg1,
		},
		{
			title: "Project2",
			description: "Design & Development",
			imgUrl: projImg2,
		},
		{
			title: "Project3",
			description: "Design & Development",
			imgUrl: projImg3,
		},
		{
			title: "Project1",
			description: "Design & Development",
			imgUrl: projImg1,
		},
		{
			title: "Project2",
			description: "Design & Development",
			imgUrl: projImg2,
		},
		{
			title: "Project3",
			description: "Design & Development",
			imgUrl: projImg3,
		},
	];

	return (
		<section className="project" id="project">
		  <Container>
		     <Row>
				<Col>
				<TrackVisibility>
					   {({ isVisible }) =>
					   <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
					<h2>Projects</h2>
					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
					</div>}
						</TrackVisibility>
					 <Tab.Container id="projects-tabs" defaultActiveKey="first">
					 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
						<Nav.Item>
							<Nav.Link eventKey="first">Tab 1</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second">Tab 2</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="third">Tab 3</Nav.Link>
						</Nav.Item>
					  </Nav>
					  <Tab.Content>
						<Tab.Pane eventKey="first">
							<Row>
								{
									projects.map ((project, index ) => {
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
						<Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
						<Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
					  </Tab.Content>
					  </Tab.Container>
				</Col>
			 </Row>
		  </Container>
		  <img className="background-image-right" src={colorSharp2}></img>
		</section>
	)
}