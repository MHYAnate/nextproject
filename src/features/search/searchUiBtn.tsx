import { useState, useTransition } from "react";
import { TabButton } from "./btn";
import SearchUi from "./searchUi";
import styles from "./styles.module.css";

export default function SearchUiBtn() {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	return (
		<>
			<div className={styles.searchUiContainer}>
				<div className={styles.contact}>
					{tab === "searchUi" && <SearchUi />}
				</div>
				<hr />
				<TabButton
					onClick={() =>
						tab === "searchUi" ? selectTab("") : selectTab("searchUi")
					}
				>
					<div
						className={tab === "searchUi" ? styles.conbtnClick : styles.conbtn}
					>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"
							className={styles.svg1}><g id="_01_align_center" data-name="01 align center"><path d="M24,22.586l-6.262-6.262a10.016,10.016,0,1,0-1.414,1.414L22.586,24ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"/></g></svg>
					</div>
				</TabButton>
			</div>
		</>
	);
}