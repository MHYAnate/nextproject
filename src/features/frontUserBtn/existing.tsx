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

	while (performance.now() - startTime < 500) {
		// Do nothing for 500 ms per item to emulate extremely slow code
	}

	return (
		<>
			<div className={styles.innerCase}>
				{tab === "Existing" && (
					<div>
						<div className={styles.close} onClick={() => selectTab("")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								className={styles.svg}
								fill="red"
								stroke="red"
								data-name="Layer 1"
							>
								<path d="m24 5a3 3 0 0 0 -3-3h-13.242l-7.758 10 7.758 10h13.242a3 3 0 0 0 3-3zm-6.041 9.543-1.414 1.414-2.545-2.543-2.543 2.543-1.414-1.414 2.543-2.543-2.543-2.543 1.414-1.414 2.543 2.543 2.543-2.543 1.414 1.414-2.543 2.543z" />
							</svg>
						</div>
						<ExistingServiceProvider />
					</div>
				)}
			</div>
			<div className={styles.innerCase}>
				{tab === "New" && (
					<div>
						<div className={styles.close} onClick={() => selectTab("")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="Layer_1"
								className={styles.svg}
								fill="red"
								stroke="red"
								data-name="Layer 1"
							>
								<path d="m24 5a3 3 0 0 0 -3-3h-13.242l-7.758 10 7.758 10h13.242a3 3 0 0 0 3-3zm-6.041 9.543-1.414 1.414-2.545-2.543-2.543 2.543-1.414-1.414 2.543-2.543-2.543-2.543 1.414-1.414 2.543 2.543 2.543-2.543 1.414 1.414-2.543 2.543z" />
							</svg>
						</div>
						<ExistingClient />
					</div>
				)}
			</div>
			<li className={styles.existingUserIn}>
				<div
					className={
						tab === "Existing" ? styles.userBtnWrapper1 : styles.userBtnWrapper2
					}
				>
					<TabButton
						onClick={() =>
							tab === "Existing" ? selectTab("") : selectTab("Existing")
						}
					>
						<span
							className={tab === "Existing" ? styles.tabSpan2 : styles.tabSpan1}
						>
							Vendor
						</span>
					</TabButton>
				</div>
				<div
					className={
						tab === "New" ? styles.userBtnWrapper1 : styles.userBtnWrapper2
					}
				>
					<TabButton
						onClick={() => (tab === "New" ? selectTab("") : selectTab("New"))}
					>
						<span className={tab === "New" ? styles.tabSpan2 : styles.tabSpan1}>
							Client
						</span>
					</TabButton>
				</div>
			</li>
		</>
	);
};

export default Existing;
