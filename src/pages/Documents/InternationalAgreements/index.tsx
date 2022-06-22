import React from 'react'
import statisticsConsideredData from '../../statisticsConsideredData.json';


function InternationalAgreements() {
  return (
    <div className="statistics_considered page_card">
      <h4 className="page_title">
        Xalqaro shartnomalar va ikki tomonlama bitimlar
      </h4>
      <div className="statistics_body">
        <p style={{ textAlign: "center", marginBottom: "10px" }}><strong>
          O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi O‘simliklar karantini davlat inspeksiyasi va Xitoy Xalq Respublikasi Bosh bojxona boshqarmasi o‘rtasida O‘zbekistondan Xitoyga karantin ostidagi mahsulotlarni eksport qilish bo‘yicha bayonnomalar
        </strong></p>
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

export default InternationalAgreements