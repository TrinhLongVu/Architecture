import React from 'react'
import "./StatBox.css"

export default function StatBox(props){

    const statboxStyle = {
        backgroundColor: props.backgroundColor,
    }


    return (
        <div class="stat-box" style={statboxStyle}>
            <div class="icon-container">
                <img src={props.icon} alt="Icon"/>
            </div>
            <div class="content-container">
                <p class="total-players">{props.statNumber}</p>
                <p>{props.statTitle}</p>
                <p class="percentage-change">{props.statSubtitle}</p>
            </div>
        </div>
    )
}