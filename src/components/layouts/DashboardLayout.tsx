import { FC } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import "./styles.scss";

const DashboardLayout: FC = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
