import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [2, 4, 5, 7],
    reducers: {
        toggleFavorite: (state, action) => {
            const id = parseInt(action.payload);
    
            addOrRemove(state, id);
            state.sort();
        }
    }
});

function addOrRemove(array, value) {
    let index = array.indexOf(value);

    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }
}

const { actions, reducer } = favoritesSlice;

export const { toggleFavorite } = actions;

export default reducer;
