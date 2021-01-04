import React, { Component } from 'react'

class ClassWishMessage extends Component {
constructor(props) {
    super(props);

    this.state={
        classMessage:"Hi....Wish Message from Class Components"
    }
  
}

classGoodMorning=()=>{
    this.setState({
        classMessage:"Class Good Morning"
    })
}  

classGoodEvening=(value)=>{
    this.setState({
        classMessage:value
    })
}  
    render() {
        return (
            <React.Fragment>
               <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="h1">{this.state.classMessage}</div>
                            <button className="btn btn-success" onClick={this.classGoodMorning}>Class Good Morning</button>
                            <button className="btn btn-danger" onClick={()=>this.setState({classMessage:"Class Good Afternoon"})}>Class Good Afternoon</button>
                            <button className="btn btn-dark" onClick={this.classGoodEvening.bind(this,"Class Good Evening")}>Class Good Evening</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ClassWishMessage;
