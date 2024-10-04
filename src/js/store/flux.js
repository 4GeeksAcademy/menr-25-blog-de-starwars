const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            peopleQty: null,
            planetsQty: null,
            speciesQty: null,
            vehiclesQty: null,
            people: [],
            planets: [],
            species: [],
            vehicles: [],
            peopleDetails: {},
            planetsDetails: {},
            speciesDetails: {},
            vehiclesDetails: {},
            favorites: [],
            selectedItem: null,
            loading: true,
        },
        actions: {
            loadData: (type) => {
                const store = getStore();

                if (store[`${type}`].length > 0) {
                    return;
                }

                setStore({ loading: true });
                const url = `https://www.swapi.tech/api/${type}`;
                fetch(url)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`Error ${response.status}: ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setStore({
                            [`${type}`]: data.results,
                            [`${type}Qty`]: data.total_records,
                            loading: false,
                        });
                    })
                    .catch((error) => {
                        console.error(`Error loading ${type}:`, error);
                        setStore({ loading: false });
                    });
            },
            loadDetails: (uid, type) => {
                const store = getStore();

                if (store[`${type}Details`][uid]) {
                    return;
                }

                const url = `https://www.swapi.tech/api/${type}/${uid}`;
                fetch(url)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`Error ${response.status}: ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setStore({
                            [`${type}Details`]: {
                                ...store[`${type}Details`],
                                [uid]: data.result,
                            },
                        });
                    })
                    .catch((error) => {
                        console.error(`Error loading ${type} details:`, error);
                    });
            },
            setSelectedItem: (uid, type) => {
                const store = getStore();
                const details = store[`${type}Details`][uid];
            
                if (details) {
                    setStore({ selectedItem: details });
                } else {
                    getActions().loadDetails(uid, type).then(() => {
                        const newDetails = getStore()[`${type}Details`][uid];
                        setStore({ selectedItem: newDetails }); 
                    });
                }
            },
            addToFavorites: (uid, name, type) => {
                const store = getStore();
                if (!store.favorites.some(fav => fav.uid === uid && fav.type === type)) {
                    setStore({ favorites: [...store.favorites, { uid, name, type }] });
                }
            },
            removeFavorites: (uid, type) => {
                const store = getStore();
                const updateFavorites = store.favorites.filter(fav => fav.uid !== uid || fav.type !== type);
                setStore({ favorites: updateFavorites });
            },
        },
    };
};

export default getState;