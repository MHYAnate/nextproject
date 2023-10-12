import React from "react";
import styles from "./styles.module.css";

const Other = () => {
	return (
		<div className={styles.contain}>
			<h1 className={styles.header}>Linkup and get access to our robust</h1>
			<ul className={styles.ulClass}>
				<li className={styles.liCover}>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Layer_1"
							data-name="Layer 1"
							viewBox="0 0 24 24"
							className={styles.eSvg}
							stroke="gold"
							fill="gold"
						>
							<path d="M9,4c0-2.209,3.358-4,7.5-4s7.5,1.791,7.5,4-3.358,4-7.5,4-7.5-1.791-7.5-4Zm7.5,6c-1.027,0-2.001-.115-2.891-.315-1.359-1.019-3.586-1.685-6.109-1.685-4.142,0-7.5,1.791-7.5,4s3.358,4,7.5,4,7.5-1.791,7.5-4c0-.029-.007-.057-.008-.086h.008v2.086c0,2.209-3.358,4-7.5,4S0,16.209,0,14v2c0,2.209,3.358,4,7.5,4s7.5-1.791,7.5-4v2c0,2.209-3.358,4-7.5,4S0,20.209,0,18v2c0,2.209,3.358,4,7.5,4s7.5-1.791,7.5-4v-.08c.485,.052,.986,.08,1.5,.08,4.142,0,7.5-1.791,7.5-4v-2c0,2.119-3.092,3.849-7,3.987v-2c3.908-.138,7-1.867,7-3.987v-2c0,2.119-3.092,3.849-7,3.987v-2c3.908-.138,7-1.867,7-3.987v-2c0,2.209-3.358,4-7.5,4Z" />
						</svg>
					</div>
					<span>E-Commerce platform abc</span>
				</li>
				<p className={styles.paragraph}>
					ILUD E-Commerce platform provide Users the opportunity to seamlessly
					lease, buy and sell goods at their disposal to whom they will and when
					they will
				</p>
				<hr />
				<li className={styles.liCover}>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Layer_1"
							data-name="Layer 1"
							viewBox="0 0 24 24"
							className={styles.chatSvg}
							fill="dodgerblue"
							stroke="dodgerblue"
						>
							<path d="m21,4h-3v-1c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v14.854c0,.794.435,1.52,1.134,1.894.318.171.667.255,1.015.255.416,0,.831-.121,1.19-.36l2.661-1.774v3.131h10.697l3.964,2.643c.36.24.774.361,1.19.361.348,0,.696-.085,1.015-.256.7-.374,1.134-1.1,1.134-1.894V7c0-1.654-1.346-3-3-3ZM2.23,17.979c-.019.012-.075.048-.152.007-.079-.042-.079-.109-.079-.131V3c0-.552.449-1,1-1h12c.551,0,1,.448,1,1v12H6.697l-4.467,2.979Zm19.77,3.876c0,.021,0,.089-.079.131-.079.041-.133.005-.151-.007l-4.467-2.979h-9.303v-2h10V6h3c.551,0,1,.448,1,1v14.854Z" />
						</svg>
					</div>
					<span>E-Community chatroom</span>
				</li>
				<p className={styles.paragraph}>
					ILUD E-Community chatroom platform provide Users the opportunity to
					seamlessly update and stay up to date at real-time on those
					socio-economic matters that matters to our Users around about them
				</p>
				<hr />
			</ul>
		</div>
	);
};

export default Other;
