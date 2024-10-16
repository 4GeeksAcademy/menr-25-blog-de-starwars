import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Species = () => {
    const { store, actions } = useContext(Context);

    // useEffect(() => {
    //     actions.loadData('species');
    // }, []);

    if (store.loading || store.species.length === 0) {
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
                <h1>Species</h1>

                <Link to="/">
                    <button className="btn btn-primary bg-transparent learn-btn">Back home</button>
                </Link>
            </div>

            <div className="container main">
                <div className="scroll-container">
                    {store.species.map((specie) => (
                        <div key={specie.uid}>
                            <Card uid={specie.uid} name={specie.name} type={"species"} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
