import React from "react";
import { Characters } from "./characters";
import { Planets } from "./planets";
import { Species } from "./species";
import { Vehicles } from "./vehicles";

export const Home = () => {

	return (
		<>
			<div className="main-container">
				<div className="content">
					<Characters/>
					<Planets/>
					<Species/>
					<Vehicles/>
				</div>
			</div>

		</>
	);
};

