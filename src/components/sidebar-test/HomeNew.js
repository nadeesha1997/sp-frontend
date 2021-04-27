import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {NavigationBar} from "./NavigationBar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {Home} from "./Home";

function HomeNew() {
    return(
        <React.Fragment>
            {/*<Router>*/}
                <NavigationBar/>
                <Sidebar/>
                {/*<Switch>*/}
                {/*    <Route exact path="/homenew" component={Home}/>*/}
                {/*    <Route path="/homenew/"*/}
                {/*</Switch>*/}
                <Home/>
            {/*</Router>*/}
            {/*<Footer/>*/}
        </React.Fragment>
    )
}
export default HomeNew