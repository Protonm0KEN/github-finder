import {combineReducers} from "redux";
import {getUserReducer} from "./reducers/getUserReducer";
import {getUserReposReducer} from "./reducers/getRepositoriesOfUserReducer";

export const rootReducer = combineReducers({
    user: getUserReducer,
    repositoriesOfUser: getUserReposReducer,
})
