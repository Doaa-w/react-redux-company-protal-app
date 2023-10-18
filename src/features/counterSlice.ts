import { Build } from '@mui/icons-material';
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { CompainesState } from '../Types';
 import { company } from '../Types';



export const fetchCompanies= createAsyncThunk ('companies/fetchData',async () => { try{
  const response = await fetch("https://api.github.com/organizations");
  if(!response.ok){
    throw new Error('resources error');
    
  }
  const data =await response.json();
  return data;
} catch (error) {console.log(error);
}

});

export const fetchSinglrCopmany = createAsyncThunk ('companies/searchCompany',async (id) => {
  const response = await fetch('https://api.github.com/orgs/${id}');
  const singleCompany =await response.json();
  return singleCompany;
});
 
const initialState:CompainesState ={
  companies:[],
  company:[],
  isLoading:false,
  error: '',
  searchTerm:''

}

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
      
    })
    .addCase(fetchSinglrCopmany.pending , (state)=>{
      state.isLoading=true;
    })
    .addCase(fetchSinglrCopmany.fulfilled , (state , action)=>{
      state.company = action.payload
      state.isLoading = false
      
    })
    .addCase(fetchSinglrCopmany.rejected , (state, action)=>{
      state.isLoading=false;
      state.error= "error we can not fech Data";
      
    })
    
  },
    
});

export const{ searchCompany } =companiesSlice.actions;
export default companiesSlice.reducer;