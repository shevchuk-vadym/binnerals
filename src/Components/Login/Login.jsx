import React from 'react';
import style from './Login.module.scss';

const Login = () => {
  return (
    <>
      <form className={style.login}>
        <input className={style.mail} type='email' placeholder='Email' />
        <input
          className={style.password}
          type='password'
          minLength={5}
          placeholder='Password'
        />

        <button className={style.signin}>Sign in</button>
      </form>
    </>
  );
};

export default Login;
