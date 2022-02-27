import { FC } from "react";

import "./styles.scss";

interface IProps {
  src: string;
}

const Avatar: FC<IProps> = ({ src }) => {
  return (
    <div className="avatar">
      <img src={src} alt="av" />
    </div>
  );
};

export default Avatar;
