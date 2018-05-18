import React from "react";
import "./YourOnHook.css";
import { Col, Row, Container } from "../../components/Grid";



const YourOnHook = (props) => (

<div>
    <div className="container">

        <div className="card scrolling">
            <div className="card-body" id="c1title"> 
                {/* here's where the challenger's name goes */}
                { <p className="card-title">You're on the Hoook</p>}

                {/* here's where the name goes */}
                  {}

                {/* here's where the avatar goes
                <button type="button" className="btn btn-info">A</button>  {}

                {/* here's where the media type icon goes */}
                {/* <button type="button" className="btn btn-info">I</button> {} */}

                {/* here's where the check to check it "done" goes */}
                {/* <button type="button" className="btn btn-info">C</button> {} */}

                {/* here's where the "X" goes to decline a challenge */}
                {/* <button type="button" className="btn btn-info">X</button> */} 
               
            </div>
            {/* <hr /> */}
    
            {props.children}
 

        </div>




    </div>
</div>
);

export default YourOnHook;
