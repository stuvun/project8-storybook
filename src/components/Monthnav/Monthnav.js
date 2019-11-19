import React from "react";
import "./Monthnav.css";

const Monthnav = (props) => {
    let classList = ""
    let types = [ 'default' ]

    if (types.includes(props.type)) {
        classList += ` button-${ props.type }`
    }
    return (
        <div className="monthContainer">
            <button className="arrow previous">&#8249;</button>
            <span className="month">January</span>
            <button className="arrow next">&#8250;</button>
        </div>
    )
}

export default Monthnav;