import { Button } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import "./style.scss";

interface IPhotoGalleryCard {
  title: string,
  slug: string,
  image: string,
  created_at: string,
}

function PhotoGalleryCard(props: IPhotoGalleryCard) {
  const { title, slug, image, created_at } = props;

  return (
    <div className="photo_gallery_card">
      {/* {
        title && (
          <div className="photo_gallery_top">
            <h2 className="photo_gallery_top_title">
              {title}
            </h2>
            <Link to={"#"} className="more_link">{slug}</Link>
          </div>
        )
      } */}

      <Link to={slug} >
        <div className="photo_gallery_body">
          <img
            className='photo_gallery_img'
            src={image}
            alt=""
          />
          <div className={`content`}>
            <div className="left">
              <h2 className="content_title">
                {title}
              </h2>
              <Button type="text">{created_at}</Button>
            </div>
            {/* {
              imgCount && (
                <div className="right">
                  <h1 className="img_count">
                    {imgCount}
                  </h1>
                  <p>rasm</p>
                </div>
              )
            } */}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PhotoGalleryCard