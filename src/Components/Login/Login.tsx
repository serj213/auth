import React from 'react';

import styles from './login.module.scss';

const Login = () => {
  return (
    <div className={styles.auth}>
      <h1 className={styles.auth__title}>Войдите</h1>
      <p className={styles.auth__subTitle}>Введите данные для входа на сайт</p>

      <div className={styles.auth__box}>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button>Войти</button>
      </div>
    </div>
  );
};

export default Login;
