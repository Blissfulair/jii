import React, {Component} from "react"

import pic from "../img/flag.png"
import icon from "../img/arrow.png"
import ise from "../img/isemain.png"
import "../css/main.css"

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <>
                <div className = "main-container">
                    <div className = "flag">
                        <img src = {pic} alt = "Flag" />
                    </div>
                    <div className ="main">
                        <h1>Do You Want to know <br/> JII ? </h1>
                        <button>Click Here <img src = {icon} alt = "Arrow"/></button>
                    </div>
                    <div className = "ise">
                        <img src = {ise} alt = "ise" className = "iseimg" />
                    </div>
                    
                    
                </div>
            </>

        )
    }
}


export default Main

