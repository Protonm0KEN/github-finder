import {GET_USER_REPOS} from "./getRepositoriesOfUserActions";


export const getUserReposReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USER_REPOS:
            return action.payload
            break;
        default:
            return state
            break;
    }
}
