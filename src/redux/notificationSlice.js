import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState:{
    selectedNotification:[],
  },
 
  reducers: {

    selectNotification: (state, action ) => {
      state.selectedNotification = [...state.selectedNotification,action.payload];
    },


  },

});

export const { selectNotification } = notificationSlice.actions;

export const selectOpenNotification = (state) => state.notification.selectedNotification;


export default notificationSlice.reducer;