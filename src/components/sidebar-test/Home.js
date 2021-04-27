// import React from "react";
// export default class Home extends React.Component{
//     render() {
//         return(
//             <div>
//                 Hello
//             </div>
//         )
//     }
// }
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeEdited from "./HomeEdited";
const GridWrapper = styled.div`
  //display: grid;
  //grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  //grid-template-columns: repeat(12, 1fr);
  //grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
    <GridWrapper>
        {/*<p>This is a paragraph and I am writing on the home page</p>*/}
        {/*<p>This is another paragraph, hi hey hello whatsup yo</p>*/}
        <Router>
            <Switch>
                <Route exact path="/homenew" component={HomeEdited}/>
                {/*<Route path="/homenew/home" component={}/>*/}
            </Switch>
        </Router>

    </GridWrapper>
)