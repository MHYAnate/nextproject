import styles from "./styles.module.css";
export default function Contact() {
  return (
    <div className={styles.inComDisplay}>
      <p>
        You can find me online here:
      </p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </div>
  );
}