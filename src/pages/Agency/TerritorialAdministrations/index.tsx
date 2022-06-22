import React from 'react'
import "./style.scss";
import administrationsData from "./administrationsData.json";
import AdministrationCard from './AdministrationCard';
import { Divider } from 'antd';

function TerritorialAdministrations() {
  return (
    <div className="administraions page_card">
      <h4 className="page_title">
        Hududiy boshqarmalar
      </h4>
      <div className="administrations_body">
        {
          Object.entries(administrationsData).map(([id, administration]) => (
            <>
              <AdministrationCard id={id} {...administration} />
              <Divider />
            </>
          ))
        }
      </div>
    </div>
  )
}

export default TerritorialAdministrations