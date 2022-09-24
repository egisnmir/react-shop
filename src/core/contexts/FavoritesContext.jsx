import { useState, createContext } from 'react';

const FavoritesContext = createContext();

function addOrRemove(array, value) {
    var index = array.indexOf(value);

    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }
}

export const FavoritesProvider = ({children}) => {
    //TODO: Remove default favorites
    const defaultFavorites = [2, 3];

    const [favorites, setFavorites] = useState(defaultFavorites);

    const toggleFavorite = (id) => {
        const newFavorites = favorites.slice();
        id = parseInt(id);

        addOrRemove(newFavorites, id);
        newFavorites.sort();

        setFavorites(newFavorites);
    }

    return (
        <FavoritesContext.Provider value={{
            favorites,
            toggleFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;