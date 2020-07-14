import React, { useState } from "react";
import s from "./Input.module.scss";

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
  if (props.type === "file") {
    return (
      <div className={s.upload_form}>
        <input
          type={props.type}
          placeholder={props.placeholder || null}
          name={props.name}
          onChange={onChangeHandler}
          onBlur={onChangeHandler}
          className={`${props.cssClass} ${
            require === false ? s.errorClass : ""
          }`}
        />
        <label
          className={`${s.upload_lable} ${
            require === false ? s.errorClass : ""
          }`}
          htmlFor="uploadInput"
        >
          Upload your photo
        </label>
        <small>Photo in .jpg format, not be greater than 5 Mb</small>
      </div>
    );
  } else {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder || null}
        name={props.name}
        onChange={onChangeHandler}
        onBlur={onChangeHandler}
        className={`${props.cssClass} ${
          require === false ? props.errorClass : ""
        }`}
      />
    );
  }
};

export default Input;
