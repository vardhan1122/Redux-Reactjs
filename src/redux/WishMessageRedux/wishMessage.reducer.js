import {REDUX_GOOD_MORNING, REDUX_GOOD_AFTERNOON, REDUX_GOOD_EVENING} from "./wishMessage.actionTypes";

export const reduxWishMessageKey = 'redMessage';
// export let redMessage;

 let initialState={
    redMessage:"Hi....Wish Message from Redux"
};

let  reduxWishMessageSaying=(state=initialState, action)=>{
    let {type, payload}=action;
    switch(type){
        case REDUX_GOOD_MORNING:
            return{
                redMessage:"GOOD MORNING REDUX"
            };
        case REDUX_GOOD_AFTERNOON:
            return{
                redMessage:"GOOD AFTERNOON REDUX"
            };
        case REDUX_GOOD_EVENING:
            return{
                redMessage:"GOOD EVENING REDUX"
            };
            default: 
            return state;
    }
};

export {reduxWishMessageSaying}
    



