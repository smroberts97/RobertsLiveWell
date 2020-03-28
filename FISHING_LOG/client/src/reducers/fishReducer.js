import uuid from 'uuid/v1';
import { GET_FISHES, ADD_FISH, DELETE_FISH, FISHES_LOADING } from "../actions/types"


const initialState = {
    fishes: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_FISHES:
            return {
                ...state,
                fishes: action.payload,
                loading: false
            };
        case DELETE_FISH:
            return{
                ...state,
                fishes: state.fishes.filter(fish => fish._id !== action.payload)
            };
            default:
                return state;
        case ADD_FISH:
            return {
                ...state,
                fishes: [action.payload, ...state.fishes]
            };
        case FISHES_LOADING:
            return {
                ...state,
                loading: true
            }
    }
}