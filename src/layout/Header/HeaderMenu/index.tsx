import { Button, Dropdown, Menu } from 'antd';
import "./style.scss";
import headerMenu from "./headerMenuData.json"
import { Link } from 'react-router-dom';


const createNavbar = (to: string, submenu: { to: string, text: string }[]) => (
  <Menu>
    {
      submenu.map(menu => (
        <Menu.Item>
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
        {
          headerMenu.map((menu) =>
          (
            <Dropdown overlay={createNavbar(menu.to, menu.submenu)} placement="bottomLeft">
              <Button className='nav_link_btn' ghost>{menu.menuName}</Button>
            </Dropdown>
          )
          )}
      </div>
    </div>
  )
}

export default HeaderMenu