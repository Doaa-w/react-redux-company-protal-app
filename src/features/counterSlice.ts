import { Build } from '@mui/icons-material';
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { CompainesState } from '../Types';



export const fetchCompanies= createAsyncThunk ('companies/fetchData',async () => {
  const response = await fetch("https://api.github.com/organizations");
  const company =await response.json();
  return company;
});

export const Onecompany = createAsyncThunk ('companies/searchCompany',async (id) => {
  const response = await fetch("https://api.github.com/orgs/");
  const theCompany =await response.json();
  return theCompany;
});
 
const initialState = {
  companies:[ ],
  isLoading:false,
  error: " ",
  searchTerm:0 ,
};

 const companiesSlice = createSlice({
  name:"companies",
  initialState,
  reducers: {
    searchCompany:(state , action) =>{
      state.searchTerm = action.payload
    }
  },
  extraReducers:(builder) =>{
    builder
    .addCase(fetchCompanies.pending , (state)=>{
      state.isLoading=true;
    })
    .addCase(fetchCompanies.fulfilled , (state , action)=>{
      state.companies = action.payload
      state.isLoading = false
      
    })
    .addCase(fetchCompanies.rejected , (state, action)=>{
      state.isLoading=false;
      state.error= "error we can not fech Data";
      
    });
    
  },
    
});

export const{ searchCompany } =companiesSlice.actions;
export default companiesSlice.reducer;