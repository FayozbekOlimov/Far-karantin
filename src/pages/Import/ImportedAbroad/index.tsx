import { Tooltip } from 'antd'
import React from 'react'
import internationalProtocolData from "../../internationalProtocolData.json"

function ImporttedAbroad() {
  const tooltipText = <span>Ko'chirib olish</span>

  return (
    <div className='imported_abroad page_card'>
      <h4 className="page_title">
        O'simliklar karantini va himoyasi agentligi mutaxassislari tomonidan chet davlatlardan respublikamiz hududiga import qilinishi rejalashtirilgan ekish materiallarini fitosanitar holatini joyida o‘rganish maqsadida qilingan xizmat safarlari to‘g‘risidagi ma’lumot (2017-2020 yy.)
      </h4>
      <div className="imported_abroad_body">
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

export default ImporttedAbroad