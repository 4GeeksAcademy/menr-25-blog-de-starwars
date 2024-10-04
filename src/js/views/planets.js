import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadData('planets');
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1 className="mt-5">Planets</h1>

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
