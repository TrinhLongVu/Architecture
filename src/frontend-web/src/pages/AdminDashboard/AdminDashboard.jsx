import React from 'react'
import "./AdminDashboard.css"
import barcharticon from "../../assets/bar-chart-icon.png"
import note_icon from "../../assets/note-icon.png"
import tag_icon from "../../assets/tag-icon.png"
import StatBox from '../../../components/StatBox'

function AdminDashboard() {
  return (
    <div>
      <div className="stats-banner">
        <h2>Stats</h2>
        <div className="stats-container">
          <StatBox 
            icon={barcharticon}
            statNumber={100}
            statTitle="Total Players"
            statSubtitle="+8% from yesterday"
            backgroundColor="#FCE9EC"
          />

          <StatBox 
            icon={note_icon}
            statNumber={20}
            statTitle="Total Brands"
            statSubtitle="+5% from yesterday"
            backgroundColor="#FEF3E6"
          />

          <StatBox 
            icon={tag_icon}
            statNumber={10}
            statTitle="Games Created"
            statSubtitle="+8% from yesterday"
            backgroundColor="#E9FAEF"
          />
        </div>
      </div>
    </div>
      
    
    
  )
}

export default AdminDashboard