import React from 'react';
import map from './../images/map.jpg';
import {Nav} from "./Nav";
import Register from "./Register";

function Index() {

    return (
        <div >
            <Nav />
            <h1  align="center" >Lecture halls </h1>
            <img src={map}  align="right"  id='map' useMap="#image-map" alt="map" />

            <map id="Map-area" name="image-map" >
                <area  id="id1" target=""  alt="NLH1-Ground floor"  title="NLH1-Ground floor" href="" coords="75,261,83,248,107,265,98,275" shape="poly"/>
                <area id="2"  target="" alt="NLH2-Ground floor" title="NLH2-Ground floor" href="" coords="88,253,99,236,118,251,107,263" shape="poly"/>
                <area id="3" target="" alt="DO1-Second floor" title="DO1-Second floor" href="" coords="126,272,140,252,163,266,148,288" shape="poly"/>
                <area id="4" target="" alt="DO2-Second floor" title="DO2-Second floor" href="" coords="200,194,216,172,243,190,225,214" shape="poly"/>
                <area id="5" target="" alt="LR1-first floor" title="LR1-first floor" href="" coords="148,292,165,266,189,283,170,306" shape="poly"/>
                <area id="6" target="" alt="LR2-first floor" title="LR2-first floor" href="" coords="236,222,253,231,269,212,254,200" shape="poly"/>
                <area id="7" target="" alt="LT1-first floor" title="LT1-first floor" href="" coords="109,294,126,272,185,319,169,337" shape="poly"/>
                <area id="8" target="" alt="LT2-first floor" title="LT2-first floor" href="" coords="219,170,236,152,292,193,275,217" shape="poly"/>
                <area id="9" target="" alt="IS-Seminar room" title="IS-Seminar room" href="" coords="393,36,412,15,456,43,436,65" shape="poly"/>
                <area id="10" target="" alt="ELR-Third floor" title="ELR-Third floor" href="" coords="447,463,471,480,503,432,478,419" shape="poly"/>
                <area id="11" target="" alt="ELT-second floor" title="ELT-second floor" href="" coords="501,471,512,451,534,463,520,483" shape="poly"/>
                <area id="12" target="" alt="MLR-Third floor" title="MLR-Third floor" href="" coords="265,371,287,370,291,404,267,406" shape="poly"/>
                <area id="13" target="" alt="CLR-Third floor" title="CLR-Third floor" href="" coords="184,464,210,478,227,442,199,431" shape="poly"/>

            </map>
            <h4  >View the lecture halls on the map</h4>
            <ol >

                <p>NLH1-Ground floor <button >view</button></p>
                <p>NLH2-Ground floor <button >view</button> </p>
                <p>DO1-Second floor  <button>view</button> </p>
                <p>DO2-Second floor  <button>view</button> </p>
                <p>LR1-first floor   <button>view</button> </p>
                <p>LR2-first floor   <button>view</button> </p>
                <p>LT1-first floor   <button>view</button> </p>
                <p>LT2-first floor   <button>view</button> </p>
                <p>IS-Seminar room   <button>view</button> </p>
                <p>ELR-Third floor   <button>view</button> </p>
                <p>ELT-second floor  <button>view</button> </p>
                <p>MLR-Third         <button>view</button> </p>
                <p>CLR-Third floor   <button>view</button> </p>


            </ol>
        </div>
    );
}

export default Index;




