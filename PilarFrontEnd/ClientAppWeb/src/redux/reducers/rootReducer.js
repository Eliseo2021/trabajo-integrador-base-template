import { combineReducers } from "redux";
// import { productsReducer } from "./products/productsReducer";
// import { cartReducer } from "./cart/cartReducer";
import { titleReducer } from "./title/titleReducer";
import { stadiumsReducer } from "./stadiums/stadiumsReducer";
import { usersReducer } from "./users/usersReducer";


const initialState = {}

const rootReducer = (state = initialState, action) => {
    return state;
}

export default combineReducers({
    root: rootReducer,
    // productsReducer: productsReducer,
    // cartReducer: cartReducer,
    titleReducer: titleReducer,
    stadiumsReducer: stadiumsReducer,
    usersReducer: usersReducer
})