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
					<span>E-Commerce platform</span>
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
							<path d="m13-.004H5C2.243-.004,0,2.239,0,4.996v12.854c0,.793.435,1.519,1.134,1.894.318.171.667.255,1.015.255.416,0,.831-.121,1.191-.36l3.963-2.643h5.697c2.757,0,5-2.243,5-5v-7C18,2.239,15.757-.004,13-.004Zm11,9v12.854c0,.793-.435,1.519-1.134,1.894-.318.171-.667.255-1.015.256-.416,0-.831-.121-1.19-.36l-3.964-2.644h-5.697c-1.45,0-2.747-.631-3.661-1.62l.569-.38h5.092c3.859,0,7-3.141,7-7v-7c0-.308-.027-.608-.065-.906,2.311.44,4.065,2.469,4.065,4.906Z"/>
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
