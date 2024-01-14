import styles from "./styles.module.css";
import {TabButton} from './tabBtn';
import { useState, useTransition } from 'react';
import SignUp from "./signUp";

export default function LogIn() {
  const [tab, setTab] = useState('');
  return (
    <div className={styles.loginPage}>
      <TabButton
        onClick={() =>tab === 'forgotPassword' ? setTab(''):setTab('signUp')}
      >
        forgot_Password
      </TabButton>
      <TabButton
        onClick={() =>tab === 'signUp' ? setTab(''):setTab('signUp')}
      >
        Sign Up
      </TabButton>
      <div className={styles.forgotpasswordDisplay}>
      {tab === 'forgotPassword' && <SignUp />}
      </div>
      <div className={styles.signUpDisplay}>
      {tab === 'signUp' && <SignUp />}
      </div>
    </div> 
  );
}