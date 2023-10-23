import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface CarouselProps {
	services: {
		id: number;
		name: string;
		src: string;
		link: string;
	};
}

const ServiceHolder = (props: CarouselProps) => {
	return (
		<div className={styles.displayFinalService}>
			<div className={styles.inDisplayFinalService}>
				<div className={styles.serviceImg}>
					<Image
						className={styles.img}
						src={props.services.src}
						alt={props.services.name}
						width={500}
						height={500}
						unoptimized
					/>
				</div>
				{props.services.name}
			</div>
		</div>
	);
};
ServiceHolder.displayName = "ServiceHolder";
export default ServiceHolder;
