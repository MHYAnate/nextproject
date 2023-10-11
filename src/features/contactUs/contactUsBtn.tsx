import { useState, useTransition } from 'react';
import {TabButton} from './btn';
import ContactUs from './contactUs';
import styles from "./styles.module.css";



export default function ContactUsBtn() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('');

  function selectTab(nextTab:string) {
    startTransition(() => {
      setTab(nextTab);      
    });
  } ;

  return (
    <> 
      <div className={styles.contactUsContainer}>
        <div className={styles.contact}>
          {tab === 'contactUs' && <ContactUs />}
        </div>
      <hr />
      <TabButton
        onClick={() =>tab === 'contactUs' ? selectTab(''):selectTab('contactUs')}
      >
        <div className={tab === 'contactUs' ?styles.conbtnClick:styles.conbtn}>
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" className={styles.svg1}><path d="M19,15h-1c-.553,0-1-.447-1-1s.447-1,1-1h1c.553,0,1,.447,1,1s-.447,1-1,1Zm1,3c0-.553-.447-1-1-1h-1c-.553,0-1,.447-1,1s.447,1,1,1h1c.553,0,1-.447,1-1Zm-4-12c0-.553-.447-1-1-1h-1c-.553,0-1,.447-1,1s.447,1,1,1h1c.553,0,1-.447,1-1Zm4,0c0-.553-.447-1-1-1h-1c-.553,0-1,.447-1,1s.447,1,1,1h1c.553,0,1-.447,1-1Zm0,4c0-.553-.447-1-1-1h-1c-.553,0-1,.447-1,1s.447,1,1,1h1c.553,0,1-.447,1-1Zm4,9V5c0-2.757-2.243-5-5-5h-5c-2.757,0-5,2.243-5,5,0,.553,.447,1,1,1s1-.447,1-1c0-1.654,1.346-3,3-3h5c1.654,0,3,1.346,3,3v14c0,1.654-1.346,3-3,3h-1c-.553,0-1,.447-1,1s.447,1,1,1h1c2.757,0,5-2.243,5-5Zm-8,.5v-4.152c0-1.548-.699-2.982-1.919-3.938l-3-2.349c-1.814-1.418-4.348-1.419-6.162,0l-3,2.348c-1.22,.955-1.919,2.39-1.919,3.938v4.152c0,2.481,2.019,4.5,4.5,4.5h7c2.481,0,4.5-2.019,4.5-4.5Zm-6.151-8.863l3,2.348c.731,.573,1.151,1.435,1.151,2.363v4.152c0,1.379-1.121,2.5-2.5,2.5H4.5c-1.379,0-2.5-1.121-2.5-2.5v-4.152c0-.929,.42-1.79,1.151-2.363l3-2.347c.544-.426,1.196-.639,1.849-.639s1.305,.213,1.849,.638Zm.151,7.363v-2c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1v2c0,.552,.448,1,1,1h2c.552,0,1-.448,1-1Z"/></svg>

            </div>
      </TabButton> 
      </div> 
    </>
  );
}
