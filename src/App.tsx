import { useDispatch, useSelector ,} from 'react-redux'
import React, { ChangeEvent } from 'react'
import {CompaniesDispatch, RootState } from './Types'
import { fetchCompanies, searchCompany } from './features/counterSlice'
import { useEffect } from 'react';



const App =() => {

 const {companies , isLoading ,error, searchTerm} = useSelector((state:RootState) => state.companiesReducer);
 const dispatch:CompaniesDispatch =useDispatch();

 useEffect(() => {
  dispatch(fetchCompanies())
 },[dispatch]);


 if(isLoading){
  return <p> loading the Data now ..</p>
  }
 if (error){
  return <p>{error}</p>
 }
 const handelSearch = (event :ChangeEvent<HTMLInputElement>)=> {
  dispatch(searchCompany(Number(event.target.value)));

 }
 const filteredCompanies =searchTerm?companies.filter((company)=> 
 company.id === searchTerm): 
 
 companies;

 return (
    <div>
       <h1>The companies App</h1>
      <input type='text' onChange={handelSearch} value={searchTerm}/> 
      <section className='companies'>

      {filteredCompanies.length > 0 && filteredCompanies.map((company) => {
        const {id,login, events_url , url} = company;
        return (
        <div key={id} className='company'>
          <h3>{id}</h3>
          <p>{login}</p>
          <img src={events_url} alt={login}/>
          <p>{url}</p>
         </div>
        )
       })}
       </section>
     </div> 
   )
  }
export default App;