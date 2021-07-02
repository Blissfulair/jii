import React, {Component} from "react"
import Header from "../component/header"
import Top from "../component/top"
class Home extends Component{
    render(){
        return(
            <>
            <Top />
            <Header />
            <h1>this is the home page</h1>
            </>
        )
    }
}
export default Home