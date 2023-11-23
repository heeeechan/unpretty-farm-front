import React, { Fragment } from "react";

import style from "./styles/Login.module.css";
import bgImage from '../../assets/login-bg.png';

const Login = () => {
  return (
    <Fragment>
      <main>
        <img src={bgImage} alt="login-bg" />
        <p className={style.p1}>로그인·회원가입</p>
        <p>못생겨서 오히려 좋아.</p>
        <p>못난이 농산물 거래, 언프리티 팜</p>
      </main>
    </Fragment>
  );
};

export default Login;
