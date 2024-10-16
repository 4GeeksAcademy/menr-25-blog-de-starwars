import React, {useContext, useState, useEffect} from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router"; 

export const Card = ({ uid, name, type }) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const adjustedType = type === "people" ? "characters" : type;
    const details = store[`${type}Details`][uid] || {};
    const img = name === "Tatooine" 
        ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png/revision/latest?cb=20230819004008" 
        : `https://starwars-visualguide.com/assets/img/${adjustedType}/${uid}.jpg`;
    const navigate = useNavigate();

    useEffect(() => {
        setIsFavorite(store.favorites.some(fav => fav.uid === uid && fav.type === type));
    }, [uid, type, store.favorites]);

    const handleClick = () => {
        if (isFavorite) {
            actions.removeFavorites(uid, type);
        } else {
            actions.addToFavorites(uid, name, type); 
        }
        setIsFavorite(!isFavorite); 
    };

    const handleLearnMore = () => {
        actions.setSelectedItem(uid, type);
        navigate(`/info/${type}/${uid}`);
    };
    
    return (
        <>
            {/* style={{width: "19rem"}} */}
            <div className="card bg-transparent border border-light-subtle" style={{width: "19rem"}}>
                <img src={img} className="card-img-top" alt={name}/>

                <div className="card-body">
                    <h5 className="card-title titles">{name}</h5>

                        <p className="card-text text-white">
                            Personaje de Starwars
                        </p>



                    <div className="d-flex justify-content-between">
                        <button className="learn-btn bg-transparent" onClick={handleLearnMore}>Learn more!</button>
                        <button className={`favorite-btn bg-transparent ${isFavorite ? 'selected' : ''}`} onClick={handleClick}>
                            <FaRegHeart />
                        </button>
                    </div>

                </div>
            </div>
        
        </>
    )
}