import React from 'react'

const bioprotectionImgData = {
  "1": {
    src: "/assets/img/bioximiyo.jpg"
  },
  "2": {
    src: "/assets/img/bioximiyo.jpg"
  },
  "3": {
    src: "/assets/img/bioximiyo.jpg"
  },
  "4": {
    src: "/assets/img/bioximiyo.jpg"
  },

}

function Bioprotection() {
  return (
    <div className='bioprotection'>
      <h4 className="page_title">
        Biohimoya
      </h4>
      <div className="bioprotection_body page_card">
        {
          Object.entries(bioprotectionImgData).map(([id, { src }]) => (
            <figure key={id}>
              <img
                className="bioprotection_img"
                src={src}
                alt="" />
            </figure>
          ))
        }
      </div>
    </div>
  )
}

export default Bioprotection