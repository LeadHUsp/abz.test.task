import React, { useState } from "react";

const Input = (props) => {
  const [require, setRequire] = useState(true);
  const onChangeHandler = (e) => {
    props.onChangeHandler(e);
    validate(e);
  };

  const validate = (e) => {
    let flag = props.validator.map((valid) => {
      return valid(e);
    });
    if (!flag.includes(false)) {
      setRequire(true);
      props.formRequire(true);
    } else {
      setRequire(false);
      props.formRequire(false);
    }
  };

  return (
    <input
      type={props.type}
      placeholder={props.placeholder || null}
      name={props.name}
      onChange={onChangeHandler}
      className={` ${require === false ? props.errorClass : ""}`}
    />
  );
};

export default Input;
