import {                  // IMPORT TYPE VARIABLES
    ADD_NEW_COURSE,
    ADD_ALL_COURSES
} from './../types/types';


const initialState = [];

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_COURSE:
            return [...state, action.payload];

        case ADD_ALL_COURSES:
            return action.payload;

        default:
            return state;
    }
};

export default courseReducer;