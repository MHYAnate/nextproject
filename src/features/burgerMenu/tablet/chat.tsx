import React, { useState, memo, useTransition } from "react";
import Image from "next/image";
import styles from "./styles.module.css";



const ChattingRender= memo(() => {
	let items = [];

	for (let i = 1; i < 2; i++) {
		items.push(<SlowPost key={i}  />);
	}

	return <ul className={styles.lineContainer}>{items}</ul>;
});

const SlowPost = () => {
	let startTime = performance.now();

	while (performance.now() - startTime < 1) {
		// Do nothing for 1ms per item to emulate extremely slow code
	}

	return (
		<>
			
			<div className={styles.intabCover}>
				<Image
					className={styles.imgTC}
					src={"/platform/chat.jpg"}
					alt={"chat"}
					width={500}
					height={500}
					unoptimized
				/>
				<p className={styles.inAims}> Real time Community</p>
			<hr />
			</div>
		</>
	);
};

ChattingRender.displayName = "ChattingRender";

export default ChattingRender;
