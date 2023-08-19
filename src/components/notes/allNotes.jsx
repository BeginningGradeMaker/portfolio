import React from "react";

import Note from "./note";

import INFO from "../../data/user";

import "./styles/allNotes.css";

const AllNotes = () => {
	return (
		<div className="all-notes-container">
			{INFO.notes.map((note, index) => (
				<div className="all-notes-note" key={index}>
					<Note
						logo={note.logo}
						title={note.title}
						description={note.description}
						linkText={note.linkText}
						link={note.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllNotes;
