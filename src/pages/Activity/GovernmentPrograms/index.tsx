import React from 'react'

const governmentProgramsData = {
  "1": {
    title: "O‘simliklar karantini va himoyasi agentligining 2022–2026-yillarga mo‘ljallangan Yangi O‘zbekistonning taraqqiyot strategiyasini “Inson qadrini ulug‘lash va faol mahalla yili”da amalga oshirishga oid Davlat dasturida belgilangan chora-tadbirlar ijrosi yuzasidan amalga oshirilgan ishlar bo‘yicha ma’lumot",
    link: "/assets/docs/statistics_considered.doc"
  }
}

function GovernmentPrograms() {
  return (
    <div className="statistics_considered page_card">
      <h4 className="page_title">
        Davlat dasturlari
      </h4>
      <div className="statistics_body">
        {
          Object.entries(governmentProgramsData).map(([id, { title, link }]) => (
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

export default GovernmentPrograms