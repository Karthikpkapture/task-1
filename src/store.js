import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './redux/UserSlice';
import AlluserReducer from './redux/AlluserSlice';
import notificationReducer from './redux/notificationSlice'

export default configureStore({
  reducer: {
    authentication:UserReducer,
    allusers:AlluserReducer,
    notification:notificationReducer,
  },
})