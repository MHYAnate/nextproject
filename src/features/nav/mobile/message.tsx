import React, { useState, useCallback } from 'react'
import styles from "./styles.module.css";
import { Notification } from '@/features/database/notifiaction';

import { useAppSelector, useAppDispatch } from '@/lib/hooks'

import { decrement, increment } from '@/lib/features/counter/counterSlice'

interface NotificationProps {
	Notification: {
		id: number;
		category: string;
		src: string;
		Notification: string;
	}[];
}
export const Message = function PostsTab() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  let items = [];
  if(items.length+=1){
    dispatch(increment())
  };

  if(items.length-=1){
    dispatch(decrement())
  };

  for (let i = 0; i < Notification.length; i++) {
    items.push(<SlowPost key={i} Notification={Notification}  />);
  }
  return (
    <ul className="items">
      {items}
    </ul>
  );
}

const  SlowPost: React.FC<NotificationProps> =({Notification})=> {
  let startTime = performance.now();

  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = useCallback(() => {
		setActiveIndex((prevIndex) =>
			prevIndex === Notification.length - 1 ? 0 : prevIndex + 1
		);
	}, [setActiveIndex, Notification.length]);

  return ( 
  <li className="item">
   {Notification[activeIndex].Notification}
  </li>
);
}