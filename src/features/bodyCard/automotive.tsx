import React, { useState, memo, useTransition } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { TabButton } from "./inBtn";
import { Services } from "../addCarousel/data";

interface CarouselProps {
	Services: {
		id: number;
		category: string;
		src: string;
		services: {
			id: number;
			name: string;
			src: string;
			link: string;
		}[];
	}[];
}

const AutomotiveRender: React.FC<CarouselProps> = memo(() => {
	let items = [];

	for (let i = 1; i < Services.length-1; i++) {
		items.push(<SlowPost key={i} Services={Services} />);
	}

	return <ul className={styles.lineContainer}>{items}</ul>;
});

const SlowPost: React.FC<CarouselProps> = ({ Services }) => {
	let startTime = performance.now();

	while (performance.now() - startTime < 1) {
		// Do nothing for 1ms per item to emulate extremely slow code
	}

	return (
		<>
			
			<div className={styles.intabCover}>
				<Image
					className={styles.img}
					src={Services[0].src}
					alt={Services[0].category}
					width={500}
					height={500}
					unoptimized
				/>
				<p className={styles.aims}> {Services[0].category} Services</p>
			<hr />
			</div>
		</>
	);
};

AutomotiveRender.displayName = "AutomotiveRender";

export default AutomotiveRender;
