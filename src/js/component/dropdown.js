import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { FaRegTrashCan } from "react-icons/fa6";

export const Dropdown = () => {
    const { store, actions } = useContext(Context);

    const handleRemoveClick = (uid, type) => {
        actions.removeFavorites(uid, type);
    };

    return (
        <>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul className="navbar-nav bg-transparent">
                    <li className="nav-item dropdown">
                    <button className="btn btn-dark dropdownText dropdown-toggle d-flex justify-content-between align-items-center bg-transparent" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>Favorites</span>
                        <span className="mx-2"></span>
                        <span className="mx-2">{store.favorites ? store.favorites.length : 0}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark --bs-bg-opacity: .2">

                        {store.favorites.map(fav => (
                            <li className="d-flex justify-content-between" key={`${fav.uid}-${fav.type}`}>
                                <span className="dropdown-item">{fav.name}</span>
                                <button className="favorite-btn bg-dark" onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveClick(fav.uid, fav.type);
                                    }}>
                                    <FaRegTrashCan />
                                </button>
                            </li>
                        ))}

                    </ul>
                    </li>
                </ul>
            </div>
        </>
    )

}