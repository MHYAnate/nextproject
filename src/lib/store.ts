import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/lib/features/counter/counterSlice'
import notificationReducer from "@/lib/features/slice/notificationSlice";
import msgReducer from "@/lib/features/slice/messageSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      notification: notificationReducer,
      msg:msgReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']