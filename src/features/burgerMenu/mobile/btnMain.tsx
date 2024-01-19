import styles from "./styles.module.css";

interface TabButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
  key:number;
}

export const TabButton: React.FC<TabButtonProps>=({ children, isActive, onClick, key })=> {
  // if (isActive) {
  //   return <b onClick={onClick}>{children}</b>
  // }
  return (
    <button className={styles.clickFinal} onClick={() => {
      onClick();
    }}>
      {children}
    </button>
  )
}