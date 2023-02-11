import {GET_USER} from "./getUserActions"


export const getUserReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USER:
            return action.payload
            break;
        default:
            return state
            break;
    }
}
