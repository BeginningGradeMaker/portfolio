import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/resume/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/resume.css";

const Resume = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resume");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="resume-logo-container">
						<div className="resume-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="resume-container">
						<div className="resume-main">
							<div className="resume-right-side">
								<div className="title resume-title">
									{INFO.resume.title}
								</div>
								<div className="subtitle resume-subtitle">
									{/* {INFO.resume.description} */}
									{/* Embed the PDF using an iframe */}
									{/* <div className="resume-embed"> */}
									<iframe className="resume-resume"
										src="Zhisu.pdf"
										title="Resume"
										width="100%"
										height="600px"
									></iframe>
								</div>

							</div>

							<div className="resume-left-side">
								{/* <div className="resume-image-container">
									<div className="resume-image-wrapper">
										<img
											src="black-horse.png"
											alt="resume"
											className="resume-image"
										/>
									</div>
								</div> */}

								<div className="resume-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="resume-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
