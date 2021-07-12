import React, {Component} from "react"

import Contact from "../component/contact"
import Footer from "../component/footer"

import Top from "../component/top"
import Header from "../component/header"
import Main from "../component/main"
import About from "../component/about"
import Project from "../component/project"
import Scroll from "../component/scroll"
class Home extends Component{
    render(){
        return(
            <>
            <Scroll />
            <Top />
            <Header />
            <Main />
            <About />
            <Project />
            <Contact />
            <Footer />
            </>
           
        )
    }
}
export default Home