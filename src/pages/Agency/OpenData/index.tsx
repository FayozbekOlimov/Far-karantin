import React from 'react'
import "./style.scss";
import openData from "./openData.json"


function OpenData() {
  return (
    <div className="open_data page_card">
      <h4 className="page_title">
        Ochiq ma'lumotlar
      </h4>
      <div className="open_data_body">

        <table width="100%" className="open_data_table" >
          {
            Object.entries(openData).map(([id, { title, link }]) => (
              <tr key={id}>
                <td className='title'>
                  {title}
                </td>
                <td className='link'><a href={link} target="_blank" rel="noopener noreferrer">
                  Ko'rish
                </a></td>
              </tr>
            ))
          }

        </table>
      </div>
    </div>
  )
}

export default OpenData