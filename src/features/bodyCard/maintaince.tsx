import React, { useState, memo, useTransition } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
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

const MaintainaceRender: React.FC<CarouselProps> = memo(() => {
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
					src={Services[1].src}
					alt={Services[1].category}
					width={500}
					height={500}
					unoptimized
				/>
				<p className={styles.aims}> {Services[1].category} Vendors</p>
			<hr />
			</div>
		</>
	);
};

MaintainaceRender.displayName = "MaintainaceRender";

export default MaintainaceRender;
