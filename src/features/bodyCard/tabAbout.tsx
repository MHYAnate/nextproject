import { useState, useTransition } from "react";
import { TabButton } from "./inTabButton";
import styles from "./styles.module.css";
import AboutUsRender from "./about";

export const AboutUsTab = () => {
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
				onClick={() =>
					tab === "AboutUs" ? selectTab("") : selectTab("AboutUs")
				}
			>
				<div className={styles.tabBtnP}>
					<div className={styles.tabCoverP}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Layer_1"
							data-name="Layer 1"
							viewBox="0 0 24 24"
							className={styles.svg}
              fill="green"
              stroke="green"
						>
							<path d="M14,7.25A1.75,1.75,0,1,1,12.25,5.5,1.751,1.751,0,0,1,14,7.25ZM24,12A12,12,0,1,0,12,24H24Zm-3,0v9H12a9,9,0,1,1,9-9Zm-7,.5A2.5,2.5,0,0,0,11.5,10H9v3h2v5h3Z" />
						</svg>
						<hr />
						<p className={styles.aims}> </p>
					</div>
				</div>
			</TabButton>
			<hr />
			{tab === "AboutUs" && (
				<div>
					<div className={styles.close} onClick={() => selectTab("")}>
          <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24"className={styles.svg}
								fill="currentcolor"
								stroke="currentcolor"><polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"/></svg>
					</div>
					<AboutUsRender />
				</div>
			)}
		</>
	);
};
