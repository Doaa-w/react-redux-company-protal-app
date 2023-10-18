import companiesSlice, { fetchCompanies, fetchCopmany , } from './features/counterSlice'
import { ThunkDispatch } from 'redux-thunk';

export type RootState ={
    companiesReducer:ReturnType<typeof companiesSlice>;
    // fetchCopmany:ReturnType<any, number, AsyncThunkConfig>

   
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
    fetchCopmany:' '
}

type FetchDataPendingAction = ReturnType<typeof fetchCompanies.pending>;
type FetchDataFulfilledAction = ReturnType<typeof fetchCompanies.fulfilled>;
type FetchDataRejectedAction = ReturnType<typeof fetchCompanies.rejected>;

type singlrCopmanyPending= ReturnType<typeof fetchCopmany.pending>;
type singlrCopmanyFulfilled = ReturnType<typeof fetchCopmany.fulfilled>;
type singlrCopmanyRejected = ReturnType<typeof fetchCopmany.rejected>;
type searchCompany={
    payload: number;
    type: "companies/searchCompany";
    
}



export type CompaniesActions =
  | FetchDataPendingAction
  | FetchDataFulfilledAction
  | FetchDataRejectedAction
  |searchCompany
  |singlrCopmanyPending
  |singlrCopmanyFulfilled
  |singlrCopmanyRejected



export type CompaniesDispatch = ThunkDispatch<RootState, void, CompaniesActions>;