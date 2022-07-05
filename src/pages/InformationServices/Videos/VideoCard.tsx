import ReactPlayer from 'react-player/lazy';

interface IVideoCard {
  name: string,
  created_at: string,
  video_url: string
}

function VideoCard(props: IVideoCard) {
  const { name, created_at, video_url } = props;

  return (
    <>
      <div
        className='video_card'
        title={name}
      >
        <div className="player-wrapper">
          <ReactPlayer
            className='react-player'
            url={video_url}
            controls={true}
            light={true}
          />
        </div>
        <div className="title">
          <h3>
            {name}
          </h3>
        </div>
      </div>
    </>
  )
}

export default VideoCard;

