import React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

interface IAutobiography {
  title: string,
  text: string
}

interface IInfo {
  title: string;
  rank: string;
  fio: string;
  tel: string;
  email: string;
  receptionDays: string;
  img: string
}

interface ILeadership {
  id: string,
  info: IInfo,
  autobiography: IAutobiography,
  obligations: IAutobiography
}

function Leadership(props: ILeadership) {
  const { id, info, autobiography, obligations } = props;
  return (
    <div className="leader_card" key={id}>
      <div className="card_tab">
        <Tabs type="card">
          <TabPane tab={info.title} key="1">
            <div className="info_body">
              <div className="img_area">
                <img src={info.img} alt={info.fio} />
              </div>
              <div className="right">
                <h2 className="rank">
                  {info.rank}
                </h2>
                <h2 className="fio">
                  {info.fio}
                </h2>
                <p className="information">
                  <b>Telefon :</b> {info.tel}
                </p>
                <p className="information">
                  <b>Elektron pochta :</b> {info.email}
                </p>
                <p className="information">
                  <b>Qabul kunlari :</b> {info.receptionDays}
                </p>

              </div>
            </div>
          </TabPane>
          <TabPane tab={autobiography.title} key="2">
            <div className="autobigraphy_body">
              <p className="autobigraphy_text">
                {autobiography.text.split("\n").map(text => (
                  <p>
                    {text}
                  </p>

                ))}
              </p>
            </div>
          </TabPane>
          <TabPane tab={obligations.title} key="3">
            <div className="obligations_body">
              <p className="obligations_text">
                {obligations.text}
              </p>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div >
  )
}

export default Leadership