import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadData('planets');
    }, []);

    if (store.loading || store.planets.length === 0) {
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
                <h1>Planets</h1>

                <Link to="/">
                    <button className="btn btn-primary bg-transparent learn-btn">Back home</button>
                </Link>
            </div>

            <div className="container main">
                <div className="scroll-container">
                    {store.planets.map((planet) => (
                        <div className="col-md-4" key={planet.uid}>
                            <Card uid={planet.uid} name={planet.name} type={"planets"} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
