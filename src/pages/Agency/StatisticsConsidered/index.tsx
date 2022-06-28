import React from 'react'
import statisticsConsideredData from "../../statisticsConsideredData.json";


// function StatisticsConsidered(props: { title: string }) {
function StatisticsConsidered() {
  return (
    <div className="statistics_considered page_card">
      <h4 className="page_title">
        Title
        {/* {props.title} */}
      </h4>
      <div className="statistics_body">
        {
          Object.entries(statisticsConsideredData).map(([id, { title, link }]) => (
            <a
              key={id}
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