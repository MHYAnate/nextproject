import { useState, useTransition } from "react";
import { TabNavBtn } from "./TabNavBtn";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { Notification } from "@/features/database/notifiaction";
import { Messages } from "@/features/database/messages";
import styles from "./styles.module.css";
import SearchComponent from "@/features/try/try";
import MenuList from "./menu";
import SearchComponentMain from "./searchComponent";
import { Vendors } from "@/features/database/serviceData";import {initMap} from "@/features/burgerMenu/mobile/googleMapApi";



export default function TabContainer() {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");

	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}
	const notifyBadge = useAppSelector((state) => state.notification.value);
	const msgBadge = useAppSelector((state) => state.msg.value);

	setTimeout(() => {
		if(tab){
			initMap()
		}
	},1000);

	return (
		<div className={styles.MobileNavTabContainer}>
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
				</div>
			</TabNavBtn>
			<TabNavBtn
				isActive={tab === "message"}
				onClick={() =>
					tab === "message" ? selectTab("") : selectTab("message")
				}
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
					<div className={styles.badge}>{msgBadge}</div>
				</div>
			</TabNavBtn>
			<TabNavBtn
				isActive={tab === "ntfction"}
				onClick={() =>
					tab === "ntfction" ? selectTab("") : selectTab("ntfction")
				}
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
								<SearchComponentMain suggestionsList={Vendors} />
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
								<SearchComponent suggestionsList={Messages} />
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
								<SearchComponent suggestionsList={Notification} />
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
