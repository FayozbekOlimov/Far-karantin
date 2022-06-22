import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss";

interface INewsCard {
  id: string,
  date: string,
  title: string,
  img: string,
  content: string,
  link: string
}

function NewsCard(props: INewsCard) {
  const { date, title, img, content, link } = props;

  return (
    <div className="news_card">
      <Link to={link} className="card_link">
        <Card>
          <p className="card_date">
            <i className="fa-solid fa-calendar-days"></i>
            {date}
          </p>
          <h3 className="card_title">
            {title}
          </h3>
          <figure>
            <img src={img} alt="Card-img" className="card_img" />
          </figure>
          <p className="card_content">
            {content}
          </p>
        </Card>
      </Link>
    </div>
  )
}

export default NewsCard