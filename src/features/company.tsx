import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompaniesDispatch, RootState ,company } from "../Types";
import { fetchCopmany, searchCompany, sortCmopany } from "./counterSlice";

const singleCompany=() => {
    // const {id} = singleCompany;
    const {company , isLoading ,error} = useSelector((state:RootState) => state.companiesReducer);
    const dispatch:CompaniesDispatch =useDispatch();
   
    useEffect(() => {
    dispatch(fetchCopmany(0));
    },[dispatch ,0]); 
   
   
    if(isLoading){
     return <p> loading the Data now ..</p>
     }
    if (error){
     return <p>{error}</p>
    }
 return (
<div>
  {/* {singleCompany (
    return (
   
      <h3>{singleCompany.id}</h3>
      <p>{singleCompany.login}</p>
      <img src={singleCompany.events_url} alt={singleCompany.login}/>
      <p>{singleCompany.url}</p>

  ))} */}
</div>
    );
}
export default singleCompany;