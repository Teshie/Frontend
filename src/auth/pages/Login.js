import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import apiClient from "../../resources/apiClient";
import http from "../../resources/http";
import { Route, Redirect } from "react-router-dom";

import { set_user_status, set_user_data, set_token } from "../store/actions";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [company_name, setCompany] = useState();

  const submit = async (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Please enter email");
    } else if (password === "") {
      alert("Please enter password");
    } else if (email.length < 4 || password.length < 5) {
      alert("Email length should be atleast six character");
    } else {
      try {
        const response = await apiClient.auth
          .login({
            username: email,
            password,
          })
          .then(
            (response) => {
              props.set_token(response.data.token);
              props.set_user_data(response.data.user);
              props.set_user_status({
                approved: response.data.user.approved,
                loggedIn: true,
                token: response.data.token,
              });
            },
            (err) => {
              alert("Email and password is not valid");
            }
          );
        return props.history.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form>
      <div className="flex  justify-around">
        <div className="flex w-96  border relative  mt-24 justify-center h-full items-center color">
          <div className="  ">
            <div className="flex justify-center items-center ">
              <img
                className="h-80 absolute  bottom-80 "
                src="https://i.ibb.co/F3kB1p7/logo.png"
                alt="cyberminds-logo"
              />
            </div>
            <div className="absolute bottom-40 flex space-x-2 text-black">
              <input className="h-6" type="checkbox" checked />
              <p>Keep me signed in</p>
            </div>
            <div className="your-input flex flex-col space-y-10 mt-44">
              <div className="input text-black flex flex-col relative">
                <p className=" absolute">Email</p>
                <input
                  className="mt-4 h-4 p-4"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input text-black flex flex-col relative">
                <div className="flex space-x-56">
                  <p className=" absolute">Password</p>
                </div>
                <input
                  className="mt-4 h-4 p-4 w-16"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input mt-24 flex justify-center items-center">
              <button
                onClick={(e) => {
                  submit(e);
                }}
                className="w-10 bg color button-signup"
              >
                Sign in
              </button>
            </div>
            <p className="p-2 font-bold flex justify-center items-center border-t-4 mt-4 second-color">
              Forget Passsword?
            </p>

            {/* <p className="join-link color">
          Havn't an Account?
          <Link to="/signup" className="join-now">
            SignUp
          </Link>
        </p> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default withRouter(
  connect(null, { set_token, set_user_status, set_user_data })(Login)
);
