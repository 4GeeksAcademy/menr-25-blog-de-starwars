import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const LearnMoreCard = () => {
    const { store } = useContext(Context);
    const { type, uid } = useParams();
    const item = store.selectedItem;

    if (!item) {
        return <div className="text-white">Loading...</div>
    };

    const properties = item.properties;
    const description = item.description || "Description not available";

    if (!properties) {
        return <div className="text-white">No properties available</div>;
    }

    const adjustedType = type === "people" ? "characters" : type;

    const imgSrc = properties.name === "Tatooine" 
        ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png/revision/latest?cb=20230819004008" 
        : `https://starwars-visualguide.com/assets/img/${adjustedType}/${uid}.jpg`;

    return (
        <>
            <div className="d-flex justify-content-between">
				<span></span>

				<Link to="/">
					<button className="btn btn-primary bg-transparent learn-btn">Back home</button>
				</Link>
			</div>

            <div className="card mb-3 bg-transparent border-0 wrapper main-container2">
                <div className="row g-0">
                    <div className="col-md-6 imageContainer">
                        <img src={imgSrc} className="img-fluid imgLearnMore" alt={properties.name}/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body cardPaddingBody bodyCard">
                            <h2 className="card-title titleLetters">{properties.name}</h2>
                            <p className="card-text pLetters">
                                {description} 
                            </p>
                        </div>
                    </div>
                </div>
                
                <hr className="border border-danger border-3"/>

                <div className="card-footer bg-transparent">
                    <div className="row text-center">

                        {Object.entries(properties).map(([key, value], index) => (
                            <div key={index} className="col-md-2 descTitleLetters">
                                <h6 className="titleLetters2">{key.replace('_', ' ').toUpperCase()}</h6>
                                <p className="descLetters">{value}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}