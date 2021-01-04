import React,{useState} from 'react'

function FuncWishMessage() {

    // FIRST METHOD
    // let[funcMessage , setFuncMessage]=useState("Hi....Wish Message from Function Components");
    
    // SECOND METHOD
    let wishObject="Hi....Wish Message from Function Components";
    let[funcMessage , setFuncMessage]=useState(wishObject);

    let  funcGoodMornig=()=>{
        setFuncMessage("Func Good Morning")
    }

    let  funcGoodEvening=(value)=>{
        setFuncMessage(value)
    }

    return (
        <React.Fragment>
            <React.Fragment>
               <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="h1">{funcMessage}</div>
                            <button className="btn btn-success" onClick={funcGoodMornig}>Func Good Morning</button>
                            <button className="btn btn-danger" onClick={()=>setFuncMessage("Func Good Afternoon")}>Func Good Afternoon</button>
                            <button className="btn btn-dark" onClick={funcGoodEvening.bind(this,"Func Good Evening")}>Func Good Evening</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    )
}

export default FuncWishMessage
