import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type Msg = {
 
  value:  number,
};

const initialState: Msg = {

  value:  0,
};

const MsgSlice = createSlice({
  name: "msg",
  initialState,
  reducers: {
   
    updateMsgLength: (state, action: PayloadAction<number>) => {
      const length = action.payload; // access the array length from action payload
      state.value = length; // update counter value with the length
    },
  },
});



export const {updateMsgLength } = MsgSlice.actions;
export default MsgSlice.reducer;