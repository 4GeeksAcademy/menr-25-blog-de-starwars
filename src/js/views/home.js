import React, { useContext, useEffect } from "react";
import { Characters } from "./characters";
import { Planets } from "./planets";
import { Species } from "./species";
import { Vehicles } from "./vehicles";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadData('people')
		actions.loadData('planets')
		actions.loadData('species')
		actions.loadData('vehicles')
	}, []);

	if(store.loading){
		return (
			<>
				<div className="loadingDiv">
					<img className="loadingImg" src="https://i.gifer.com/ZNeT.gif" alt="Loading"/>
					<div className="text-center text-white">Loading...</div>
				</div>
			</>
		);	
    }

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

