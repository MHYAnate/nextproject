import React, { memo } from "react";
import styles from "./styles.module.css";
import Other from "../other/other";
interface post {
  index: number;
}
const ContactUs = memo(function PostsTab() {
	let items = [];
	for (let i = 0; i < 1; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }


	return <ul className={styles.contactUs}>{items}</ul>;
});

const SlowPost: React.FC<post> = () => {
	let startTime = performance.now();

	while (performance.now() - startTime < 500) {
		// Do nothing for 500 ms per item to emulate extremely slow code
	}

	return (
		
		<li className={styles.contactUsIn}>
			<Other />
			
      
		</li>
		
	);
};

export default ContactUs;
