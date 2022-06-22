import React from 'react'
import "./style.scss";

function Law() {
  return (
    <div className="law page_card">
      <h4 className="page_title">
        Qonunlar
      </h4>
      <div className="law_body">
        <h5 className="law_body_title">
          O‘ZBЕKISTON RЕSPUBLIKASINING QONUNI


        </h5>

        <a
          className="law_link"
          href="http://"
          target="_blank"
          rel="noopener noreferrer">
          <span>
            «O‘SIMLIKLAR KARANTINI TO‘G‘RISIDA»GI O‘ZBЕKISTON RЕSPUBLIKASI QONUNIGA O‘ZGARTISH VA QO‘SHIMCHALAR KIRITISH HAQIDA
          </span>
        </a>

        <p className="content_text">
          Qonunchilik palatasi tomonidan 2018 yil 20 iyunda qabul qilingan <br />
          Senat tomonidan 2018 yil 28 iyunda ma’qullangan
        </p>
      </div>
    </div>
  )
}

export default Law