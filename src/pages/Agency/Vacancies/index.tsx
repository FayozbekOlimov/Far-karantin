import React from 'react'
import AutobiographyForm from './AutobiographyForm';
import "./style.scss";

const vacanciesTopText = `
<p><strong><u>O‘simliklar karantini va himoyasi agentligi markaziy apparati boshqarma va bo'limlaridagi mavjud vakant lavozimlarga ochiq mustaqil tanlov e’lon qilindi.</u></strong></p>

<p><strong><u>O‘simliklar karantini chegara maskanlarini nazorat qilish bo‘limi:</u></strong>
Yetakchi mutaxassisi<br />
<i>Hujjatlar 2022-yil 14-fevraldan 24-fevralgacha (shu kuni ham) qabul qilinadi.</i></p>

<p><strong><u>Fitosanitar xavfni tahlil qilish va baholash boshqarmasi:</u></strong>
Yetakchi mutaxassisi<br />
<i>Hujjatlar 2022-yil 16-fevraldan 25-fevralgacha (shu kuni ham) qabul qilinadi.</i></p>

<p><strong>Paxta, boshoqli don va moyli ekinlari maydonlari nazorati bo‘limi:</strong>
Yetakchi mutaxassisi<br />
<i>Hujjatlar 2022-yil 10-fevraldan 19-fevralgacha (shu kuni ham) qabul qilinadi.</i></p>

<p>Tanlovda ishtirok etish uchun nomzodlar <strong><a class="vacancy_argos" href="https://vacancy.argos.uz" target="_blank" rel="noopener noreferrer">Davlat fuqarolik xizmatchilari vakant lavozimlarining yagona ochiq portali</a></strong>  (https://vacancy.argos.uz/) orqali ro‘yxatdan o‘tishlari, vakant bo‘lgan lavozimga so‘ralgan hujjatlarni elektron shaklda taqdim etishlari zarur.</p>
`

function Vacancies() {
  return (
    <div className="vacancies page_card">
      <h4 className="page_title">
        Bo'sh ish o'rinlari
      </h4>
      <div className="vacancies_body">
        <p className="top_text" dangerouslySetInnerHTML={{ __html: vacanciesTopText }}>
        </p>

        <a className="vacancies_link" href="/assets/docs/Vacancies.doc" target="_blank" rel="noopener noreferrer">
          O‘zbekiston Respublikasi O‘simliklar karantini va himoyasi agentligi tizimidagi vakant lavozimlar (bo‘sh ish o‘rinlari) haqida ma'lumot
        </a>

        <a className="vacancy_img_link" href="https://vacancy.argos.uz" target="_blank" rel="noopener noreferrer">
          <figure>
            <img src="/assets/img/vacancy.argos.uz.jpg" alt="vacancy.argos.uz" />
          </figure>
        </a>

        <AutobiographyForm />

      </div>
    </div>
  )
}

export default Vacancies