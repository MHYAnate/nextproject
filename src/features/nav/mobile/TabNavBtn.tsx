import styles from "./styles.module.css";

interface TabButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
}

export const TabNavBtn: React.FC<TabButtonProps>=({ children, isActive, onClick })=> {
  if (isActive) {
    return <button className={styles.isActive} onClick={onClick}>{children}</button>
  }
  return (
    <button className={styles.inActive} onClick={() => {
      onClick();
    }}>
      {children}
    </button>
  )
}

