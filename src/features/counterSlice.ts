import { Build } from '@mui/icons-material';
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import { CompainesState } from '../Types';
 import { company } from '../Types';
 import React from 'react';



export const fetchCompanies= createAsyncThunk ('companies/fetchData',async () => { 
  const response = await fetch("https://api.github.com/organizations");
  if(!response.ok){
    throw new Error('resources error');
  }
  const data =await response.json();
  return data;
});

export const fetchCopmany = createAsyncThunk ('companies/fetchCopmany',async (id:number) => {
  const response = await fetch('https://api.github.com/orgs/${id}');
  if(!response.ok){
    throw new Error('resources error');
  }
  const data =await response.json();
  return data;
});

 
const initialState:CompainesState ={
  companies:[],
  company:[],
  isLoading:false,
  error: '',
  searchTerm:'',
  fetchCopmany:null,
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
    //
    .addCase(fetchCopmany.pending , (state)=>{
      state.isLoading=true;
    })
    .addCase(fetchCopmany.fulfilled , (state , action)=>{
      state.company = action.payload
      state.isLoading = false
      
    })
    .addCase(fetchCopmany.rejected , (state, action)=>{
      state.isLoading=false;
      state.error= "error we can not fech Data";
      
    })
    
  },
    
});

export const{ searchCompany } =companiesSlice.actions;
export default companiesSlice.reducer;