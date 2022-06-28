import { Button, Collapse, Dropdown, Menu } from 'antd';
import "./style.scss";
import headerMenu from "./headerMenuData.json"
import { Link } from 'react-router-dom';
import { AlignRightOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';
import baseAPI from '../../../api/baseAPI';
import { menuUrl } from '../../../api/apiUrls';

const createNavbar = (to: string, submenu?: { to: string, text: string }[]) => (
  <Menu>
    {
      submenu?.map((menu, ind) => (
        <Menu.Item key={"key" + ind}>
          <Link to={`${to}${menu.to}`}>
            {menu.text}
          </Link>
        </Menu.Item>
      ))
    }
  </Menu>
)

function HeaderMenu() {
  const [loading, setLoading] = useState<boolean>(true);
  const [menuUrls, setMenuUrls] = useState<MenuItemInfoType>({} as MenuItemInfoType);

  type MenuItemInfoType = {
    id: number,
    title: string,
    url: string,
    submenus: MenuItemInfoType[]
  }[]

  type MenuUrlResType = {
    status: number,
    message: string,
    data: MenuItemInfoType
  }

  const getMenuUrls = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<MenuUrlResType>(menuUrl)
      .then((res) => {
        if (res.data.status === 200) {
          setMenuUrls(res.data.data);
          setLoading(false);
        } else {
          console.log(res.data.message)
        }
      })
  }, []);

  useEffect(() => {
    getMenuUrls();
  }, [getMenuUrls])

  return (
    <div className="header_menu">
      <div className="container">
        <Collapse className="header_menu__collapse" accordion expandIcon={(panelProps) => <AlignRightOutlined />}>
          <Collapse.Panel header="Menu" key="1">
            <Collapse accordion>
              {headerMenu.map((menu, ind) => (
                <Collapse.Panel header={menu.menuName} key={"key" + ind}>
                  {menu.submenu?.map((sub, ind) => (
                    <Link key={"submenu" + ind} className='header_menu_link' to={`${menu.to}${sub.to}`}>
                      {sub.text}
                    </Link>
                  ))}
                </Collapse.Panel>
              ))}
            </Collapse>
          </Collapse.Panel>
        </Collapse>
        <div className='nav'>
          {headerMenu.map((menu, ind) => (
            <Dropdown key={"dropdown" + ind} overlay={createNavbar(menu.to, menu.submenu)} placement="bottomLeft">
              <Button className='nav_link_btn' ghost>{menu.menuName}</Button>
            </Dropdown>
          ))}
        </div>
      </div>
    </div >
  )
}

export default HeaderMenu

{/* <Dropdown overlay={createNavbar(menu.to, menu.submenu)} trigger={['click']} placement="bottomLeft">
  <Button className='nav_link_btn' ghost>{menu.menuName}</Button>
</Dropdown> */}