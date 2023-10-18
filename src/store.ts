import { configureStore } from '@reduxjs/toolkit'
import companiesSlice from './features/counterSlice'


 const store = configureStore({
  reducer: {
    companiesR: companiesSlice,
  },
})


export default store;