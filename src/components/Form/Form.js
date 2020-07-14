import React from "react";
import { getPositions, getToken } from "../api/api";
import Button from "../button/Button";
import s from "./Form.module.scss";
import Input from "../Input/Input";
import {
  minLength,
  emailValidate,
  phoneNumber,
  emptyField,
  uploadImage,
} from "../utils/validate";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio_data: [],
      chosed_position: 1,
      token: "",
      require: false,
    };
  }
  async getData() {
    try {
      let res = await getPositions();
      let token = await getToken();
      this.setState({
        radio_data: res.data.positions,
        token: token.data.token,
      });
    } catch (err) {
      console.log(err);
    }
  }
  chosePosition = (e) => {
    this.setState({ chosed_position: parseInt(e.target.id, 10) });
  };
  renderRadio() {
    if (this.state.radio_data.length > 0) {
      let render = this.state.radio_data.map((radio) => {
        return (
          <div key={radio.id} className={s.radio_group}>
            <input
              className={s.custom_radio}
              type="radio"
              value={radio.name}
              id={radio.id}
              checked={this.state.chosed_position === radio.id}
              onChange={this.chosePosition}
            />
            <label htmlFor={radio.id}>{radio.name} </label>
          </div>
        );
      });
      return render;
    }
  }
  onChangeHandler = (e) => {
    this.setState({
      photo: e.target.files[0],
    });
    console.log(e.target.files[0]);
  };
  setRequire = (flag) => {
    this.setState({
      require: flag,
    });
  };
  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  SignUpUser = async (e) => {
    e.preventDefault();
    if (this.state.require === true) {
      let data = new FormData();
      data.append("name", this.state.name);
      data.append("email", this.state.email);
      data.append("phone", this.state.phone);
      data.append("position_id", this.state.chosed_position);
      data.append("photo", this.state.photo);
      try {
        let res = await fetch(
          "https://frontend-test-assignment-api.abz.agency/api/v1/users",
          {
            method: "POST",
            body: data,
            headers: {
              Token: this.state.token,
            },
          }
        );
        console.log(res);
        if (res.status === 201) {
          this.props.updateAfterSignUp();
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("form validation falled");
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <section className={s.form_wrapper}>
        <h1>Register to get a work</h1>
        <div className="col-lg-6 col-md-8 mx-auto">
          <h3>
            Attention! After successful registration and alert, update the list
            of users in the block from the top
          </h3>
          <form onSubmit={this.SignUpUser}>
            <div className={s.form_group}>
              <label htmlFor="">Name</label>
              <Input
                type="text"
                placeholder="Your name"
                name="name"
                onChangeHandler={this.onChangeInput}
                validator={[minLength, emptyField]}
                errorClass={s.error}
                formRequire={this.setRequire}
              />
            </div>
            <div className={s.form_group}>
              <label htmlFor="">Email</label>
              <Input
                type="text"
                placeholder="Your email"
                name="email"
                onChangeHandler={this.onChangeInput}
                validator={[emailValidate, emptyField]}
                errorClass={s.error}
                formRequire={this.setRequire}
              />
            </div>
            <div className={s.form_group}>
              <label htmlFor="">Phone number</label>
              <Input
                type="text"
                placeholder="+380 XX XXX XX XX"
                name="phone"
                onChangeHandler={this.onChangeInput}
                validator={[phoneNumber, emptyField]}
                errorClass={s.error}
                formRequire={this.setRequire}
              />
              <small>Еnter phone number in open format</small>
            </div>

            <div className={s.radio_wrapper}>
              <label className="mb-3">Select your position</label>
              {this.renderRadio()}
            </div>
            <div className={s.form_group}>
              <p>Photo</p>
              <Input
                type="file"
                placeholder="Upload your photo"
                cssClass={s.upload_input}
                onChangeHandler={this.onChangeHandler}
                validator={[uploadImage]}
                errorClass={s.error}
                formRequire={this.setRequire}
              />
            </div>
            <div className={s.btn_wrapper}>
              <Button
                onClikcFunc={this.SignUpUser.bind(this)}
                text={"Sign up now"}
              />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
