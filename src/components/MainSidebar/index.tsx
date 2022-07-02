import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { menuUrl } from '../../api/apiUrls';
import baseAPI from '../../api/baseAPI';
// import headerMenuData from "../../layout/Header/HeaderMenu/headerMenuData.json"
import { MenuItemInfoType, MenuUrlResType } from '../../types';
import "./style.scss";

function MainSidebar(props: { id: string }) {
  let activeClassName = "active";

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

  return (
    <div className="main_sidebar">
      <ul>
        {menuUrls.filter(item => item.to === props.id)[0]?.subMenus?.map((menu, inx) => (
          <li key={inx}>
            <NavLink
              className={
                ({ isActive }) => isActive ? activeClassName : undefined
              }
              to={`${menu.type}/${menu.to}`}
            >{menu.subName}</NavLink>
          </li>
         ))}
      </ul>
    </div>
  )
}

export default MainSidebar