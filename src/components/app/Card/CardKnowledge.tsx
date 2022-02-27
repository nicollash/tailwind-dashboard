import { FC } from "react";
import { BsThreeDots } from "react-icons/bs";

import "./styles.scss";

interface IProps {
  title: string;
  color: string;
  icon: React.ReactNode;
}

const CardKnowledge: FC<IProps> = ({ title, icon, color }) => (
  <div className={`card-knowledge--${color}`}>
    <div className="card-knowledge__header">
      {icon}
      <BsThreeDots />
    </div>
    <span className="card-knowledge__title">{title}</span>
  </div>
);

export default CardKnowledge;
