import React from "react";
import "./Accordion.css";
import 'bootstrap/dist/css/bootstrap.css';

const Accordion = (props) => {
    let classList = ""
    let types = [ "default", "primary" ]

    if (types.includes(props.type)) {
        classList += ` burger-${props.type}`
    }
    return ( 
        <div className="hamburger">
            <div className={ classList }></div>
            <div className={ classList }></div>
            <div className={ classList }></div>
        </div>
    )
}

export default Accordion;