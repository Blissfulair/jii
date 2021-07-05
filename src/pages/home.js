import React, {Component} from "react"
import Contact from "../component/contact"
import Footer from "../component/footer"
class Home extends Component{
    render(){
        return(
            <>
            <Contact />
            <Footer />
            <h1>this is the home page</h1>
            </>
           
        )
    }
}
export default Home