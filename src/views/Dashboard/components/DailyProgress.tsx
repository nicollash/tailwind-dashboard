import { FC } from "react";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { RiPencilRuler2Line } from "react-icons/ri";
import { BsMic, BsBook } from "react-icons/bs";

import { CardDailyProgress } from "components/app";

const DailyProgress: FC = () => {
  return (
    <div className="daily-progress">
      <h1 className="title">Daily Progress</h1>
      <CardDailyProgress
        icon={<FaAssistiveListeningSystems color="#fff" />}
        percent={15}
        title="Listening"
        desc="Speak 20 minutes."
      />
      <CardDailyProgress
        icon={<RiPencilRuler2Line color="#fff" />}
        percent={32}
        title="Grammar"
        desc="Learn 5 new rules."
      />
      <CardDailyProgress
        icon={<BsMic color="#fff" />}
        percent={21}
        title="Prounanciation"
        desc="React 30 minutes."
      />
      <CardDailyProgress
        icon={<BsBook color="#fff" />}
        percent={64}
        title="Dictionary"
        desc="Learn 15 new words."
      />
    </div>
  );
};

export default DailyProgress;
