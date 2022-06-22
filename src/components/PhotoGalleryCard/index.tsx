import { Button } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import "./style.scss";

interface IPhotoGalleryCard {
  title?: string,
  linkTitle?: string,
  link: string,
  contentTitle: string,
  imgCount?: string,
  img: string,
  date: string
}

function PhotoGalleryCard(props: IPhotoGalleryCard) {
  const { title, linkTitle, link, contentTitle, imgCount, img, date } = props;

  return (
    <div className="photo_gallery_card">
      {
        title && (
          <div className="photo_gallery_top">
            <h2 className="photo_gallery_top_title">
              {title}
            </h2>
            <Link to={"#"} className="more_link">{linkTitle}</Link>
          </div>
        )
      }

      <Link to={link} >
        <div className="photo_gallery_body">
          <img
            className='photo_gallery_img'
            src={img}
            alt=""
          />
          <div className={`content ${imgCount && "count"}`}>
            <div className="left">
              <h2 className="content_title">
                {contentTitle}
              </h2>
              <Button type="text">{date}</Button>
            </div>
            {
              imgCount && (
                <div className="right">
                  <h1 className="img_count">
                    {imgCount}
                  </h1>
                  <p>rasm</p>
                </div>
              )
            }
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PhotoGalleryCard