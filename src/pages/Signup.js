import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PrimaryBtn from '../global/PrimaryBtn/PrimaryBtn';
import UseForm from '../helpers/UseForm';
import validate from '../helpers/ValidateInfo';
import {FiLogIn} from "react-icons/fi"



//TODO: FORM STYLING

const SignUpElements = styled.section`
  background: #2ec4b6;
  height:100vh;
  width: 100%;
`;

const SignUpContainer = styled.div`
width:400px;
background: #fff;
padding: 20px 30px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

`;
const SignUpHeader = styled.div`
width: 100%;
`;
const TopLine = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #2ec4b6;
  text-align: center;
  margin: 10px 0;
`;
const HeadLine = styled.h3`
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;

  span {
    a {
      color: #2ec4b6;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;
const SignUpWrapper = styled.div`
width: 100%;
`;
const SignUpFormContainer = styled.div`
  width: 100%;

  form {
    width: 100%;
    .input_container {
      display: flex;
      flex: 1;
      width: 100%;
      flex-direction: column;
      margin-bottom: 20px;

      label {
        font-size: 14px;
        font-weight: 500;
      }

      input {
        padding-left: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
        border: 1px solid #2ec4b6;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 500;

        &::placeholder {
          font-weight: 500;
          font-size: 14px;
        }
      }

      .error {
        color: red;
        font-size: 14px;
        font-weight: 500;
        margin: 10px 0;
        transition: all 0.5s ease-in-out;
      }
    }

    .submit-btn {
      height: 50px;
      width: 160px;
      border-radius: 5px;
      font-weight: 500;
      font-size: 0.95rem;
      padding-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #2ec4b6;
      color: #fff;
      border: none;
      transition: all 0.5s ease-in-out;

      span{
          margin-right: 5px;
          display: flex;
          align-items: center;
          font-size:20px;
      }
      &:hover {
        transform: scale(1.05);
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;

const SignUpBtn = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
`;

//TODO: FORM FUNCTIONALITY (FRONT END)
const Signup = ({submitForm}) => {

    const {handleChange,handleSubmit, values, errors} = UseForm(submitForm, validate);
    return (
      <SignUpElements>
        <SignUpContainer>
          <SignUpHeader>
            <TopLine>Sign Up</TopLine>
            <HeadLine>
              Already Have an Account ?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </HeadLine>
          </SignUpHeader>
          <SignUpWrapper>
            <SignUpFormContainer>
              <form onSubmit={handleSubmit}>
                <div className="input_container">
                  <label htmlFor="username">Username</label>
                  <input
                    className="form_input"
                    type="text"
                    name="username"
                    placeholder="Enter Username..."
                    value={values.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <p className="error">{errors.username}</p>
                  )}
                </div>
                <div className="input_container">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form_input"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="input_container">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form_input"
                    type="password"
                    name="password"
                    placeholder="**************"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
                <div className="input_container">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    className="form_input"
                    type="password"
                    name="confirmPassword"
                    placeholder="**************"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                </div>
                <SignUpBtn>
                  <button type="submit" className="submit-btn">
                    <span>
                      <FiLogIn />
                    </span>{" "}
                    Sign Up
                  </button>
                  <PrimaryBtn primary={false} children="Go Back" to="/" />
                </SignUpBtn>
              </form>
            </SignUpFormContainer>
          </SignUpWrapper>
        </SignUpContainer>
      </SignUpElements>
    );
}

export default Signup
