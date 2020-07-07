import React, { Component } from "react";
import "./assets/scss/main.scss";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/button/Button";
import Users from "./components/Users/Users";
import about_img from "./assets/img/about.webp";
import about_img_2x from "./assets/img/about@2x.webp";
import about_img_3x from "./assets/img/about@3x.webp";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <section className="banner-wrapper">
          <div className="container ">
            <h1 className="col-lg-7">
              Test assignment
              <br /> for Frontend Developer position
            </h1>
            <p className="col-lg-7">
              We kindly remind you that your test assignment should be submitted
              <br />
              as a link to github/bitbucket repository. Please be patient, we
              consider and respond to every application that meets minimum
              requirements.
              <br />
              We look forward to your submission. Good luck! The photo has to
              scale in the banner area on the different screens
            </p>
            <Button text={"Sign up now"} />
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h1>Let's get acquainted</h1>
            <div className="row px-0">
              <div className="col-lg-5 about_img">
                <img
                  src={about_img}
                  srcSet={`${about_img_2x} 2x, ${about_img_3x} 3x`}
                  alt="developer"
                />
              </div>
              <div className="col-lg-7 about-text">
                <h2>I am cool frontend developer</h2>
                <p>
                  We will evaluate how clean your approach to writing CSS and
                  Javascript code is. You can use any CSS and Javascript 3rd
                  party libraries without any restriction.
                </p>
                <p>
                  If 3rd party css/javascript libraries are added to the project
                  via bower/npm/yarn you will get bonus points. If you use any
                  task runner (gulp/webpack) you will get bonus points as well.
                  Slice service directory page P​SD mockup​ into HTML5/CSS3.
                </p>
                <button>Sing up now</button>
              </div>
            </div>
          </div>
        </section>
        <Users />
      </>
    );
  }
}

export default App;
