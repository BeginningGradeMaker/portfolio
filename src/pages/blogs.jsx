import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/blogs/blogs";
import { ReactCusdis } from 'react-cusdis'

import INFO from "../data/user";
import SEO from "../data/seo";
import myBlogs from "../data/blogs";

import "./styles/blogs.css";

const Blogs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "blogs");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Blogs | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="blogs" />
				<div className="content-wrapper">
					<div className="blogs-logo-container">
						<div className="blogs-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="blogs-main-container">
						<div className="title blogs-title">
							{INFO.blogs.title}
						</div>

						<div className="subtitle blogs-subtitle">
							{INFO.blogs.description}
						</div>

						<div className="blogs-container">
							<div className="blogs-wrapper">
								{myBlogs.map((article, index) => (
									<div
										className="blogs-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
					<div>
						<ReactCusdis
							attrs={{
								host: 'https://cusdis.com',
								appId: 'd0d6e6e5-3769-44c5-ad30-d9483c4246a8',
								pageId: '2',
								pageTitle: 'PAGE_TITLE',
								pageUrl: 'PAGE_URL'
							}}
						/>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Blogs;
