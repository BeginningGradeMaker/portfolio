import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer" width="50%">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/resume">Resume</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/notes">Notes</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/blogs">Blogs</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				{/* <div className="footer-nav-link-item">nihao</div> */}
			</div>
		</React.Fragment>
	);
};

export default Footer;
