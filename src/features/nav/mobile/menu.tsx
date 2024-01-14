import styles from "./styles.module.css";
import { TabButton } from "./tabBtn";
import { useState, useTransition } from "react";
import About from "./about";
import Contact from "./contact";
import LogIn from "./logIn";

export default function MenuList() {
	const [tab, setTab] = useState("");

	const AboutUS = () => {
		return (
			<div className={styles.innerMenu}>
				<div className={styles.innerWrapper}>
        <p>AboutUs</p>
					<div className={styles.close} onClick={() => setTab("")}>
						close
					</div>
				</div>
        <About />
			</div>
		);
	};

	const ContactUS = () => {
		return (
			<div className={styles.innerMenu}>
				<div className={styles.innerWrapper}>
          <p>ContactUs</p>
					<div className={styles.close} onClick={() => setTab("")}>
						close
					</div>
				</div>
        <Contact />
			</div>
		);
	};
	const Log = () => {
		return (
			<div className={styles.innerMenu}>
				<div className={styles.innerWrapper}>
        <p>Log Page</p>
					<div className={styles.close} onClick={() => setTab("")}>
						close
					</div>
				</div>
        <LogIn />
			</div>
		);
	};

	return (
		<div className={styles.menu}>
			<div className={styles.menuPop}>
				<TabButton
					onClick={() => (tab === "about" ? setTab("") : setTab("about"))}
				>
					About Us
				</TabButton>
				<TabButton
					onClick={() => (tab === "contact" ? setTab("") : setTab("contact"))}
				>
					Contact US
				</TabButton>
				<TabButton
					onClick={() => (tab === "logIn" ? setTab("") : setTab("logIn"))}
				>
					Sign Up | Log In
				</TabButton>
			</div>
			<div className={styles.menulist}>
				{tab === "about" && <AboutUS />}
				{tab === "contact" && <ContactUS />}
				{tab === "logIn" && <Log />}
			</div>
		</div>
	);
}
