import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompaniesDispatch, RootState ,company } from "../Types";
import { fetchCopmany, searchCompany, sortCmopany } from "./counterSlice";

const singlrCompany=(company:company) => {
    // const id = useState<company>(id)
    const {companies , isLoading ,error} = useSelector((state:RootState) => state.companiesReducer);
    const dispatch:CompaniesDispatch =useDispatch();
   
    useEffect(() => {
    dispatch(fetchCopmany(id));
    },[dispatch ,id]); 
   
   
    if(isLoading){
     return <p> loading the Data now ..</p>
     }
    if (error){
     return <p>{error}</p>
    }
 return (
<div>
  {/* {singlrCompany (
    return (
   
      <h3>{singlrCompany.id}</h3>
      <p>{singlrCompany.login}</p>
      <img src={singlrCompany.events_url} alt={singlrCompany.login}/>
      <p>{singlrCompany.url}</p>

  ))} */}
</div>
    );
}
export default singlrCompany;