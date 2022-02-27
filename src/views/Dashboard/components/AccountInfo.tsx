import { FC } from "react";
import { Avatar } from "components/shared";

import AvatarImage from "assets/images/avatar.jpg";

const AccountInfo: FC = () => {
  return (
    <div className="account-info">
      <Avatar src={AvatarImage} />
      <div className="account-info__content">
        <span className="account-info__name">Nicollas Ehlers</span>
        <span className="account-info__email">ehlers.nicollas@gmail.com</span>
        <div className="account-info__content--row">
          <div className="account-info__content__ele">
            <span className="account-info__content__subject">Lessons</span>
            <span className="account-info__content__mark">98</span>
          </div>
          <div className="account-info__content__ele">
            <span className="account-info__content__subject">Terms</span>
            <span className="account-info__content__mark">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
