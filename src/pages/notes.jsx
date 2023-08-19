import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllNotes from "../components/notes/allNotes";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/notes.css";

const Notes = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "notes");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Notes | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="notes" />
				<div className="content-wrapper">
					<div className="notes-logo-container">
						<div className="notes-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="notes-container">
						<div className="title notes-title">
							Lecture Notes
						</div>

						<div className="subtitle notes-subtitle">
							Here are all the well-typed notes I've taken during school terms. These notes are intended as a resource for myself; past, present, or future students of this course, and anyone
							interested in the material. The goal is to provide an end-to-end resource that covers all material discussed
							in the course displayed in an organized manner. These notes are my interpretation and transcription of the
							content covered in lectures. The instructor has not verified or confirmed the accuracy of these notes, and any
							discrepancies, misunderstandings, typos, etc. as these notes relate to course’s content is not the responsibility of
							the instructor. If you spot any errors or would like to contribute, please contact me directly.
						</div>

						<div className="notes-list">
							<AllNotes />
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

export default Notes;
