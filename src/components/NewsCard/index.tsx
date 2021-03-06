import { Card } from 'antd'
import { Link } from 'react-router-dom'
import "./style.scss";

interface INewsCard {
  id: number,
  title: string,
  image: string,
  slug: string,
  created_at: string,
  content: string,
  description: string,
  post_category_id: string
}

function NewsCard(props: INewsCard) {
  const { title, image, content, slug, created_at, description } = props;

  return (
    <div className="news_card">
      <Link to={`/news-detail/${slug}`} className="card_link">
        <Card>
          <p className="card_date">
            <i className="fa-solid fa-calendar-days"></i>
            {created_at}
          </p>
          <h3 className="card_title">
            {title}
          </h3>
          <div className='card_imgBx'>
            <img src={image} alt={title} className="card_img" />
          </div>
          <p className="card_content"
            dangerouslySetInnerHTML={{ __html: description }} />
        </Card>
      </Link>
    </div>
  )
}

export default NewsCard