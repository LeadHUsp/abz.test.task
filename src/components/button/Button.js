import React from "react";
import s from "./Button.module.scss";

const Button = (props) => {
  const onClick = () => {
    if (props.onClickFunc !== undefined) {
      props.onClickFunc();
    }
  };
  return (
    <button onClick={onClick} className={s.btn}>
      {props.text}
    </button>
  );
};
export default Button;
