import {  createSlice } from '@reduxjs/toolkit'

export const AlluserSlice = createSlice({

    name: 'Allusers',
    initialState:{
      Alluserdata:[],
    },
   
    reducers: {
  
      selectUser: (state, action ) => {
        state.Alluserdata = [...state.Alluserdata,action.payload];
      },
  
  
    },
  
  });
  
  export const { selectUser } = AlluserSlice.actions;
  
  export const selectAllusers = (state) => state.Allusers.Alluserdata;
  
  
  export default AlluserSlice.reducer;