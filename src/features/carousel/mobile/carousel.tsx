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

	const handleNext = useCallback(() => {
		setActiveIndex((prevIndex) =>
			prevIndex === Services.length - 1 ? 0 : prevIndex + 1
		);
	}, [setActiveIndex, Services.length]);

	const inhandleNext = useCallback(() => {
		setInnerActiveIndex((prevIndex) =>
			prevIndex === Services[activeIndex].services.length - 1
				? 0
				: prevIndex + 1
		);
	}, [setInnerActiveIndex, Services, activeIndex]);

	const intervalTime = useMemo(() => {
		return 10000 * Services[activeIndex].services.length - 1;
	}, [activeIndex, Services]);

	const inIntervalTime = useMemo(() => {
		return 10000;
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
	}, [inIntervalTime, inhandleNext, serviceTitle, serviceImage]);

	return (
		<div className={styles.parent}>
			<div className={styles.mainCard}>
        <div className={styles.topTitleContainer}>
          <p className={styles.topTitle}>Categories</p>
          </div>
        
				<div className={styles.titleBodyCategorySelector}>
					<div
						onClick={() => setActiveIndex(0)}
						className={
							Services[activeIndex].category === Services[0].category
								? styles.highLighted
								: styles.unHighLighted
						}
					>
						<span className={styles.catSpan}> {Services[0].category}</span>
					</div>
					<div
						onClick={() => setActiveIndex(1)}
						className={
							Services[activeIndex].category === Services[1].category
								? styles.highLighted
								: styles.unHighLighted
						}
					>
						<span className={styles.catSpan}> {Services[1].category}</span>
					</div>
					<div
						onClick={() => setActiveIndex(2)}
						className={
							Services[activeIndex].category === Services[2].category
								? styles.highLighted
								: styles.unHighLighted
						}
					>
						<span className={styles.catSpan}> {Services[2].category}</span>
					</div>
				</div>
				
				<div className={styles.mainBody}>
					<div className={styles.latestContainer}>
					 <p>Latest</p>
					</div>

					<div className={styles.carouselImageCover}>
						<div className={styles.slider}>
							<Image
								object-fit="cover"
								className={styles.imgSlide}
								alt="Picture of the author"
								width={100}
								height={100}
								src={Services[activeIndex]?.services[inneractiveIndex]?.src}
								priority={true}
								unoptimized
							/>
						</div>
            <div className={styles.serviceName}>
					<span className={styles.titleTopSpan}>
						{Services[activeIndex]?.services[inneractiveIndex]?.name} Services
					</span>
				</div>
					</div>
				</div>
			</div>
		</div>
	);
});
InCarousel.displayName = "InCarousel";
export default InCarousel;
