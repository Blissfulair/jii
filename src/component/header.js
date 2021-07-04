import React, {Component} from "react"
import logo from "../img/coa.png"
import "../css/header.css"

let openMenu = false
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    toggleMenu = () =>{
        let mobileMenu = document.getElementsByClassName("mobile-menu")[0]
        if(openMenu){
            mobileMenu.style.transform = "translateX(-100%)"
        }else{
            mobileMenu.style.transform = "translateX(0)"
        }        
            openMenu = !openMenu
    }
    render (){
        return(
            <>
                <header className ="header">
                    <div className="logo">
                        <img src={logo } alt="LOGO" />
                        <span>
                            <p>Hon Jude</p>
                            <p> Ise - Idehen's</p>
                            <p>Forum</p>
                        </span>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Project</a>
                            </li>
                            <li>
                                <a href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hamburger" onClick={this.toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="mobile-menu">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Project</a>
                            </li>
                            <li>
                                <a href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </header>
            </>
        )
    }
}


export default Header