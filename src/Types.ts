import companiesSlice, { fetchCompanies } from './features/counterSlice'
import { ThunkDispatch } from 'redux-thunk';

export type RootState ={
    companiesR:ReturnType<typeof companiesSlice>;
   
  }
// export type compaines ={
//     company:string[]
//     id:number
//     login:string
// }
export type CompainesState ={
    compaines:[];
    isLoading:boolean;
    error:string;
    searchTerm: number;
    id:number
   login:string
}

type FetchDataPendingAction = ReturnType<typeof fetchCompanies.pending>;
type FetchDataFulfilledAction = ReturnType<typeof fetchCompanies.fulfilled>;
type FetchDataRejectedAction = ReturnType<typeof fetchCompanies.rejected>;
type searchCompany={
    payload: number;
    type: "companies/searchCompany";
    
}


export type CompaniesActions =
  | FetchDataPendingAction
  | FetchDataFulfilledAction
  | FetchDataRejectedAction
  |searchCompany



export type CompaniesDispatch = ThunkDispatch<RootState, void, CompaniesActions>;