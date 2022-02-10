import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
   dialogsPage: dialogReducer,
   profilePage: profileReducer,
   sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store
