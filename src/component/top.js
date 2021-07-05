import React, {Component} from "react"
import ise from "../img/ise.png"
import m1 from "../img/m1.png"
import m2 from "../img/m2.png"

import "../css/top.css"

class Top extends Component{
    render(){
        return(
            <>
                <div className="top">
                    <img src = {ise} alt="ise" className="img1" />
                    <img src = {m1} alt ="img2" className="img2" />
                    <img src = {m2} alt="img3" className="img3"/>
                    <img src = {ise} alt="img4" className="img4" />
                </div>
            </>
        )
    }
}


export default Top