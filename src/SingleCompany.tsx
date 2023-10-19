import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompaniesDispatch , RootState , company} from "./Types";
import { fetchCopmany } from "./features/counterSlice";
import {useParams} from  'react-router-dom'

const SingleCompany = () =>{
    const { id } = useParams()
    const { singleCompany , isLoading ,error} = useSelector((state:RootState) => state.companiesReducer);
    const dispatch:CompaniesDispatch =useDispatch();
   
    useEffect(() => {
    dispatch(fetchCopmany(Number(id)));
    },[dispatch ,id]); 
   
   
    if(isLoading){
     return <p> loading the Data now ..</p>
     }
    if (error){
     return <p>{error}</p>
    }

 return (
<div>
  {singleCompany && (
    <div key={id}>
    return (
      <h3>{singleCompany.id}</h3>
      <p>{singleCompany.login}</p>
      <img src={singleCompany.events_url} alt={singleCompany.login}/>
      <p>{singleCompany.url}</p>
       )  
       </div>
  )}
</div>
    );
}
export default SingleCompany;