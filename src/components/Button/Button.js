import React from "react";
import "./Button.css";

const Button = (props) => {
    let classList = ""
    let types = [ 'default' ]

    if (types.includes(props.type)) {
        classList += ` button-${ props.type }`
    }
    return (
        <div className="arrowContainer">
            <button className={ classList }>&#8249;</button>
            <span>January</span>
            <button className={ classList }>&#8250;</button>
        </div>
    )
}

export default Button;