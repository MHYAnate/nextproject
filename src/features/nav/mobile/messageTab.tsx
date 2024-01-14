import { useState, useTransition } from "react";
import { TabButton } from "./tabBtn";
import {Message} from "./message";
import styles from "./styles.module.css";

export const MessageTab = () => {
	const [tab, setTab] = useState("");

	return (
		<>
			<TabButton
				onClick={() => (tab === "Message" ? setTab("") : setTab("Message"))}
			>
				<div className={styles.tabSvg}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className={styles.navSvg}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
						/>
					</svg>
				</div> 
			</TabButton>
			<hr />
			{tab === "Message" && (
				<div>
					<div className={styles.closeP} onClick={() => setTab("")}>
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
					<Message />
				</div>
			)}
		</>
	);
};
