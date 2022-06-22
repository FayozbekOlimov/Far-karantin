import React from 'react'
import statisticsConsideredData from "../../statisticsConsideredData.json";

function Resolutions() {
  return (
    <div className="statistics_considered page_card">
      <h4 className="page_title">
        O‘zbekiston Respublikasi Prezidenti qarorlari va farmonlari
      </h4>
      <div className="statistics_body">
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
          ))
        }
      </div>
    </div>
  )
}

export default Resolutions