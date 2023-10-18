import { configureStore } from '@reduxjs/toolkit'
import companiesSlice from './features/counterSlice'


 const store = configureStore({
  reducer: {
    companiesReducer: companiesSlice,
  },
})


export default store;