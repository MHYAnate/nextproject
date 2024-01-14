import TabContainer from "./TabNav";
import {MenuTab} from "./menuTab";
import {MessageTab} from "./messageTab";

import {NotificationTab} from "./notificationsTab";
import {SearchTab} from "./searchTab";
import styles from "./styles.module.css";

export default function MobileNavTab() {
	return( 
  <div className={styles.navTab}>
    <TabContainer/>
  </div>
  );
}
