import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { reduxWishMessageKey} from "../redux/WishMessageRedux/wishMessage.reducer";
import {reduxWishGoodMorning, reduxWishGoodAfternoon, reduxWishGoodEvening} from "../redux/WishMessageRedux/wishMessage.actions";
import { bindActionCreators } from 'redux';


function ReduxWishMessage() {
    let dispatch=useDispatch();

    let reduxWishMessageInfo=useSelector((state) => {
        return state[reduxWishMessageKey]
    })

    let reduxWishGoodMorningInfo=()=>{
        dispatch(reduxWishGoodMorning())
    }

    let  reduxWishGoodEveningInfo = (value)=>{
        dispatch(value)
    }

  

    return (
        <React.Fragment>
          

                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="h1">{reduxWishMessageInfo.redMessage}</div>
                           {/* Regular method */}
                            <button className="btn btn-success" onClick={reduxWishGoodMorningInfo}>Redux Good Morning</button>
                            {/* Direct method */}
                            <button className="btn btn-danger" onClick={()=>dispatch(reduxWishGoodAfternoon())}>Redux Good Afternoon</button>
                            {/* bind method */}
                            <button className="btn btn-dark" onClick={reduxWishGoodEveningInfo.bind(this,reduxWishGoodEvening())}>Redux Good Evening</button>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default ReduxWishMessage;
