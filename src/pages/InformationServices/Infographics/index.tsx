import React from 'react'

const infographicsImgData = {
  "1": {
    src: "/assets/img/infografika.jpg"
  },
  "2": {
    src: "/assets/img/infografika.jpg"
  },
  "3": {
    src: "/assets/img/infografika.jpg"
  },
  "4": {
    src: "/assets/img/infografika.jpg"
  },

}

function Infographics() {
  return (
    <div className='infographics'>
      <h4 className="page_title">
        Infografika
      </h4>
      <div className="infographics_body page_card">
        {
          Object.entries(infographicsImgData).map(([id, { src }]) => (
            <figure key={id}>
              <img
                className="infographics_img"
                src={src}
                alt="" />
            </figure>
          ))
        }
      </div>
    </div>
  )
}

export default Infographics