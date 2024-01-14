import styles from "./styles.module.css";
import Image from "next/image";

interface SuggestionItemProps {

  eachItem: {
    id: number;
    category: string;
    src: string;
    Notification: string;
    suggestion:string;
    TimeStamp: string;
    messages:string;
  };

  fun: (id: number, suggestion: string) => void;

}

const SuggestionItem: React.FC<SuggestionItemProps> = (props) => {
  
  const {eachItem, fun} = props
  const {id, Notification} = eachItem
 
  const handleSuggestionClick = () => {
    fun(props.eachItem.id, props.eachItem.suggestion);
  };
 
 

  const funcall = () => {
    handleSuggestionClick();
  }

  return (
    <li className={styles.renderCover}>
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
								<p>{eachItem.TimeStamp}</p>
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
  )
}

export default SuggestionItem