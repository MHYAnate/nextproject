import { useState, useTransition } from "react";
import { TabButton } from "./inTabButton";
import styles from "./styles.module.css";
import ContactUsRender from "./contact";

export const ContactUsTab = () => {
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
					tab === "ContactUs" ? selectTab("") : selectTab("ContactUs")
				}
			>
				<div className={styles.tabBtnP}>
					<div className={styles.tabCoverP}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Layer_1"
							data-name="Layer 1"
							viewBox="0 0 24 24"
							className={styles.svgP}
							fill="dodgerblue"
							stroke="dodgerblue"
						>
							<path d="M23,11a1,1,0,0,1-1-1,8.008,8.008,0,0,0-8-8,1,1,0,0,1,0-2A10.011,10.011,0,0,1,24,10,1,1,0,0,1,23,11Zm-3-1a6,6,0,0,0-6-6,1,1,0,1,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0Zm2.183,12.164.91-1.049a3.1,3.1,0,0,0,0-4.377c-.031-.031-2.437-1.882-2.437-1.882a3.1,3.1,0,0,0-4.281.006l-1.906,1.606A12.784,12.784,0,0,1,7.537,9.524l1.6-1.9a3.1,3.1,0,0,0,.007-4.282S7.291.939,7.26.908A3.082,3.082,0,0,0,2.934.862l-1.15,1C-5.01,9.744,9.62,24.261,17.762,24A6.155,6.155,0,0,0,22.183,22.164Z" />
						</svg>
						<hr />
						<p className={styles.aims}> </p>
					</div>
				</div>
			</TabButton>
			<hr />
			{tab === "ContactUs" && (
				<div>
					<div className={styles.close} onClick={() => selectTab("")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Isolation_Mode"
							data-name="Isolation Mode"
							viewBox="0 0 24 24"
							className={styles.svg}
							fill="currentcolor"
							stroke="currentcolor"
						>
							<polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061" />
						</svg>
					</div>
					<ContactUsRender />
				</div>
			)}
		</>
	);
};
