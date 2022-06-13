import React from 'react';

import { Link } from 'react-router-dom';

import styles from './header.module.scss';

import logo from '../../logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link to="/" className={styles.header__logo}>
          <img src={logo} alt="" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/basket">Корзина</Link>
            </li>
            <li>
              <Link to="/blog">блог</Link>
            </li>
            <li>
              <Link to="/products">товары</Link>
            </li>
            <li>
              <Link to="/login">войти</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
