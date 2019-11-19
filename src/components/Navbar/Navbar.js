import React, { Component } from "react";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    linkHandler(e) {
        e.preventDefault();
    }

    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <button class="navbar-toggler navbar-expand-sm btn btn-outline-primary my-2 my-sm-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon .navbar-expand"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" onClick={ e => this.linkHandler(e) }>Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={ e => this.linkHandler(e) }>Link</a>
                        </li>
                    </ul>
                </div>

                <div className="monthContainer">
                    <button className="arrow previous">&#8249;</button>
                    <span className="month">January</span>
                    <button className="arrow next">&#8250;</button>
                </div>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={ e => this.linkHandler(e) }>Search</button>
                </form>
            </nav>
        )
    }
};

export default Navbar;