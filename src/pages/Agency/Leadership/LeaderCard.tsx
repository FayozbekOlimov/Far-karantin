import { Tabs } from 'antd';
import { LeaderUrlPropsType } from '../../../types';

const { TabPane } = Tabs;

function Leadership(props: LeaderUrlPropsType) {
  const { id, image, name, phone, position, email, work_day, biography } = props;
  return (
    <div className="leader_card">
      <div className="card_tab">
        <Tabs type="card">
          <TabPane tab="Ma'lumot" key="1">
            <div className="info_body">
              <div className="img_area">
                <img src={image} alt={name} />
              </div>
              <div className="right">
                <h2 className="rank">
                  {position}
                </h2>
                <h2 className="fio">
                  {name}
                </h2>
                {
                  phone && <p className="information">
                    <b>Telefon :</b> <a href={`tel:${phone}`}>{phone}</a>
                  </p>
                }
                {
                  email && <p className="information">
                    <b>Elektron pochta :</b> <a href={`mailto:${email}`}>{email}</a>
                  </p>
                }
                {
                  work_day && <p className="information">
                    <b>Qabul kunlari :</b> {work_day}
                  </p>
                }
              </div>
            </div>
          </TabPane>
          <TabPane tab='Tarjimai hol' key="2">
            <div className="autobigraphy_body">
              <p className="autobigraphy_text" dangerouslySetInnerHTML={{ __html: biography }} />
            </div>
          </TabPane>
          {/* <TabPane tab={'Majburiyatlari'} key="3">
            <div className="obligations_body">
              <p className="obligations_text">
                {obligations.text}
              </p>
            </div>
          </TabPane> */}
        </Tabs>
      </div>
    </div >
  )
}

export default Leadership