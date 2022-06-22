import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import "./style.scss";


interface IInfoCard {
  id: string,
  date: string,
  title: string,
  content: string,
  link: string
}

function InfoCard(props: IInfoCard) {
  const { date, title, content, link } = props;

  return (
    <div className="info_card">
      <Link to={link} className="card_link">
        <Card>
          <p className="card_date">
            <i className="fa-solid fa-calendar-days"></i>
            {date}
          </p>
          <h3 className="card_title">
            {title}
          </h3>
          <p className="card_content">
            {content}
          </p>
        </Card>
      </Link>
    </div>
  )
}

export default InfoCard