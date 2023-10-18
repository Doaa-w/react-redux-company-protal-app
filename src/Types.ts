import companiesSlice, { fetchCompanies } from './features/counterSlice'
import { ThunkDispatch } from 'redux-thunk';

export type RootState ={
    companiesReducer:ReturnType<typeof companiesSlice>;
   
  }
export type company={
    login:string;
    id:number;
    node_id: string;
    url: string,
    repos_url : string;
    events_url : string;
    hooks_url : string;
    issues_url : string;
    members_url : string;
    public_members_url : string;
    avatar_url : string;
    description : null
}
export type CompainesState ={
  companies:company[];
  company:[];
    isLoading:boolean;
    error:string;
    searchTerm: '';
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