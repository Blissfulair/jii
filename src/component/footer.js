import React, {Component} from "react"
import "../css/footer.css"
import logo from "../images/logo.png"
class Footer extends Component{
    render(){
        return(
            <>
            <footer>
                <div className="footer">
                <img src ={logo} className="logo" alt ="logo"/>
                <h3 className="jude">Hon. Jude Ise-Idehen’s Forum</h3>
                <h4 className="quick">Quick Links</h4>
                              <ul>
                                    <li>
                                        <a href="/"className="home" >Home</a>
                                    </li>
                                    <li >
                                        <a href="/" className="aboutus">About</a>
                                    </li>
                                    <li>
                                        <a href="/"className="proj" >Projects</a>
                                    </li>
                                    <li>
                                        <a href="/"className="contact" >Contact us</a>
                                    </li>
                                </ul>
                            <h4 className="newsletter">Subscribe to our newsletter</h4>
                           < div className="formnewsletter">
                            <form >
                            <input type="text" className="Emailaddress" placeholder="Email Address"/>
                            <button className="subscribe">Subscribe</button>
                            </form>
                            </div>
                </div>
            <div className="greenfooter">
                <span>Copyright &copy; 2021 </span>
            </div>
            </footer>
            </>
        )
    }
}


export default Footer