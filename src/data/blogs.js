import React from "react";

function article_1() {
	return {
	};
}

function article_2() {
	return {
		date: "18 August 2023",
		title: "My first blog",
		description:
			"My first blog",
		style: ``,
		keywords: [
		],
		body: (
			<React.Fragment>
				<h1>Hello World.</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_2];

export default myArticles;
