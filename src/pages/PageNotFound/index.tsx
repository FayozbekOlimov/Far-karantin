import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
function PageNotFound() {
  return (
    <section className="page_not_found">
      <div className="container">
        <div className="page_not">
          <h2>
            404
          </h2>
          <p>
            Oops we can't find your page
          </p>
          <div className="buttonSec">
            <Link to="/">Go to Home</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound