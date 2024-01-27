import { initialState } from "@/lib/features/counter/counterSlice";
import styles from "./styles.module.css";
import Image from "next/image";
import React, { ChangeEvent, useState,useTransition,KeyboardEvent } from "react";
import { Vendors } from "@/features/database/mobileServiceData";
import ServiceHolder from "./serviceHolder";
import { TabButton } from "./btnMain";


export type searchprop = {
  onSearch: (value:string)=> void;
}

const Search = (props:searchprop) => {

  const [searchValue, setSearchValue] = useState('')

  const HandleSearch =(value:string)=>{
    setSearchValue(value)
  }

  const{onSearch}=props
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("");
  const [value, setValue] = useState('Enter Search.....')
  
  function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

  const SearchHandler = (event:ChangeEvent<HTMLInputElement>)=>{
    const{target}= event
    setValue(target.value)
  }

  const HandleKeyDown = (event:KeyboardEvent<HTMLInputElement>)=>{
     if (event.key === 'enter'){
      onSearch(value)
     }
  }

  const Searched = Vendors.find(
		(category) => category.name == value
	);
  const filteredList = Vendors.filter((eachItem) => {
    const text = eachItem.name.toLowerCase();
    return text.includes(value);
  });

  function renderSearchedVendor() {
		if (!Searched) {
			// Return a message or component indicating that the "Maintenance" category is not found
			return null;
		}

		
		return (
			<>
      
              <TabButton
                key={Searched.id}
                onClick={() =>
                  tab === "Auto" && Searched.name
                    ? selectTab("")
                    : selectTab(`Auto${Searched.name}`)
                }
              >
                {/* You can display the Searched name, image, or any other information you need */}
      
                <Image
                  className={styles.img}
                  src={Searched.src}
                  alt={Searched.name}
                  width={500}
                  height={500}
                  unoptimized
                />
                <div className={styles.sname}>{Searched.name}{" "} Vendors</div>
                
              </TabButton>
              <div className={styles.ServiceHolder}>
                {tab === `Auto${Searched.name}` && (
                  <div className={styles.RCover}>
                    <div className={styles.closeContainer}>
                    <div className={styles.closeIn} onClick={() => selectTab("Automative")}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24"className={styles.svgClose}
                      fill="currentcolor"
                      stroke="currentcolor"><polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"/></svg>
                </div>
                </div>
                <ServiceHolder Vendors={Searched} />
                </div>
                )}
              </div>
            </>
		);
	}
  return(
    <div>
      <input
      placeholder="vendor quick search"
      type={'search'}
      name={'search'}
      onChange={SearchHandler}
      onKeyDown={HandleKeyDown}
      className={styles.input}
      />
      <div>
      
      <div>{renderSearchedVendor()}</div>

    </div>
  
    </div>
  )
}

export default function SearchComponent() {
  const [searchValue, setSearchValue] = useState('')
  const HandleSearch =(value:string)=>{
    setSearchValue(value)
  }

  return(
    <div>
      <Search onSearch={HandleSearch}/>
    </div>
  )
}