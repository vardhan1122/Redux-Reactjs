import {combineReducers} from "redux";
import {productItemKey, productReducer} from "./productItem/product-item.reducer";
import { reduxWishMessageKey, reduxWishMessageSaying} from "./WishMessageRedux/wishMessage.reducer";
// import { redMessage, reduxWishMessageSaying} from "./WishMessageRedux/wishMessage.reducer";

let rootReducer = combineReducers({
    [productItemKey] : productReducer,
    [reduxWishMessageKey]:reduxWishMessageSaying
    // [redMessage]:reduxWishMessageSaying
 
 
});
export {rootReducer};
