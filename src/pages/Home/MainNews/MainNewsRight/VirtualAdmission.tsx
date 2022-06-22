import React from 'react'

interface IVirtualAdmission {
  link: string,
  text: string
}

function VirtualAdmission(props: IVirtualAdmission) {
  const { link, text } = props;
  return (
    <div className="virtual_admission">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>

    </div>
  )
}

export default VirtualAdmission