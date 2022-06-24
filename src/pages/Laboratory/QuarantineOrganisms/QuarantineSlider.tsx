import './style.scss';
interface IQuarantineSlider {
  sliderLink: string,
  id: string
}

function QuarantineSlider(props: IQuarantineSlider) {
  return (
    <div
      className='slider_card'
      key={props.id}
    >
      <iframe src={props.sliderLink}
        width="100%"
        height="569"
        frameBorder="0"
        allowFullScreen={true}
        title="slider"
      >
      </iframe>
    </div>
  )
}

export default QuarantineSlider