import React, {Component} from "react"

class Scroll extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount = () =>{
        window.addEventListener('scroll', this.onScrollUp, true)
    }
    componentWillUnmount = () =>{
        window.removeEventListener('scroll', this.onScrollUp)
    }

    onScrollUp = () =>{
        if (window.scrollY < 16){
            document.getElementsByClassName("top")[0].style.top = "0px"
            document.getElementsByTagName("header")[0].style.top = "85px"
            document.getElementsByTagName("header")[0].style.backgroundColor = "rgba(0, 0, 0, 0.5)"
            console.log("Why now")
        }else{
            console.log("thank you")
            document.getElementsByClassName("top")[0].style.top = "-80px"
            document.getElementsByTagName("header")[0].style.top = "0px"
            document.getElementsByTagName("header")[0].style.position = "sticky"
            document.getElementsByTagName("header")[0].style.backgroundColor = "rgb(154 178 156)"
        }
    }
    render(){
        return(
            <>

            </>
        )
    }

}
      
export default Scroll