import React from 'react'
import "./style.scss";
import LeaderCard from "./LeaderCard";
import leadershipData from "./leadershipData.json";
import { Divider } from 'antd';


function CenteralApp() {
  return (
    <div className="leadership_card">
      <h4 className="page_title">
        Markaziy apparat
      </h4>
      <div className="leadership_body">
        {
          Object.entries(leadershipData).map(([id, leadership]) => (
            <>
              <LeaderCard id={id} {...leadership} />
              <Divider />
            </>
          )
          )
        }
      </div>
    </div>
  )
}

export default CenteralApp