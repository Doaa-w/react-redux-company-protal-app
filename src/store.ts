import { configureStore } from '@reduxjs/toolkit'
import companiesSlice from './features/counterSlice'

export type RootState ={
  companiesR:ReturnType<typeof companiesSlice>;
    // theFetchDate:ReturnType <typeof companiesSlice> 
}

 const store = configureStore({
  reducer: {
    companiesR: companiesSlice,
  },
})

export type fetchdate= typeof store.dispatch;
export default store;