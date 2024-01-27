import { useState, useTransition } from "react";
import { TabNavBtn } from "./TabNavBtn";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import styles from "./styles.module.css";
import MenuList from "./menu";
import { initMap } from "@/features/burgerMenu/mobile/googleMapApi";
import SearchComponent from "./searching";
import NoticeRender from "./searchNotice";
import { MobileNotificationMessages } from "@/features/database/mobileNoticeMassege";
import MassegesRender from "./searchMsg";

export default function TabContainer() {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}


	setTimeout(() => {
		if (tab) {
			initMap();
		}
	}, 1000);

	return (
		<div className={styles.DesktopNavTabContainer}>
			<TabNavBtn
				isActive={tab === "search"}
				onClick={() => (tab === "search" ? selectTab("") : selectTab("search"))}
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
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
					<p className={styles.searchName}>Quick Search</p>
				</div>
			</TabNavBtn>
			<TabNavBtn
				isActive={tab === "message"}
				onClick={() =>
					tab === "message" ? selectTab("") : selectTab("message")
				}
			>
				Massege
			</TabNavBtn>
			<TabNavBtn
				isActive={tab === "ntfction"}
				onClick={() =>
					tab === "ntfction" ? selectTab("") : selectTab("ntfction")
				}
			>
				Notification
			</TabNavBtn>
			<TabNavBtn
				isActive={tab === "menu"}
				onClick={() => (tab === "menu" ? selectTab("") : selectTab("menu"))}
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
			</TabNavBtn>
			<hr />
			{tab === "search" && (
				<div className={styles.displayNotice}>
					<div className={styles.setterBackground}>
						<div className={styles.background}>
							<div className={styles.header}>
								<p>Search</p>
							</div>
							<div className={styles.popHolderSearch}>
								<SearchComponent />
							</div>
						</div>
					</div>
				</div>
			)}
			{tab === "message" && (
				<div className={styles.displayNotice}>
					<div className={styles.setterBackground}>
						<div className={styles.background}>
							<div className={styles.header}>
								<p>Messages</p>
							</div>
							<div className={styles.popHolder}>
								<MassegesRender
									MobileNotificationMessages={MobileNotificationMessages}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
			{tab === "ntfction" && (
				<div className={styles.displayNotice}>
					<div className={styles.setterBackground}>
						<div className={styles.background}>
							<div className={styles.header}>
								<p>Notifications</p>
							</div>
							<div className={styles.popHolder}>
								<NoticeRender
									MobileNotificationMessages={MobileNotificationMessages}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
			{tab === "menu" && (
				<div className={styles.displayMenu}>
					<MenuList />
				</div>
			)}
		</div>
	);
}
