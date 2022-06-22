import React from 'react'
import "./style.scss";

function TitleBlock(props: { text: string }) {
  return (
    <div className='title_block'>
      <h2>
        {props.text}
      </h2>
    </div>
  )
}

export default TitleBlock