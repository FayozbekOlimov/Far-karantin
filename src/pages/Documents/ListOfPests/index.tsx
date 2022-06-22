import React from 'react'

const listOfPests = {
  "1": {
    title: "O‘simliklar karantini va himoyasi agentligining 2022–2026-yillarga mo‘ljallangan Yangi O‘zbekistonning taraqqiyot strategiyasini “Inson qadrini ulug‘lash va faol mahalla yili”da amalga oshirishga oid Davlat dasturida belgilangan chora-tadbirlar ijrosi yuzasidan amalga oshirilgan ishlar bo‘yicha ma’lumot",
    link: "/assets/docs/statistics_considered.doc"
  }
}

function ListOfPests() {
  return (
    <div className="list_of_pests page_card">
      <h4 className="page_title">
        O'zbekiston Respublikasi uchun o'simliklar karantinida bo'lgan zararli organizmlar ro'yxati
      </h4>
      <div className="list_of_posts_body">
        {
          Object.entries(listOfPests).map(([id, { title, link }]) => (
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

export default ListOfPests