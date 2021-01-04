
import {REDUX_GOOD_MORNING, REDUX_GOOD_AFTERNOON, REDUX_GOOD_EVENING} from "./wishMessage.actionTypes";



let reduxWishGoodMorning=()=>{
    return{
        type:REDUX_GOOD_MORNING,
        payload:"",
     
    }
};


let reduxWishGoodAfternoon=()=>{
    return{
        type:REDUX_GOOD_AFTERNOON,
        payload:""
    }
};

let reduxWishGoodEvening=()=>{
    return{
        type:REDUX_GOOD_EVENING,
        payload:""
    }
};

export {reduxWishGoodMorning, reduxWishGoodAfternoon, reduxWishGoodEvening}