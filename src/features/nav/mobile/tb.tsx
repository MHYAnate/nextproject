import styles from "./styles.module.css";

interface TabButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
}

export const TabB: React.FC<TabButtonProps>=({ children, isActive, onClick })=> {
  // if (isActive) {
  //   return <b onClick={onClick}>{children}</b>
  // }
  return (
    <button className={styles.clickIn} onClick={() => {
      onClick();
    }}>
      {children}
    </button>
  )
}