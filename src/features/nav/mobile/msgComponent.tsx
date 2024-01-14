import React, { useState} from "react";
import { TabB } from "./tb";
import Image from "next/image";
import MsgHolder from "./msgHolder";
import styles from "./styles.module.css";

interface post {
	Notification: {
		id: number;
		category: string;
		src: string;
		Notification: string;
		TimeStamp: string;
	}[];
}
export const Ntftions: React.FC<post> = ({ Notification }) => {
	
	function renderNtfctionMsg() {
		const [tabs, setTabs] = useState("");
		if (!Notification) {
			// Return a message or component indicating that the "Maintenance" category is not found
			return null;
		}

		return Notification.map((NtfctionM) => (
			<div className={styles.tbCover}>
				<TabB
					onClick={() =>
						tabs === `${NtfctionM.Notification}`
							? setTabs("")
							: setTabs(`${NtfctionM.Notification}`)
					}
				>
					<li className={styles.renderCover} key={NtfctionM.id}>
						<div className={styles.img}>
							<Image
								className={styles.ntfctImg}
								src={NtfctionM.src}
								alt={NtfctionM.Notification}
								width={500}
								height={500}
								unoptimized
							/>
						</div>
						<div className={styles.renderSubBody}>
							<div className={styles.noticeMsg}>{NtfctionM.Notification}</div>

							<div className={styles.timeStamp}>
								<p>{NtfctionM.TimeStamp}</p>
								<div className={styles.seen}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="green"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="green"
										className={styles.see}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
							</div>
						</div>
					</li>
				</TabB>
				<div>
					{tabs === `${NtfctionM.Notification}` && (
						<div className={styles.displayNoticeIn}>
							<button onClick={() => setTabs("")}>back</button>
							<div className={styles.setterBackground}>
								<div className={styles.background}>
									<div className={styles.header}>
										<p>Notifications</p>
									</div>
									<div className={styles.popHolderIn}>
										<MsgHolder Notification={NtfctionM} />
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		));
	}

	let startTime = performance.now();

	while (performance.now() - startTime < 500) {
		// Do nothing for 500 ms per item to emulate extremely slow code
	}

	return <ul>{renderNtfctionMsg()}</ul>;
};
