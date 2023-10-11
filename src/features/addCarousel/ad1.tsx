import React, { useState, useEffect, useMemo, memo, useCallback } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

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

const InCarousel: React.FC<CarouselProps> = memo(({ Services }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [inneractiveIndex, setInnerActiveIndex] = useState(0);

	const handleNext = useCallback( () => {
		setActiveIndex((prevIndex) =>
			prevIndex === Services.length - 1 ? 0 : prevIndex + 1
		);
	},[activeIndex, setActiveIndex, Services.length]);

	const inhandleNext = useCallback(() => {
		setInnerActiveIndex((prevIndex) =>
			prevIndex === Services[activeIndex].services.length - 1
				? 0
				: prevIndex + 1
		);
	},[inneractiveIndex,setInnerActiveIndex, Services, activeIndex]);

	const intervalTime = useMemo(() => {
		return 1555 * Services[activeIndex].services.length - 1;
	}, [activeIndex, Services]);

	const inIntervalTime = useMemo(() => {
		return 1500;
	}, []);

	const serviceImage = useMemo(() => {
		return Services[activeIndex].services[inneractiveIndex]?.src;
	}, [activeIndex, inneractiveIndex, Services]);

	const serviceTitle = useMemo(() => {
		return Services[activeIndex].services[inneractiveIndex]?.name;
	}, [activeIndex, inneractiveIndex, Services]);

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, intervalTime);

		return () => clearInterval(interval);
	}, [intervalTime, handleNext]);

	useEffect(() => {
		const interval = setInterval(() => {
			inhandleNext();
		}, inIntervalTime);

		return () => clearInterval(interval);
	}, [inIntervalTime,inhandleNext, serviceTitle, serviceImage]);

	return (
		<div className={styles.parent}>
			<div className={styles.mainCard}>
				<div className={styles.cardL}>
					<div>
						<span className={styles.titleSpan}>
							{" "}
							{Services[activeIndex].category}
						</span>
					</div>
					<div className={styles.imgCover1}>
						<Image
							className={styles.imgL}
							alt="Picture of the author"
							width={500}
							height={500}
							src={Services[activeIndex].src}
              priority={true}
              unoptimized
						/>
					</div>
				</div>
				<div className={styles.cardS}>
					<div>
						<span className={styles.titleSpan}>
							{Services[activeIndex]?.services[inneractiveIndex]?.name}{" "}
						</span>
					</div>
					<div className={styles.imgCover}>
						<div className={styles.front}>
							<Image
								object-fit="cover"
								className={styles.img}
								alt="Picture of the author"
								width={100}
								height={100}
								src={Services[activeIndex]?.services[inneractiveIndex]?.src}
                priority={true}
                unoptimized
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
InCarousel.displayName='InCarousel';
export default InCarousel;
