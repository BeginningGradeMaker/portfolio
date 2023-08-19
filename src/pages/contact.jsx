import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. I post regular updates and engage with my
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and I look forward
							to hearing from you!
						</div>
					</div>

					{/* <div className="content">
						Address: 254 Phillip St, Waterloo, ON
						<h3>Phone Number: 211 978 3018</h3>
						<h3>Email:  <a href="mailto: z2552wan@uwaterloo.ca">
							z2552wan@uwaterloo.ca
						</a></h3>
						<h3>WeChat: Wangzhisu1013</h3>
						<h3>Current Term: Work Term</h3>
						<h3>Current Academic Level: 3B (Winter 2022)</h3>
						<h3>Current Course Load: CO 342, C0 367, CS 240, CS 241E, CS 251,
							PMATH 333
						</h3> */}
					{/* </div> */}
					<div className="subtitle socials-container">
						WeChat: Wangzhisu1013 <b></b>
						Current Term: Work Term <b></b>
						Current Academic Level: 4A (Fall 2023) <b></b>
						Current Course Load: N/A
						{/* <b></b> */}
						{/* <div className="contact-socials">
							<Socials />
						</div> */}
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;