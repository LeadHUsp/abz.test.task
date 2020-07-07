import React, { useState } from "react";

import s from "./UserInfo.module.scss";

const UserInfo = ({ user }) => {
  const [showTip, toggleTip] = useState(false);
  const [tipText, settipText] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const cutWords = (word, size = 10) => {
    if (word.length > size) {
      return `${word.substring(0, size)}...`;
    } else {
      return word;
    }
  };
  const showTips = (e) => {
    settipText(e.target.getAttribute("data"));
    toggleTip(true);
    let target = e.target.parentNode.getBoundingClientRect();
    let x = e.clientX - target.left;
    let y = e.clientY - target.top;
    setCoords({ x: x, y: y });
  };
  const hideTips = () => {
    toggleTip(false);
    setCoords({ x: 0, y: 0 });
  };
  return (
    <div className={`col-lg-4 ${s.user_info_wrapper}`}>
      <img src={user.photo} alt="avatar" className={s.user_avatar} />
      <div
        className={s.user_info}
        onMouseOver={showTips}
        onMouseLeave={hideTips}
      >
        <h2 data={user.name}>{cutWords(user.name, 15)}</h2>
        <p data={user.position}>{cutWords(user.position, 15)}</p>
        <p data={user.email}>{cutWords(user.email, 20)}</p>
        <p data={user.phone}>{cutWords(user.phone, 20)}</p>
        {showTip ? (
          <p
            className={s.tool_tip}
            style={{ left: `${coords.x / 50}px`, top: `${coords.y + 20}px` }}
          >
            {tipText}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default UserInfo;
