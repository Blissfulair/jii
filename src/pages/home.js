import React, {Component} from "react"
import Top from "../component/top"
import Header from "../component/header"
import Main from "../component/main"
import About from "../component/about"
import Project from "../component/project"
class Home extends Component{
    render(){
        return(
            <>
            <Top />
            <Header />
            <Main />
            <About />
            <Project />
            <h1>this is the home page</h1>
            </>
        )
    }
}
export default Home