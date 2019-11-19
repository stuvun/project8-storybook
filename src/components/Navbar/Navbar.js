import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
    let classList = ""
    let types = [ 'default' ]

    if (types.includes(props.type)) {
        classList += ` navbar-${ props.type }`
    }
    return (
        <div className="arrowContainer">
            <button className={ classList }>&#8249;</button>
            <button className={ classList }>&#8250;</button>
        </div>
    )
}

export default Navbar;