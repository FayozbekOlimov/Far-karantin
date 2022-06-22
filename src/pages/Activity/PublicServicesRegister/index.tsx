import React from 'react'
import { Tooltip } from 'antd';
import PublicServiceRegisterData from "./PublicServiceRegisterData.json";



function PublicServiceRegister() {
  const tooltipText = <span>Ko'chirib olish</span>

  return (
    <div className="information_staff page_card">
      <h4 className="page_title">
        Davlat xizmatlari reestri
      </h4>
      <div className="staff_body">{
        Object.entries(PublicServiceRegisterData).map(([id, { type, text, size, link }]) => (
          <Tooltip placement="top" title={tooltipText} key={id}>
            <a className="stuff_link" href={link} target="_blank" rel="noopener noreferrer">
              <i className={`fa-regular fa-file-${type === "doc" ? "word" : type === "xlsx" ? "excel" : "pdf"}`}></i>
              {`${text} (${size})`}
            </a>
          </Tooltip>
        ))
      }
      </div>
    </div>
  )
}

export default PublicServiceRegister