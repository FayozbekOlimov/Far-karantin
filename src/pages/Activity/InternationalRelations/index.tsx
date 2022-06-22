import React from 'react'
import "./style.scss";

function InternationalRelations() {
  return (
    <div className="information_staff page_card">
      <h4 className="page_title">
        Xalqaro aloqalar
      </h4>
      <div className="staff_body">
        <figure>
          <img src="/assets/img/1.jpg" alt="" />
        </figure>
        <figure>
          <img src="/assets/img/1.jpg" alt="" />
        </figure>
        <a
          className='stuff_link'
          href="http://"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-regular fa-file-pdf"></i>
          (0.32 Mb)
        </a>
      </div>
    </div>
  )
}

export default InternationalRelations