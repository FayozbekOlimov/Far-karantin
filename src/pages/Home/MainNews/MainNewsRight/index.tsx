import React from 'react'
import "./style.scss";
import VirtualAdmission from './VirtualAdmission';

const virtualAdmissionData = [
  {
    link: "https://pm.gov.uz/ru",
    text: "O'zbekiston Respublikasi Prezidenti virtual qabulxonasi"
  },
  {
    link: "https://pm.gov.uz/ru",
    text: "O'zbekiston Respublikasi Prezidenti virtual qabulxonasi"
  },
  {
    link: "https://pm.gov.uz/ru",
    text: "O'zbekiston Respublikasi Prezidenti virtual qabulxonasi"
  },
  {
    link: "https://pm.gov.uz/ru",
    text: "O'zbekiston Respublikasi Prezidenti virtual qabulxonasi"
  }

]

function MainNewsRight() {
  return (
    <div className="main_news_right">
      {
        virtualAdmissionData.map((virtualAdmission, idx) => (
          <VirtualAdmission {...virtualAdmission} />
        ))
      }

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className='symbol_box_link'
      >
        <div className="sidebar_sybols">
          <span>
            Davlat <br />ramzlari
          </span>
        </div>
      </a>

      <div className="sidebar_block1">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/img/prezident.jpg" alt="prezident" />
          <h4 className='sidebar_block_title'>
            2022-yil "Inson qadrini ulug‘lash va faol mahalla yili" deb e’lon qilindi
          </h4>
        </a>
      </div>
    </div>
  )
}

export default MainNewsRight