import { Button, Collapse, Dropdown, Menu } from 'antd';
import "./style.scss";
import headerMenu from "./headerMenuData.json"
import { Link } from 'react-router-dom';
import { AlignRightOutlined } from '@ant-design/icons';


const createNavbar = (to: string, submenu: { to: string, text: string }[]) => (
  <Menu>
    {
      submenu.map((menu, ind) => (
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
  return (
    <div className="header_menu">
      <div className="container">
        <Collapse className="header_menu__collapse" accordion expandIcon={(panelProps) => <AlignRightOutlined />}>
          <Collapse.Panel header="Menu" key="1">
            <Collapse accordion>
              {headerMenu.map((menu, ind) => (
                <Collapse.Panel header={menu.menuName} key={"key" + ind}>
                  {menu.submenu.map((sub, ind) => (
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