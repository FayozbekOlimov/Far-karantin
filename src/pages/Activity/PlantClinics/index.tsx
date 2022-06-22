import React from 'react'
import "./style.scss";

function PlantClinics() {
  return (
    <div className="plant_clinics page_card">
      <h4 className="page_title">
        O'simliklar klinikalari
      </h4>
      <div className="plant_clinics_body">
        <p className="plant_text">
          Давлат-хусусий шериклик асосида Қорақалпоғистон Республикаси, вилоятлар ва Тошкент шаҳрида 2020-2021 йилларда ташкил этиладиган ўсимликлар клиникаларининг
        </p>
        <p className="plant_text">
          10.03.2021
        </p>
        <div className="plant_table_area">
          <table>

            <tr>
              <th rowSpan={2}>
                Т/р
              </th>
              <th rowSpan={2}>
                Ҳудудлар номи
              </th>
              <th rowSpan={2}>
                Т/р
              </th>
              <th colSpan={2}>
                Ўсимликлар клиникалари
              </th>
            </tr>
            <tr>
              <th>
                Туманлар номи
              </th>
              <th>
                Мавжуд
                (реал)
              </th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PlantClinics