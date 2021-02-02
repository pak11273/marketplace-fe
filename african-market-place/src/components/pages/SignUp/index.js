import * as yup from "yup";

import React, { useState } from 'react';

import axios from "axios";
import schema from "../../../schema";

export const SignUpPage = () => {

  const errors = {
    username: "",
    email: "",
    country: "",
    password: "",
    first_name: "",
    last_name: "",
    user_role: "",
  };

  const formValues = {
    username: '',
    email: '',
    password: '',
    country: "",
    first_name: "",
    last_name: "",
    user_role: false, 
  };

  const [disabled, setDisabled] = useState(true);
  const [signUpErrors, setSignUpErrors] = useState(errors);
  const [signUpFormValues, setSignUpFormValues] = useState(formValues);

  const onChange = e => {
    const { name, value, checked } = e.target;

    let valueOf = "";   

    if(checked) {
      valueOf = !signUpFormValues.user_role.value;
    } else {
        valueOf = value;
    }
      updateSignInForm(name, valueOf);
    };

  const onSubmit = e => {
    e.preventDefault();

    console.log('signup: ', signUpFormValues);
    axios.post("api" ,signUpFormValues)
        .then((response)=>{
          console.log(response);
        })
        .catch((error)=>{
          console.log(error);
        });
    setSignUpFormValues(formValues);
  };

  const updateSignInForm = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setSignUpErrors({ ...signUpErrors, [name]: "" });
        setDisabled(false)
      })
      .catch((error) => {
        setSignUpErrors({ ...signUpErrors, [name]: error.errors[0] });
      });

      setSignUpFormValues({ ...signUpFormValues, [name]: value });
  };

  return (
    <div id="page-wrapper">
      <div className="landing is-preload">
        <section id="banner">
          <form onSubmit={onSubmit}>
            <div className="inner">
              <h2>Sign Up</h2>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                username
                <input
                  type="text"
                  name="username"
                  value={signUpFormValues.username}
                  onChange={onChange}
                />
              </label>
              <div style={{color: "red"}}>{signUpErrors.username}</div> 
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                first name
                <input
                  type="text"
                  name="first_name"
                  value={signUpFormValues.first_name}
                  onChange={onChange}
                />
              </label>
              <div style={{color: "red"}}>{signUpErrors.first_name}</div> 
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                last name
                <input
                  type="text"
                  name="last_name"
                  value={signUpFormValues.last_name}
                  onChange={onChange}
                />
              </label>
              <div style={{color: "red"}}>{signUpErrors.last_name}</div>
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                email
                <input
                  type="email"
                  name="email"
                  value={signUpFormValues.email}
                  onChange={onChange}
                />
              </label>
              <div style={{color: "red"}}>{signUpErrors.email}</div> 
              <label
              style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                country
                <input 
                  type="text"
                  name="country"
                  value={signUpFormValues.country}
                  onChange={onChange}
                />    
              </label>
              <div style={{color: "red"}}>{signUpErrors.country}</div> 
              <label
                style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              >
                password
                <input
                  type="password"
                  name="password"
                  value={signUpFormValues.password}
                  onChange={onChange}
                />
              </label>
              <div style={{color: "red"}}>{signUpErrors.password}</div> 
              <label style={{
                  maxWidth: '200px',
                  margin: '40px auto',
                }}
              > check box if owner
                <input style={{
                  opacity: 1,
                  height: "20px",
                  width: "20px",
                  border: "1px solid white",
                  appearance: "auto"
                }}
                type="checkbox" name="user_role" value={signUpFormValues.user_role}
                onChange={onChange}
                />
              </label>
              <ul className="actions special">
                <li>
                  <button className="button primary" disabled={disabled}>Sign Up</button>
                </li>
              </ul>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
