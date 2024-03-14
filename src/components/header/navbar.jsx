import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Navbar extends Component{
    componentDidMount() {
        let DropDownEffect = document.querySelectorAll(".dropdown-trigger");
        M.Dropdown.init(DropDownEffect);
    }
    render(){
        return(
            <nav>
                <div className="nav-content">
                <a className='dropdown-trigger btn-large'  href='#' data-target='dropdown1'> <i className="material-icons left">cloud</i> Menu</a>
                <ul id='dropdown1' className='dropdown-content'>
                    <li><a href="#!">one</a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><a href="#!">two</a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><a href="#!">three</a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;