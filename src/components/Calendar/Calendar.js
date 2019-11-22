import React, { Component } from "react";
import "./Calendar.css";
import Navbar from "../Navbar/Navbar";

class Calendar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="calendarContainer">
                <Navbar />
                <div className="aside"/>
                <div className="weeksContainer"/>
            </div>
        )
    }
}

export default Calendar;