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
							className={styles.svg}
              fill="dodgerblue"
              stroke="dodgerblue"
						>
							<path d="M8,20H0V3C0,1.346,1.346,0,3,0h2c1.654,0,3,1.346,3,3V20ZM21,2H9.899c.066,.323,.101,.658,.101,1V22H0v2H24V5c0-1.654-1.346-3-3-3ZM13,20c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm0-4c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm0-4c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm4,8c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm0-4c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm0-4c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm4,8c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm0-4c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm0-4c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm1-5h-7v-3h6c.552,0,1,.448,1,1v2Z" />
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
					<svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24"className={styles.svg}
								fill="currentcolor"
								stroke="currentcolor"><polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"/></svg>
					</div>
					<ContactUsRender />
				</div>
			)}
		</>
	);
};
