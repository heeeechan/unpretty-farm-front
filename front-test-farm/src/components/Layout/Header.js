import React, { Fragment } from 'react';
import logo from '../assets/logo.png';

import style from './styles/Header.module.css';
import HeaderAlarmButton from './HeaderAlarmButton';
const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
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
        <HeaderAlarmButton />
      </header>
    </Fragment>
  );
};

export default Header;
