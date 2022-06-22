import React, { useEffect, useState } from 'react'
import { Modal } from 'antd';
import ReactPlayer from 'react-player/lazy';

interface IVideoCard {
  title: string,
  img: string,
  video_url: string
}

function VideoCard(props: IVideoCard) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState<boolean>(false)
  const { title, img, video_url } = props;

  const showModal = () => {
    setIsModalVisible(true);
    setVideoPlaying(true)

  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setVideoPlaying(false)
  };

  useEffect(() => {

    console.log("playing", videoPlaying)
  }, [videoPlaying])


  return (
    <>
      <div
        className='video_card'
        onClick={showModal}
        title={title}
      >
        <figure>
          <img
            className='video_img'
            src={img}
            alt="" />
        </figure>
        <img
          src="/assets/img/video-play.png"
          alt=""
          className="video_play" />
        <div className="title">
          <h3>
            {title}
          </h3>
        </div>
      </div>
      <Modal
        footer={false}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        wrapClassName={"video_modal"}

      >
        <ReactPlayer
          height={"100%"}
          width={"100%"}
          url={video_url}
          controls={true}
          light={true}
          playing={videoPlaying}

        />

      </Modal>
    </>
  )
}

export default VideoCard;

