import React, { Fragment } from 'react';
import logo from '../../assets/logo.png';

import style from './styles/Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <div className={style.left}>
          <img
            src={logo}
            alt="unpretty-farm "
          />
          <ul>
            <li>못난이 매칭</li>
            <li>못난이 마켓</li>
            <li>마이 페이지</li>
            <li>파머 메이지</li>
          </ul>
        </div>
        <button className={style.button}>로그인</button>
      </header>
    </Fragment>
  );
};

export default Header;
