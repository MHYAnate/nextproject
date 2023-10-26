import React, { useState, memo, useTransition } from "react";
import Image from "next/image";
import styles from "./styles.module.css";



const CommerceRender= memo(() => {
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
					className={styles.img}
					src={"/platform/commerce.jpg"}
					alt={"chat"}
					width={500}
					height={500}
					unoptimized
				/>
				<p className={styles.inAims}> Real Time Commerce</p>
			<hr />
			</div>
		</>
	);
};

CommerceRender.displayName = "CommerceRender";

export default CommerceRender;
