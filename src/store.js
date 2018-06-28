import { createStore, applyMiddleware,compose } from "redux";
import reducer from "./reducer"
import thunk from "redux-thunk";

const initialState = {};

// create custom middle ware for thunk
const customMiddleWare = store => next => action => {
    console.log("Middleware triggered:", action);
    next(action);
}

const middleware = [thunk,customMiddleWare];

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;