import React from 'react'
import { NavLink } from 'react-router-dom'
import headerMenuData from "../../layout/Header/HeaderMenu/headerMenuData.json"
import "./style.scss";


function MainSidebar(props: { id: number }) {
  let activeClassName = "active";

  return (
    <div className="main_sidebar">
      <ul>
        {headerMenuData[props.id].submenu.map(menu => (
          <li key={menu.to}>
            <NavLink className={({ isActive }) => isActive ? activeClassName : undefined} to={`${headerMenuData[props.id].to}${menu.to}`}>{menu.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainSidebar