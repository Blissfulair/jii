import React, {Component} from "react"

import Givitec from "../img/givitec.png"
import Craft from "../img/craftmen.png"
import Mobile from "../img/mobile.png"

import "../css/project.css"
class Project extends Component{
    
    render(){
        return(
            <>
                <div className = "project">
                    <div className = "projectcontent">
                        <div className ="fcontent">
                            <h1>Projects</h1>
                            <p>HON. JUDE ISE-IDEHEN, a representative of Egor/Ikpoba-Okha Federal Constituency 
                                in the House of Representatives  organised several projects collobrating with 
                                different organisations.</p>
                        </div>
                        <div className ="scontent">
                            <div className = "p1">
                                <img src ={Givitec} alt = "Givitec" />
                                <p>Three months certification course on ICT & Enterpreneurship training collaborating with Givitech Ltd.</p>
                            </div>
                            <div className = "p2">
                                <img src ={Craft} alt = "Givitec" />
                                <p> A workshop seminar for craftsmen-mechanics 
                                    and automechanics in  Egor/Ikpoba-Okha Federal 
                                    Constituency.</p>
                            </div>
                            <div className = "p3">
                                <img src ={Mobile} alt = "Givitec" />
                                <p>Expository workshop/training on basic mobile phone repairs </p>
                            </div>
                            
                            
                        </div>
                    </div>
                        

                </div>
            </>
        )
    }
}

export default Project