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
							viewBox="0 0 24 24"
							className={styles.svgP}
							fill="green"
							stroke="green"
						>
							<g id="_01_align_center" data-name="01 align center">
								<path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z" />
								<path d="M14,19H12V12H10V10h2a2,2,0,0,1,2,2Z" />
								<circle cx="12" cy="6.5" r="1.5" />
							</g>
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
					<AboutUsRender />
				</div>
			)}
		</>
	);
};
