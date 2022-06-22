import React from 'react'
import { Tooltip } from 'antd'
import { useLocation } from 'react-router-dom';
import internationalProtocolData from "../../internationalProtocolData.json"

const titles: any = {
  phytosanitary_requirements: "O'simliklar karantini va himoyasi agentligi mutaxassislari tomonidan chet davlatlardan respublikamiz hududiga import qilinishi rejalashtirilgan ekish materiallarini fitosanitar holatini joyida o‘rganish maqsadida qilingan xizmat safarlari to‘g‘risidagi ma’lumot (2017-2020 yy.)",
  list_quarantine: "Karantin organizmlari ro'yxati",
  seeds_turkey: "Turkiya davlatidan pomidor va qalampir urug‘larini olib kelinishi ruxsat etilgan korxonalar ro‘yxati"
}

function PhytosanitaryRequirements() {
  const tooltipText = <span>Ko'chirib olish</span>

  let { pathname } = useLocation();
  pathname = pathname.slice(9);

  return (
    <div className='phytosanitary_requirements page_card'>
      <h4 className="page_title">
        {titles[pathname]}
      </h4>
      <div className="phytosanitary_requirements_body">
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

export default PhytosanitaryRequirements