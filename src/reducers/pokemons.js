import { SET_POKEMONS } from "../actions/types";

const intialState = {
    pokemons: [],
};

export const pokemonsReducer = (state = intialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            return {...state, pokemons: action.payload};
        default:
            return state;
    }
}