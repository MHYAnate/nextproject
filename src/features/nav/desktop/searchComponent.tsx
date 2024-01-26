import {Component} from 'react'
import styles from "./styles.module.css";
import ServiceHolder from "./serviceHolder";
import { TabButton } from "./btnMain";
import Image from "next/image";
import React, { useState, memo, useTransition, useEffect } from "react";
import {initMap} from "@/features/burgerMenu/mobile/googleMapApi";


interface props {
	suggestionsList:any[],
}

const SearchComponent: React.FC<props> = ({ suggestionsList}) => {
  const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");
  const [filteredResults, setFilteredResults] = useState<any[]>([]);
	const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState<any[]>([]);

  
  
  function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	let startTime = performance.now();

	while (performance.now() - startTime < 1) {
		// Do nothing for 1ms per item to emulate extremely slow code
	}
	
	const updateSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
		handleSuggestionClick;
  };

  const handleSuggestionClick = (id: string, suggestion: string) => {

    setSearchInput(suggestion);
		 
  };
 
    const filteredList = suggestionsList.filter((eachItem) => {
      const text = eachItem.Notification.toLowerCase();
      return text.includes(searchInput);
    });
 


 
   useEffect(() => {
    if (tab) {
      const timerId = setTimeout(() => {
        initMap();
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [tab]);
  
    return (
      <div >
        <div >
          <div >
            <input
              type="search"
              className={styles.input}
              value={searchInput}
              onChange={updateSearchInput}
							src='@/features/try/svg.svg'
							placeholder="filter"
            />
          </div>
         
          <ul className={styles.ul}>
            {filteredList.map(eachItem => (
              <li key={eachItem.id} className={styles.renderCover}>
              <div className={styles.img}>
                     <Image
                       className={styles.ntfctImg}
                       src={eachItem.src}
                       alt={eachItem.Notification}
                       width={500}
                       height={500}
                       unoptimized
                     />
                   </div>
                   <div className={styles.renderSubBody}>
                     <div className={styles.noticeMsg}>{eachItem.Notification}</div>
       
                     <div className={styles.timeStamp}>
                       <p className={styles.pTime}>{eachItem.TimeStamp}</p>
                       <div className={styles.seen}>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="green"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="green"
                           className={styles.see}
                         >
                           <path
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                           />
                         </svg>
                       </div>
                     </div>
                   </div>
           </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }


export default SearchComponent