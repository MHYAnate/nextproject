import React, { memo } from "react";
import { useState, useTransition } from "react";
import { TabButton } from "./inBtn";
import styles from "./styles.module.css";
import ExistingServiceProvider from "./existingServiceProvider";
import ExistingClient from "./existingClient";

interface post {
	index: number;
}
const Existing = memo(function Existing() {
	let items = [];

	for (let i = 0; i < 1; i++) {
		items.push(<SlowPost key={i} index={i} />);
	}
	return <ul className={styles.existingUser}>{items}</ul>;
});

const SlowPost: React.FC<post> = () => {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	let startTime = performance.now();

	while (performance.now() - startTime < 100) {
		// Do nothing for 500 ms per item to emulate extremely slow code
	}

	return (
		<>
			<div className={styles.innerCase}>
				{tab === "Existing" && (
					<div>
						<div className={styles.close} onClick={() => selectTab("")}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24"className={styles.svg}
									fill="currentcolor"
                  stroke="currentcolor"><polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"/></svg>
						</div>
						<ExistingServiceProvider />
					</div>
				)}
			</div>
			<div className={styles.innerCase}>
				{tab === "New" && (
					<div>
						<div className={styles.close} onClick={() => selectTab("")}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24"className={styles.svg}
								fill="currentcolor"
								stroke="currentcolor"><polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061"/></svg>
						</div>
						<ExistingClient />
					</div>
				)}
			</div>
			<li className={styles.existingUserIn}>
				<div
					className={
						tab === "Existing" ? styles.userBtnWrapper1 : styles.userBtnWrapper2In
					}
				>
					<TabButton
						onClick={() =>
							tab === "Existing" ? selectTab("") : selectTab("Existing")
						}
					>
						<span
							className={tab === "Existing" ? styles.tabSpan2N : styles.tabSpan1N}
						>
							Log in as Vendor
						</span>
					</TabButton>
				</div>
				<div
					className={
						tab === "New" ? styles.userBtnWrapper1 : styles.userBtnWrapper2In
					}
				>
					<TabButton
						onClick={() => (tab === "New" ? selectTab("") : selectTab("New"))}
					>
						<span className={tab === "New" ? styles.tabSpan2N : styles.tabSpan1N}>
						Log in as Client
						</span>
					</TabButton>
				</div>
			</li>
		</>
	);
};

export default Existing;
