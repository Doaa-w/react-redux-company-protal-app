import { useDispatch, useSelector ,} from 'react-redux'
import React, { ChangeEvent , useEffect} from 'react'

import {CompaniesDispatch, RootState  } from './Types'
import { fetchCompanies, searchCompany } from './features/counterSlice'
import Sort from './features/Sort';
import { Link } from 'react-router-dom';




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
  let searchKeyword= event.target.value;
  dispatch(searchCompany(Number(searchKeyword)));

 }
 const filteredCompanies =searchTerm?companies.filter((company)=> 
 company.login.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())):companies;

 return (
    <div>
       <h1>The companies App</h1>
      <input type='text' onChange={handelSearch} value={searchTerm}/> 
        <Sort/>
      <section className='companies'>

      {filteredCompanies.length > 0 && filteredCompanies.map((company) => {
        const {id,login, events_url , url} = company;
        return (
        <div key={id} className='company'>
          <h3>{id}</h3>
          <p>{login}</p>
          <img src={events_url} alt={login}/>
          <p>{url}</p>
          <Link to={'/SingleCompany/${company.id}'}>
            <button>For Details</button>
          </Link>
         </div>
        )
       })}
       </section>
     </div> 
   )
  }
export default App;