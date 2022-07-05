import React from 'react'
import "../Leadership/style.scss";
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
      {Object.entries(leadershipData).map(([id, leadership]) => (
          <React.Fragment key={id}>
            <LeaderCard id={id} {...leadership} />
            <Divider className='divider' />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default CenteralApp