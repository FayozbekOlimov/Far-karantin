import React from 'react'
import "../Leadership/style.scss";
import LeaderCard from "./LeaderCard";
import leadershipData from "./leadershipData.json";
import { Divider } from 'antd';


function Advisers() {
  return (
    <div className="leadership_card">
      <h4 className="page_title">
        Maslahatchilar
      </h4>
      <div className="leadership_body">
        {Object.entries(leadershipData).map(([id, leadership]) => (
          <React.Fragment key={id}>
            <LeaderCard id={id} {...leadership} />
            <Divider />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Advisers