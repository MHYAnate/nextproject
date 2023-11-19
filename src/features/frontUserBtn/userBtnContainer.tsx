import { useState, useTransition } from "react";
import { TabButton } from "./btn";
import Existing from "./existing";
import New from "./new";
import styles from "./styles.module.css";

export default function UserBtn() {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	return (
		<div className={styles.coverDiv}>
			<div className={styles.caseContainer}>
				<div className={ tab === "Existing" ?styles.cancel:styles.cancelC} onClick={() => selectTab("")}>
					{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Isolation_Mode"
						data-name="Isolation Mode"
						viewBox="0 0 24 24"
						className={styles.cancelSvg}
						fill="currentcolor"
						stroke="currentcolor"
					>
						<polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061" />
					</svg>
				</div>
        <div className={ tab === "New" ?styles.cancel:styles.cancelC} onClick={() => selectTab("")}>
					{" "}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Isolation_Mode"
						data-name="Isolation Mode"
						viewBox="0 0 24 24"
						className={styles.cancelSvg}
						fill="currentcolor"
						stroke="currentcolor"
					>
						<polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061" />
					</svg>
				</div>
				<div className={styles.case}>{tab === "Existing" && <Existing />}</div>
				<div className={styles.case}>{tab === "New" && <New />}</div>
			</div>
			<div className={styles.userBtnContainer}>
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
							Log In
						</span>
						<span
							className={
								tab === "Existing" ? styles.tabSpan2C : styles.tabSpan1C
							}
						>
							cancel
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
							Sign Up
						</span>
						<span
							className={tab === "New" ? styles.tabSpan2C : styles.tabSpan1C}
						>
							cancel
						</span>
					</TabButton>
				</div>
			</div>
		</div>
	);
}
