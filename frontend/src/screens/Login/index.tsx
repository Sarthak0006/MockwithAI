import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Index: React.FC = () => {

  return (
    <div className={style.login_container}>
      <div className={style.login}>
        <h1>Welcome Back</h1>
        <input required type="email" placeholder="Email Address*" />
        <button className={style.continue}>Continue</button>
        <div className={style.signup}>
          <h5>Don't have an account?</h5>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
