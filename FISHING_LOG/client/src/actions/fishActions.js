import axios from 'axios';
import { GET_FISHES, ADD_FISH, DELETE_FISH, FISHES_LOADING} from "./types"

export const getFishes = () => dispatch => {
    dispatch(setFishesLoading());
    axios
        .get('/api/fishes')
        .then(res => 
            dispatch({
                type: GET_FISHES,
                payload: res.data
            })
        )
};
export const addFish = (fish) => dispatch => {
    axios
    .post('/api/fishes', fish)
    .then(res => 
        dispatch({
            type: ADD_FISH,
            payload: res.data
        })
    )
};

export const deleteFish = (id) => dispatch => {
    axios
    .delete('/api/items/${id}')
    .then(res =>
        dispatch({
            type: DELETE_FISH,
            payload: id
        })
    )  
};



export const setFishesLoading = () => {
    return {
        type: FISHES_LOADING
    };
};
