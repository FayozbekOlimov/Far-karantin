import React from 'react'
import statisticsConsideredData from "../../statisticsConsideredData.json";


function StatisticsConsidered(props: { title: string }) {
  return (
    <div className="statistics_considered page_card">
      <h4 className="page_title">
        {props.title}
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

export default StatisticsConsidered