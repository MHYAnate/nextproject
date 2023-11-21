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
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    
     
      ):(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.abtSvg}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
      </svg>
        )
        }

        <span className={styles.span}>List of available Services</span>
        </div>
      </TabButton>
      {tab === 'about' && <AboutTab Services={Services} />}
    </>
  );
}
