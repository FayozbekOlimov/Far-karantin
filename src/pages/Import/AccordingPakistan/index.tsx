import React from 'react'
import statisticsConsideredData from "../../statisticsConsideredData.json";

function AccordingPakistan() {
  return (
    <div className='according_pakistan page_card'>
      <h4 className="page_title">
        Pokistondan O'zbekistonga kartoshka mahsulotini eksport qilish uchun ruxsat etilgan ko`chatxonalar (pitomniklar) ro`yxati (Pokistonning ma'lumotiga ko`ra)
      </h4>
      <div className="according_pakistan_body">
        {
          Object.entries(statisticsConsideredData).map(([id, { title, link }]) => (
            <a
              className='statistic_link'
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          )
          )
        }
      </div>
    </div>
  )
}

export default AccordingPakistan