import {React,Component} from "react";
class TeacherNavigation extends Component{
    render(){
        return(
            <div className="navigate">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Time Table</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Notifications</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default TeacherNavigation;
