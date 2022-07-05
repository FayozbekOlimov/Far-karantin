import React from 'react'
import "./style.scss";
import administrationsData from "./administrationsData.json";
import AdministrationCard from './AdministrationCard';
import { Divider } from 'antd';

function TerritorialAdministrations() {
  return (
    <div className="administrations page_card">
      <h4 className="page_title">
        Hududiy boshqarmalar
      </h4>
      <div className="administrations_body">
        {Object.entries(administrationsData).map(([id, administration]) => (
          <React.Fragment key={id}>
            <AdministrationCard id={id} {...administration} />
            <Divider className='divider' />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default TerritorialAdministrations