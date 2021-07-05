import React, {Component} from "react"
import "../css/contact.css"
import hon from "../images/hon.png"
class Contact extends Component{

    render(){
        return(
            <>

            <div className="greenbox">
                
                <h1 className="gcontact"> Contact us</h1>
                <div className="fillform">
                    <p className="fill">Fill up this form</p>
                    <form>
                    <input type="text" className="Name" placeholder="Name"/>
                    <input type="text" className="Email" placeholder="Email"/>
                    <textarea  rows="2" cols="40" draggable="false" className="Message"
                     placeholder="Message......."></textarea>
                    <button className="send">Send</button>
                    </form>
                </div>
            </div>
        
            
            </>
        )
    }
}


export default Contact