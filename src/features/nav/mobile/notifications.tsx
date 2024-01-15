import React, { useState, memo  } from 'react'
import styles from "./styles.module.css";
import { Notification } from '@/features/database/notifiaction';


import { useAppDispatch } from '@/lib/hooks'

import { updateCountFromLength } from '@/lib/features/slice/notificationSlice'




interface post {
  index: number;
  Notification: {
    id:number;
    category:string;
    src:string;
    Notification:string;
  }[]
}

const Notifications = memo(function PostsTab({ Notifications }: { Notifications: post['Notification'] }) {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');
  const dispatch = useAppDispatch()

 

  let items = [];


  for (let i = 0; i < Notification.length-1; i++) {
    items.push(<SlowPost Notification={Notification} key={i} index={i} />);
  }

  if(items){
    dispatch(updateCountFromLength(items.length));
  }

   
    
  
  return (
    <ul className="items">
      {items}
    </ul>
  );
});

const  SlowPost: React.FC<post> =({ index, Notification })=> {

  let startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

 
  return ( 
    Notification.map((NtfctionM) => (
			<li className={styles.renderCover} key={NtfctionM.id}>
				{NtfctionM.Notification}
			</li>
		))

  
  
);
}

export default Notifications;