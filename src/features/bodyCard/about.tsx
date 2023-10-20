import React, { useState, memo, useTransition } from "react";
import styles from "./styles.module.css";
import Ilud from "../ilud/ilud";



const AboutUsRender= memo(() => {
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
				<Ilud/>
				<p className={styles.aims}>aims at seamless linkages</p>
			<hr />
			</div>
		</>
	);
};

AboutUsRender.displayName = "AboutUsRender";

export default AboutUsRender;
