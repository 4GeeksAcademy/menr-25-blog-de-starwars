import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadData("people");
	}, []);

	if (store.loading || store.people.length === 0) {
        return (
            <>
                <div className="loadingDiv">
                    <img className="loadingImg" src="https://i.gifer.com/ZNeT.gif" alt="Loading" />
                    <div className="text-center text-white">Loading...</div>
                </div>
            </>
        );
    }

	return (
		<>
			<div className="d-flex justify-content-between">
				<h1>Characters</h1>

				<Link to="/">
					<button className="btn btn-primary bg-transparent learn-btn">Back home</button>
				</Link>
			</div>

			<div className="container">
				<div className="scroll-container">
					{store.people.map((people) => (
						<div className="col-md-4" key={people.uid}>
							<Card uid={people.uid} name={people.name} type={"people"} />
						</div>
					))}
				</div>
			</div>

		</>
	);
};
