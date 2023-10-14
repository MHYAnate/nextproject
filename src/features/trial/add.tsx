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
	}, [activeIndex, setActiveIndex, Services.length]);

	const inhandleNext = useCallback(() => {
		setInnerActiveIndex((prevIndex) =>
			prevIndex === Services[activeIndex].services.length - 1
				? 0
				: prevIndex + 1
		);
	}, [inneractiveIndex, setInnerActiveIndex, Services, activeIndex]);

	const intervalTime = useMemo(() => {
		return 5000 * Services[activeIndex].services.length - 1;
	}, [activeIndex, Services]);

	const inIntervalTime = useMemo(() => {
		return 5000;
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
				<div className={styles.cardCategory}>
					<div className={styles.titleTop}>
						<span className={styles.titleTopSpan}>
							{Services[activeIndex].category} Services such as
						</span>
					</div>
					<div className={styles.bodyCardCategory}>
						<div className={styles.imgCover1}>
							<Image
								className={styles.imgCat}
								alt="Picture of the author"
								width={100}
								height={100}
								src={Services[activeIndex].src}
								priority={true}
								unoptimized
							/>
						</div>
						<div className={styles.inBodyCardCategory}>
							<div className={Services[activeIndex].category === Services[0].category?styles.highLighted:styles.spanCategory}>
								<span className={styles.catSpan}>
									{" "}
									{Services[0].category}
								</span>
							</div>
							<div className={Services[activeIndex].category === Services[1].category?styles.highLighted:styles.spanCategory}>
								<span className={styles.catSpan}>
									{" "}
									{Services[1].category}
								</span>
							</div>
							<div className={Services[activeIndex].category === Services[2].category?styles.highLighted:styles.spanCategory}>
								<span className={styles.catSpan}>
									{" "}
									{Services[2].category}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.cardLCover}>
					<div className={styles.cardL}>
						<div className={styles.titleCover}>
							<span className={styles.titleSpan1}>
								{Services[activeIndex]?.services[inneractiveIndex]?.name}{" "}
								Service
							</span>
						</div>
						<div className={styles.carouselImageCover}>
							<div className={styles.imgCover2}>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
InCarousel.displayName = "InCarousel";
export default InCarousel;