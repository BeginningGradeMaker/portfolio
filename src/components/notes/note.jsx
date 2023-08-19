import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/note.css";

const Note = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="note">
				<a href={link}>
					<div className="note-container">
						<div className="note-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="note-title">{title}</div>
						<div className="note-description">{description}</div>
						<div className="note-link">
							<div className="note-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="note-link-text">{linkText}</div>
						</div>
					</div>
				</a>
			</div>
		</React.Fragment>
	);
};

export default Note;
