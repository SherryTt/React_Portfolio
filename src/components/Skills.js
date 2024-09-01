import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";


export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
		};

		return (
			<section className="skill" id="skills" >
				<Container>
					<Row>
						<Col>
						<div className="skill-bx">
						<TrackVisibility>
					   {({ isVisible }) =>
					   <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
							<h2>Skills</h2>
							<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
							</div>}
						</TrackVisibility>
							<Carousel className="skill-slider" responsive={responsive} infinite={true}>
								<div className="item">
									<img src={meter1} alt="Image" />
									<h5>Mobile App Development</h5>
								</div>
								<div className="item">
									<img src={meter2} alt="Image" />
									<h5>Web Development</h5>
								</div>
								<div className="item">
									<img src={meter3} alt="Image" />
									<h5>API Development</h5>
								</div>
								<div className="item">
									<img src={meter1} alt="Image" />
									<h5>UI/UX Design</h5>
								</div>
							</Carousel>
						</div>
						</Col>
					</Row>
				</Container>
				<img className="bg-img-left" src={colorSharp} />
			</section>
		)
}