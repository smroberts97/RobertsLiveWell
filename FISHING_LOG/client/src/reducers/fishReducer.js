import uuid from 'uuid/v1';
import { GET_FISHES, ADD_FISH, DELETE_FISH } from "../actions/types"


const initialState = {
    fishes: [
        { id: uuid(), name: 'Snook' },
        { id: uuid(), name: 'Redfish' },
        { id: uuid(), name: 'Tarpon' },
        { id: uuid(), name: 'Snapper' }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_FISHES:
            return {
                ...state
            };
        case DELETE_FISH:
            return{
                ...state,
                fishes: state.fishes.filter(fish => fish.id !== action.payload)
            };
            default:
                return state;
        case ADD_FISH:
            return {
                ...state,
                fishes: [action.payload, ...state.fishes]
            };
    
    }
}