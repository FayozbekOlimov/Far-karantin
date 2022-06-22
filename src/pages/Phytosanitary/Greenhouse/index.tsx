import { Tooltip } from 'antd'
import React from 'react'
import internationalProtocolData from "../../internationalProtocolData.json"

function Greenhouse() {
  const tooltipText = <span>Ko'chirib olish</span>


  return (
    <div className="greenhouse page_card">
      <h4 className="page_title">
        O'simliklar karantini va himoyasi agentligining Markaziy fitosanitariya laboratoriyasi tomonidan Qoraqalpog'iston Respublikasi, viloyatlar va Toshkent shahri hududlaridagi yetishtirilgan pomidor va qalampir maxsulotlarini PZR usuli orqali tekshirilgan fitosanitar toza issiqxonalar ro'yxati
      </h4>
      <div className="greenhouse_body">
        {
          Object.entries(internationalProtocolData).map(([id, { type, text, size, link }]) => (
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

export default Greenhouse