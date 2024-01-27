import { useState, useTransition } from "react";
import { TabButton } from "./tabBtn";
import MenuList from "./menu";
import styles from "./styles.module.css";

export const MenuTab = () => {
	const [tab, setTab] = useState("");

	return (
		<>
			<TabButton
				onClick={() => (tab === "Notice" ? setTab("") : setTab("Notice"))}
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
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>
			</TabButton>
			<hr />
			{tab === "Notice" && (
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
					<MenuList />
				</div>
			)}
		</>
	);
};
