import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Species = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadData('species');
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1 className="mt-5">Species</h1>

                <Link to="/">
                    <button className="btn btn-primary bg-transparent learn-btn">Back home</button>
                </Link>
            </div>

            <div className="container main">
                <div className="scroll-container">
                    {store.species.map((specie) => (
                        <div className="col-md-4" key={specie.uid}>
                            <Card uid={specie.uid} name={specie.name} type={"species"} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
