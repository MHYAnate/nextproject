import {Component} from 'react'
import styles from "./styles.module.css";
import ServiceHolder from "./serviceHolder";
import { TabButton } from "./btnMain";
import Image from "next/image";
import React, { useState, memo, useTransition } from "react";
import {initMap} from "@/features/burgerMenu/mobile/googleMapApi";


interface props {
	suggestionsList:any[],
}

const SearchComponentMain: React.FC<props> = ({ suggestionsList}) => {
  const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");
	
	const [searchInput, setSearchInput] = useState(""); 
  function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	// let startTime = performance.now();

	// while (performance.now() - startTime < 1) {
	// 	// Do nothing for 1ms per item to emulate extremely slow code
	// }

  const debounce = <T extends (...args: any[]) => any>(
    func: T,
    delay: number,
    immediate: boolean = false
  ): (...args: Parameters<T>) => void => {
    let timeoutId: NodeJS.Timeout | null = null;
    
    return (...args: Parameters<T>): void => {
      const later = () => {
        timeoutId = null;
        if (!immediate) {
          func.apply(this, args);
        }
      };
  
      const callNow = immediate && !timeoutId;
      
  
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      setTimeout(later as any, delay);
  
      if (callNow) {
        func.apply(this, args);
      }
    };
  };
  
  // const debouncedFunction = debounce(myFunction, 500, true);
  
  // Now, when you call debouncedFunction, it will wait 500ms before executing myFunction
  
  
	
	const updateSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
		handleSuggestionClick;
  };

  const handleSuggestionClick = (id: string, suggestion: string) => {
    setSearchInput(suggestion); 
  };
	const debouncedFunction = debounce(updateSearchInput, 1500, true);
  const filteredList = suggestionsList.filter((eachItem) => {
    const text = eachItem.name.toLowerCase();
    return text.includes(searchInput);

  });

  setTimeout(() => {
    if(tab){
      initMap()
    }
  },1000);
  
    return (
      <div >
        <div >
          <div >
            <input
              type="search"
              className={styles.input}
              value={searchInput}
              onChange={debouncedFunction}
							src='@/features/try/svg.svg'
							placeholder="vendor quick search"
            />
          </div>
         
          <div className={styles.ul}>
            {filteredList.map(eachItem => (
              <>
              <TabButton
                key={eachItem.id}
                onClick={() =>
                  tab === "Auto" && eachItem.name
                    ? selectTab("")
                    : selectTab(`Auto${eachItem.name}`)
                }
              >
                {/* You can display the eachItem name, image, or any other information you need */}
      
                <Image
                  className={styles.img}
                  src={eachItem.src}
                  alt={eachItem.name}
                  width={500}
                  height={500}
                  unoptimized
                />
                <div className={styles.sname}>{eachItem.name}{" "} Vendors</div>
                
              </TabButton>
              <div className={styles.ServiceHolder}>
                {tab === `Auto${eachItem.name}` && (
                  <div className={styles.RCover}>
                    <div className={styles.closeContainer}>
                    <div className={styles.closeIn} onClick={() => selectTab("Automative")}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24"className={styles.svgClose}
                      fill="currentcolor"
                      stroke="currentcolor"><polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"/></svg>
                </div>
                </div>
                <ServiceHolder Vendors={eachItem} />
                </div>
                )}
              </div>
            </>
            ))}
          </div>
        </div>
      </div>
    )
  }


export default SearchComponentMain