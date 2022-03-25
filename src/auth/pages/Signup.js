import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './form.css';
import generator from 'generate-password';
import apiClient from '../../resources/apiClient';
import { set_user_status, set_user_data, set_token } from '../store/actions';
import http from '../../resources/http';
import emailjs from 'emailjs-com';

const baseURL =
  'https://cyberminds-backend.herokuapp.com/api/account/get-client-types';
const baseURLL =
  'https://cyberminds-backend.herokuapp.com/api/account/get-clients';

const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company_name, setCompany] = useState('');
  const [user_type, setRole] = useState();
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);

  //PASSWORD GENERATOR
  const [length, setLength] = useState(10);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isUpperCase, setIsUpperCase] = useState(true);
  const [isNumbers, setIsNumbers] = useState(true);
  const [isSymbols, setIsSymbols] = useState(false);

  const generatePassword = () => {
    const pwd = generator.generate({
      length: length,
      lowercase: isLowerCase,
      uppercase: isUpperCase,
      numbers: isNumbers,
      symbols: isSymbols,
    });
    setPassword(pwd);
  };
  useEffect(() => {
    http
      .get(baseURLL)
      .then((response) => {
        setDatas(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log(err);
        }
      );
  }, []);
  //PASSWORD GENERATOR
  useEffect(() => {
    http
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          alert(err);
        }
      );
    generatePassword();
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4eb0ew1',
        'template_o601s2j',
        e.target,
        'user_JLmBiGFXHTQCRCtufP2Nr'
      )
      .then(
        (result) => {
          alert('User Created Successfully! Account Details Sent!');
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.auth
        .signup({
          email,
          username,
          user_type,
          client: company_name,
          password,
        })
        .then(
          (result) => {
            sendEmail(e);
          },
          (error) => {
            alert('SignUp Failed! Try Again!');
          }
        );

      // props.set_token(response.data.token);
      // props.set_user_data(response.data);
      // props.set_user_status({
      //   approved: response.data.approved,
      //   loggedIn: true,
      //   token: response.data.token,
      // });
      // alert("user created");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className="flex  justify-center height-signup items-center color">
        <form className="h-36" onSubmit={submit}>
          <div className="container relative space-y-2">
            <div className="your-input">
              <div class="search_categories w-96">
                <div class="select">
                  <select
                    value={company_name}
                    onChange={(e) => setCompany(e.target.value)}
                  >
                    <option>Select Client</option>
                    {datas?.map((x, y) => (
                      <option value={x.id}>{x.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="input mt-4">
                <div class="search_categories w-96">
                  <div class="select">
                    <select
                      value={user_type}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="1" selected="selected">
                        Select User Type
                      </option>
                      {data?.map((x, y) => (
                        <option>{x.value}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="input">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  name="name"
                  placeholder="User Name"
                />
              </div>

              <div className="input mt-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name="email"
                  placeholder="User Email"
                />
              </div>
              <div className="input invisible">
                <input
                  type="password"
                  readonly
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="password"
                />
              </div>
            </div>

            <input
              type="submit"
              value="Sign Up"
              // onClick={(e) => {
              //   sendEmail(e);
              //   // submit();
              // }}
              className="bg color button-signup"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default withRouter(
  connect(null, { set_token, set_user_status, set_user_data })(Signup)
);
