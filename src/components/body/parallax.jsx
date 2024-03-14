import React, {Component} from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import parallax1 from "./parallax1.jpg"
import parallax2 from "./parallax2.jpg"


class Parallax extends Component{
    componentDidMount() {
        let elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements);
    }
    render(){
        let images = {"first": parallax1, "second": parallax2}
        return (
            <><div className="parallax-container">
            <div className="parallax">
                <img src={images[this.props.image_name]} alt={this.props.image_name}></img>
            </div>
        </div></>
        )
    }
};
export default Parallax;