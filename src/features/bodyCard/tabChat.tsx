import { useState, useTransition } from 'react';
import {TabButton} from './btn';
import styles from "./styles.module.css";



export default function ChatTab() {
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
        <div></div>
      ):(
        <div></div> 
        )
        }

        <span className={styles.span}></span>
        </div>
      </TabButton>
      <hr />
      {tab === 'about'}
    </>
  );
}
