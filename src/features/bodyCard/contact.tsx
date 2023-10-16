import React, { useState, memo, useTransition } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { TabButton } from "./inBtn";



const ContactRender = memo(() => {
	let items = [];

	for (let i = 1; i < 1; i++) {
		items.push(<SlowPost key={i}  />);
	}

	return <ul className={styles.lineContainer}>{items}</ul>;
});

const SlowPost= () => {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("");


	function selectTab(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

  let startTime = performance.now();

	while (performance.now() - startTime < 1) {
		// Do nothing for 1ms per item to emulate extremely slow code
	}
  
	return (
		<>
			<p className={styles.aims}>
				{" "}
				Check out the list of highly competitive service
				providers within this dynamic categories
			</p>
			<hr />
			<div className={styles.tabCover}>
				
			</div>
		</>
	);
};

ContactRender.displayName ='ContactRender';

export default ContactRender;
