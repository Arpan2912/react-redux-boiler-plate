import {SAMPLE_ACTION} from "../constants/actionType";

const initialState = {
    sampleItems: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SAMPLE_ACTION:
            console.log('post reducer')
            return {
                ...state,
                sampleItems: action.payload
            }

        default:
            return state;
    }
}