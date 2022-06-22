import React from 'react'

interface IAdministrationCard {
  id: string;
  title: string;
  rank: string;
  fio: string;
  tel: string;
  email: string;
  receptionDays: string;
  img: string,
  faks: string,
}

function AdministrationCard(props: IAdministrationCard) {
  const { rank, fio, tel, email, receptionDays, img, title, faks } = props;
  return (
    <div className='administration_card'>
      <div className="info_body">
        <div className="img_area">
          <img src={img} alt={fio} />
        </div>
        <div className="right">
          <h2 className="rank">
            {title}
          </h2>
          <p className="fio">
            {fio}
          </p>
          <p className="information">
            <b>Lavozim : </b> {rank}
          </p>
          <p className="information">
            <b>Telefon :</b> {tel}
          </p>
          <p className="information">
            <b>Faks :</b> {faks}
          </p>
          <p className="information">
            <b>Qabul kunlari :</b> {receptionDays}
          </p>
          <p className="information">
            <b>Elektron manzil :</b> {email}
          </p>
        </div>
      </div>

    </div>
  )
}

export default AdministrationCard