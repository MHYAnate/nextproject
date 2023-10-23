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
						<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="gold"
							stroke="gold"
							className={styles.svgP}><path d="M20.93,7.3c-.34-1.91-2-3.3-3.94-3.3h-.17c.11-.31,.18-.65,.18-1,0-1.65-1.35-3-3-3h-4c-1.65,0-3,1.35-3,3,0,.35,.07,.69,.18,1h-.17c-1.94,0-3.6,1.39-3.94,3.3L.81,19H23.19l-2.27-11.7ZM9,3c0-.55,.45-1,1-1h4c.55,0,1,.45,1,1s-.45,1-1,1h-4c-.55,0-1-.45-1-1Zm-.86,18h7.72c-.45,1.72-2,3-3.86,3s-3.41-1.28-3.86-3Z"/></svg>
						<hr />
						<p className={styles.aims}> </p>
					</div>
				</div>
			</TabButton>
			<hr />
			{tab === "Notice" && (
				<div>
					<div className={styles.close} onClick={() => selectTab("")}>
					<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24"className={styles.svg}
								fill="currentcolor"
								stroke="currentcolor"><polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"/></svg>
					</div>
					<NoticeRender />
				</div>
			)}
		</>
	);
};
