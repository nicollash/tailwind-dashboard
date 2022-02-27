import { FC } from "react";
import {
  AccountInfo,
  DailyProgress,
  KnowledgeBase,
  Statistics,
} from "./components";

import "./styles.scss";

const Dashboard: FC = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__section">
        <KnowledgeBase />
        <AccountInfo />
      </div>
      <div className="dashboard__section">
        <Statistics />
        <DailyProgress />
      </div>
    </div>
  );
};

export default Dashboard;
