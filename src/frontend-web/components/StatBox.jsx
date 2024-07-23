import React from 'react'
import "./StatBox.css"

export default function StatBox(props){

    const statboxStyle = {
        backgroundColor: props.backgroundColor,
    }


    return (
        <div className="stat-box" style={statboxStyle}>
            <div className="icon-container">
                <img src={props.icon} alt="Icon"/>
            </div>
            <div className="content-container">
                <p className="total-players">{props.statNumber}</p>
                <p>{props.statTitle}</p>
                <p className="percentage-change">{props.statSubtitle}</p>
            </div>
        </div>
    )
}