import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadData('vehicles');
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between">
                <h1 className="mt-5">Vehicles</h1>

                <Link to="/">
                    <button className="btn btn-primary bg-transparent learn-btn">Back home</button>
                </Link>
            </div>

            <div className="container main">
                <div className="scroll-container">
                    {store.vehicles.map((vehicle) => (
                        <div className="col-md-4" key={vehicle.uid}>
                            <Card uid={vehicle.uid} name={vehicle.name} type={"vehicles"} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
