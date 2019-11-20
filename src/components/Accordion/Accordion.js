import React from "react";
import "./Accordion.css";
import 'bootstrap/dist/css/bootstrap.css';

const Accordion = (props) => {
    let classList = ""
    let containerList = ""
    let types = [ "default", "primary" ]
    let labels = [ "default", "primary" ]

    if (types.includes(props.type)) {
        classList += ` burger-${props.type}`
    }
    if (labels.includes(props.label)) {
        containerList += ` hamburger-${props.label}`
    }
    return ( 
        <div className={ containerList }>
            <div className={ classList }></div>
            <div className={ classList }></div>
            <div className={ classList }></div>
        </div>
    )
}

export default Accordion;