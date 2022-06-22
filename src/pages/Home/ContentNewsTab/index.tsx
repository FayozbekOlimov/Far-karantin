import React from 'react'
import { Tabs } from 'antd';
import "./style.scss";
import { Link } from 'react-router-dom';
import News from "./Components/News"
const { TabPane } = Tabs;

const operations = <Link to="/news" className={"news_link"}>Axborot xizmati</Link>;

// tablinkData
const tabLinkDatas = [
  {
    tab: "Yangiliklar",
    key: "1",
    component: News
  },
  {
    tab: "Tadbirlar",
    key: "2",
    component: News
  },
  {
    tab: "Yangiliklar",
    key: "3",
    component: News
  },
  {
    tab: "Yangiliklar",
    key: "4",
    component: News
  }
]

function ContentNewsTab() {

  function callback(key: string) {
    console.log(key);
  }


  return (
    <div className='content_news_tab'>
      <div className="container">
        <Tabs
          tabBarExtraContent={{ left: operations }}
          defaultActiveKey="1"
          onChange={callback}
          animated={{ tabPane: true }}
        >
          {
            tabLinkDatas.map(tabLinkData => (
              <TabPane tab={tabLinkData.tab} key={tabLinkData.key}>
                <tabLinkData.component />
              </TabPane>
            ))
          }

        </Tabs>
      </div>
    </div>
  )
}

export default ContentNewsTab