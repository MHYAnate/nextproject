import {Component} from 'react'
import SuggestionItem from './catch'
import{ useState} from "react";
import styles from "./styles.module.css";

interface props {
	suggestionsList:any[],
}

const SearchComponent : React.FC<props> = ({ suggestionsList}) => {
	
	const [searchInput, setSearchInput] = useState(""); 
	
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
							placeholder="Search"
            />
          </div>
          <ul>
            {filteredList.map(eachItem => (
              <SuggestionItem
                eachItem={eachItem}
                key={eachItem.id}
								fun={(eachItem.id, eachItem.suggestion)}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }


export default SearchComponent