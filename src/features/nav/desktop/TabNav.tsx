import { useState, useTransition } from "react";
import { TabNavBtn } from "./TabNavBtn";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { Notification } from "@/features/database/notifiaction";
import { Messages } from "@/features/database/messages";
import styles from "./styles.module.css";
import SearchComponent from "./searchComponent";
import MenuList from "./menu";
import SearchComponentMain from "./searchComponentMain";
import { Vendors } from "@/features/database/serviceData";

import {initMap} from "@/features/burgerMenu/mobile/googleMapApi";
import { TabButton } from "./tabBtn";
import About from "./about";
import Contact from "./contact";
import LogIn from "./desktopLogin";





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
				isActive={tab === "about"}
				onClick={() => (tab === "about" ? selectTab("") : selectTab("about"))}>
				About Us
			</TabNavBtn>
			<TabNavBtn
				isActive={tab === "contact"}
				onClick={() => (tab === "contact" ? selectTab("") : selectTab("contact"))}>
				Contact US
			</TabNavBtn>
			<TabNavBtn
				isActive={tab === "logIn"}
				onClick={() => (tab === "logIn" ? selectTab("") : selectTab("logIn"))}>
				<p className={styles.signColoring}>Sign Up |</p> Log In
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
			{tab === "about" && (<div className={styles.displayMenu}><About  /></div>)}
				{tab === "contact" &&  (<div className={styles.displayMenu}><Contact /></div>)}
				{tab === "logIn" && (<div className={styles.displayMenu}><LogIn /></div>)}
		</div>
	);
}
