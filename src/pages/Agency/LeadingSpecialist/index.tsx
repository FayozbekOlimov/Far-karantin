import React from 'react'
import "./style.scss";

function LeadingSpecilist() {
  return (
    <div className="leading_spacialist page_card">
      <h4 className="page_title">
        Ichki karantini bo'limi boshlig'i va bosh mutaxassislari (yetakchi mutaxassis) to'g'risida ma'lumot
      </h4>
      <div className="leading_specialist_body">
        <a
          className='leading_spacialist_link'
          href="/assets/docs/leading_specialist.doc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ko'rish
        </a>
      </div>
    </div>
  )
}

export default LeadingSpecilist