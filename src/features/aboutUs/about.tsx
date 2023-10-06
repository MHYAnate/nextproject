import { useState, useTransition } from 'react';
import {TabButton} from './btn';
import AboutTab from './abtUs';
import { Services } from '../addCarousel/data';
import styles from "./styles.module.css";



export default function AboutContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('');

  function selectTab(nextTab:string) {
    startTransition(() => {
      setTab(nextTab);      
    });
  } ;

  return (
    <>
      <TabButton 
        onClick={() =>tab === 'about' ? selectTab(''):selectTab('about')}
      >
        <div className={(tab ==='about'?styles.tabBtnclicked: styles.tabBtn)}>{tab ==='about' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.abtSvg}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
      </svg>
      ):(
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.abtSvg}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
        </svg>
        )
        }

        <span className={styles.span}>List of available Services</span>
        </div>
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab Services={Services} />}
    </>
  );
}
