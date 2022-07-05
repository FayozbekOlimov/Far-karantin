import { Button, Collapse, Dropdown, Menu } from 'antd';
import "./style.scss";
// import headerMenu from "./headerMenuData.json"
import { Link } from 'react-router-dom';
import { AlignRightOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';
import baseAPI from '../../../api/baseAPI';
import { menuUrl } from '../../../api/apiUrls';
import { MenuItemInfoType, MenuUrlResType } from '../../../types';

const createNavbar = (to: string, submenu: { subName: string, type: string, to: string }[]) => (
  <Menu>
    {submenu.map((menu, ind) => (
      <Menu.Item key={"key" + ind}>
        <Link to={`${to}/${submenu[ind].type}/${menu.to}`}>
          {menu.subName}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
)

function HeaderMenu() {
  const [loading, setLoading] = useState<boolean>(true);
  const [menuUrls, setMenuUrls] = useState<MenuItemInfoType>([]);

  const getMenuUrls = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<MenuUrlResType>(menuUrl)
      .then((res) => {
        if (res.data[0].status === "200") {
          setMenuUrls(res.data[0].data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getMenuUrls();
  }, [getMenuUrls])

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  const [open, setOpen] = useState<string[]>([]);
  const handleClick = () => {
    // e.preventDefault();
    setOpen([]);
  };

  return (
    <div className="header_menu">
      <div className="container">
        <Collapse activeKey={open} onChange={() => setOpen(["1"])} className="header_menu__collapse" accordion expandIcon={(panelProps) => <AlignRightOutlined />}>
          <Collapse.Panel header="Menu" key="1">
            <Collapse accordion>
              {menuUrls.map((menu) => (
                <Collapse.Panel header={menu.menuName} key={menu.menuName}>
                  {menu.subMenus.map((subMenu) => (
                    <Link onClick={handleClick} key={subMenu.subName} className='header_menu_link' to={`${menu.to}/${subMenu.type}/${subMenu.to}`}>
                      {subMenu.subName}
                    </Link>
                  ))}
                </Collapse.Panel>
              ))}
            </Collapse>
          </Collapse.Panel>
        </Collapse>
        <div className='nav'>
          {menuUrls.map((menu, ind) => (
            <Dropdown key={"dropdown" + ind} overlay={createNavbar(menu.to, menu.subMenus)} placement="bottomLeft">
              <Button className='nav_link_btn' ghost>{menu.menuName}</Button>
            </Dropdown>
          ))}
        </div>
      </div>
    </div >
  )
}

export default HeaderMenu