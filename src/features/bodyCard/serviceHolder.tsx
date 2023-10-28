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
						className={styles.imgITC}
						src={props.services.src}
						alt={props.services.name}
						width={500}
						height={500}
						unoptimized
					/>
				</div>
				<div className={styles.sHName}>
				{props.services.name} {" "} Vendors
				</div>
			</div>
		</div>
	);
};
ServiceHolder.displayName = "ServiceHolder";
export default ServiceHolder;
