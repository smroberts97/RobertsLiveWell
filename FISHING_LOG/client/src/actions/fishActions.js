import { GET_FISHES, ADD_FISH, DELETE_FISH } from "./types"

export const getFishes = () => {
    return { 
        type: GET_FISHES
    };
};

export const deleteFish = (id) => {
    return { 
        type: DELETE_FISH,
        payload: id
    };
};

export const addFish = (fish) => {
    return { 
        type: ADD_FISH,
        payload: fish
    };
};