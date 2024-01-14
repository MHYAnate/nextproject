import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum NotificationType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Info = "info",
}

type Notification = {
  open: boolean;
  message: string;
  value:  number;
};

type ShowNotification = Omit<Notification, "open">;

const initialState: Notification = {
  open: false,
  message: "",
  value:  0,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<ShowNotification>) => {
      state.open = true;
      state.message = action.payload.message;
      
    },
    hideNotification: (state) => {
      state.open = false;
      state.message = "";
    },

    updateCountFromLength: (state, action: PayloadAction<number>) => {
      const length = action.payload; // access the array length from action payload
      state.value = length; // update counter value with the length
    },
  },
});



export const { showNotification, hideNotification, updateCountFromLength } = notificationSlice.actions;
export default notificationSlice.reducer;