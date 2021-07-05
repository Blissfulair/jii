import React, {Component} from "react"
import Top from "../component/top"
import Header from "../component/header"
import Main from "../component/main"
import About from "../component/about"
import Project from "../component/project"
// import Contact from "../component/contact"
class Home extends Component{
    render(){
        return(
            <>
            <Top />
            <Header />
            <Main />
            <About />
            <Project />
            
            
            </>
        )
    }
}
export default Home