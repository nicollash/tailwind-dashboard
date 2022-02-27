import { FC } from "react";
import { BsThreeDots } from "react-icons/bs";

interface IProps {
  icon: React.ReactNode;
  percent: number;
  title: string;
  desc: string;
}

const CardDailyProgress: FC<IProps> = ({ icon, percent, title, desc }) => {
  return (
    <div className="card-daily">
      <div className={`card-daily__icon--${title.toLowerCase()}`}>{icon}</div>
      <div className="card-daily__content">
        <div className="card-daily__percent">{percent}%</div>
        <div className="card-daily__title">{title}</div>
        <div className="card-daily__desc">{desc}</div>
      </div>
      <BsThreeDots />
    </div>
  );
};

export default CardDailyProgress;
