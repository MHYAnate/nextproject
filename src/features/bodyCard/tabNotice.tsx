import { useState, useTransition } from "react";
import { TabButton } from  "./inTabButton";
import styles from "./styles.module.css";
import NoticeRender from "./notice";

export const NoticeTab = () => {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	return (
		<>
			<TabButton
				onClick={() => (tab === "Notice" ? selectTab("") : selectTab("Notice"))}
			>
				<div className={styles.tabBtnP}>
					<div className={styles.tabCoverP}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Layer_1"
							data-name="Layer 1"
							viewBox="0 0 24 24"
							fill="gold"
							stroke="gold"
							className={styles.svg}
						>
							<path d="M18.36,21c-.45,1.72-2,3-3.86,3s-3.41-1.28-3.86-3h7.72Zm5.05-2.99l.05-.06c.5-.66,.67-1.5,.46-2.25l-1.65-7.83c-.97-3.46-4.16-5.88-7.77-5.88-3.81,0-7.04,2.58-7.87,6.3l-1.56,7.49c-.17,.79,.02,1.6,.52,2.23,.51,.63,1.26,.99,2.07,.99h13.67c.81,0,1.56-.36,2.07-.99ZM3.12,15.35l1.55-7.47c.84-3.75,3.62-6.57,7.15-7.53-.74-.22-1.52-.36-2.32-.36C5.69,0,2.45,2.58,1.62,6.3L.06,13.78c-.17,.79,.02,1.6,.52,2.23,.51,.63,1.26,.99,2.07,.99h.4c-.08-.54-.06-1.1,.06-1.65Z" />
						</svg>
						<hr />
						<p className={styles.aims}> </p>
					</div>
				</div>
			</TabButton>
			<hr />
			{tab === "Notice" && (
				<div>
					<div className={styles.close} onClick={() => selectTab("")}>
					<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Layer_1"
							className={styles.svg}
							data-name="Layer 1"
						>
							<path d="m24 5a3 3 0 0 0 -3-3h-13.242l-7.758 10 7.758 10h13.242a3 3 0 0 0 3-3zm-6.041 9.543-1.414 1.414-2.545-2.543-2.543 2.543-1.414-1.414 2.543-2.543-2.543-2.543 1.414-1.414 2.543 2.543 2.543-2.543 1.414 1.414-2.543 2.543z" />
						</svg>
					</div>
					<NoticeRender />
				</div>
			)}
		</>
	);
};