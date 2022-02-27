import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { FOOTER_MENU, MAIN_MENU, TMenuItem } from "common";

import "../styles.scss";

interface INavItemProps {
  item: TMenuItem;
  active: boolean;
}

const NavItem: FC<INavItemProps> = ({ item, active }) => {
  return (
    <Link to={item.route}>
      <div className={active ? "nav-item--active" : "nav-item"}>
        <div>
          {item.icon}
          <span>{item.label}</span>
        </div>
      </div>
    </Link>
  );
};

const Sidebar: FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h1>Edmused</h1>
      </div>
      <div className="sidebar__body">
        {MAIN_MENU.map((item, idx) => (
          <NavItem item={item} key={idx} active={pathname === item.route} />
        ))}
      </div>
      <div className="sidebar__footer">
        {FOOTER_MENU.map((item, idx) => (
          <NavItem item={item} key={idx} active={pathname === item.route} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
