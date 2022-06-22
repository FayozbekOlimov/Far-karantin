import React from 'react'
import { Divider } from "antd";
import receptionsData from "./receptionsData.json"

function MobileReceptions() {
  return (
    <div className="mobile_receptions page_card">
      <h4 className="page_title">
        Sayyor qabullar
      </h4>
      <div className="receptions_body">
        {
          Object.entries(receptionsData).map(([id, { url }]) => (
            <React.Fragment key={id}>
              <figure >
                <img className='reception_img' src={url} alt="" />
              </figure>
              <Divider />
            </React.Fragment>

          ))
        }
      </div>
    </div>
  )
}

export default MobileReceptions