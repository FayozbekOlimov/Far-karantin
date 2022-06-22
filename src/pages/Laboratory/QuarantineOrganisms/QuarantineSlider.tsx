import React from 'react'

interface IQuarantineSlider {
  sliderLink: string,
  id: string
}

function QuarantineSlider(props: IQuarantineSlider) {
  return (
    <div
      style={{ margin: "40px 0px" }}
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