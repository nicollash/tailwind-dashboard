import { SmoothLineChart } from "components/shared";
import { FC } from "react";

import "../styles.scss";

const Statistics: FC = () => {
  return (
    <div className="statistics">
      <h1 className="title">Statistics</h1>
      <SmoothLineChart />
    </div>
  );
};

export default Statistics;
