import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./huawei.jpeg"
								alt="Huawei Technologies Canada Co., Ltd"
								className="work-image"
							/>
							<div className="work-title">Huawei Technologies Canada Co., Ltd</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">September - December, 2023</div>
						</div>

						<div className="work">
							<img
								src="./ford.jpeg"
								alt="Ford Motor Company"
								className="work-image"
							/>
							<div className="work-title">Ford Motor Company</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">January - April, 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
