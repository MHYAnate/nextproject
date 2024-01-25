import styles from "./styles.module.css";

interface TabButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
  key:number;
}

export const TabButton: React.FC<TabButtonProps>=({ children, isActive, onClick, key })=> {

  return (
    
    <button className={styles.searchedVendorCoverBtn} onClick={() => {
      onClick();
    }}>
      {children}
    </button>
    
  )
}