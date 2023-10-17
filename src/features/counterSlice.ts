import { Build } from '@mui/icons-material';
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'


export const fetchDate= createAsyncThunk ('companies/fetchData',async () => {
  const response = await fetch('https://api.github.com/organizations');
  const data =await response.json();
  return data;
});

// export const oneCompany = createAsyncThunk ('companies/fetchData',async () => {
//   const response = await fetch('https://api.github.com/orgs/<id or login>');
//   const company =await response.json();
//   return company;
// });
 
const initialState = {
  data:[],
  isLoading:false,
  error: " ",
};

 const companiesReducer = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers:(builder) =>{
    builder
    .addCase(fetchDate.pending , (state)=>{
      state.isLoading=true;
    })
    .addCase(fetchDate.fulfilled , (state , action)=>{
      state.data = action.payload
      state.isLoading = false
      
    })
    .addCase(fetchDate.rejected , (state, action)=>{
      state.isLoading=false;
      state.error= "error we can not fech Data";
      
    });
  },
    
});


export default companiesReducer.reducer;