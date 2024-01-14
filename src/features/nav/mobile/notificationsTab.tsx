import React, { useState, memo } from "react";
import { TabButton } from "./tabBtn";
import { TabB } from "./tb";
import styles from "./styles.module.css";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { Notification } from "@/features/database/notifiaction";
import Image from "next/image";
import MsgHolder from "./msgHolder";

interface post {
	index: number;
	Notification: {
		id: number;
		category: string;
		src: string;
		Notification: string;
		TimeStamp: string;
	}[];
}

const Ntftions: React.FC<post> = ({ Notification }) => {
	
	function RenderNtfctionMsg() {
		const [tabs, setTabs] = useState("");
		if (!Notification) {
			// Return a message or component indicating that the "Maintenance" category is not found
			return null;
		}

		return Notification.map((NtfctionM) => (
			<div key={NtfctionM.id} className={styles.tbCover}>
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

	return <ul>{RenderNtfctionMsg()}</ul>;
};

export const NotificationTab = () => {
	const dispatch = useAppDispatch();
	const [tab, setTab] = useState("");
	const notifyBadge = useAppSelector((state) => state.notification.value);

	const Notifications = memo(function PostsTab({
		Notifications,
	}: {
		Notifications: post["Notification"];
	}) {
		let items = [];

		for (let i = 0; i < 1; i++) {
			items.push(<Ntftions Notification={Notification} key={i} index={i} />);
		}

		return <ul className={styles.noticeCover}>{items}</ul>;
	});

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
							d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
						/>
					</svg>
					<div className={styles.badge}>{notifyBadge}</div>
				</div>
			</TabButton>
			<hr />
			{tab === "Notice" && (
				<div className={styles.displayNotice}>
					<div className={styles.setterBackground}>
						<div className={styles.background}>
							<div className={styles.header}>
								<p>Notifications</p>
							</div>
							<div className={styles.popHolder}>
								<Notifications Notifications={Notification} />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
