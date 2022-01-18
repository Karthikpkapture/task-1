import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    authenticated: false,
  },
  reducers: {
    loggedin: (state) => {
      state = true
    },
    loggedout: (state) => {
      state = false
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { loggedin, loggedout,} = UserSlice.actions

export default UserSlice.reducer