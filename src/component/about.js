import React, {Component} from "react"

import Abt from "../img/about.png"
import "../css/about.css"
class About extends Component{
    
    render(){
        return(
            <>
                <div className = "about">
                    <div className = "abtimg">
                        <img src = {Abt} alt ="About Us" />
                    </div>
                    <div className = "aboutcontent">
                        <h1>About JII</h1>
                        <p>Rt. Hon. Jude Ise-Idehen is a member of the House of Representatives, 
                            Nigeria. He has a duty to represent his constituent and also serve the
                            nation as a member of the House.</p>
                        <p>He has consulted widely across all 20 wards of Egor and Ikpoba-Okha Local Government
                            Areas and He has also analyzed the challenges facing our nation and constituencies. 
                            He came up with a robust blueprint based on the PDP manifesto to serve as a springboard
                            for our constituency, placing her on a sunlit path of holistic development
                            and material prosperity and our Nigeria into aland where truth, justice and liberty reigns. </p>
                    </div>

                </div>
            </>
        )
    }
}

export default About