import { useDispatch, useSelector ,} from 'react-redux'
import React, { ChangeEvent } from 'react'
import { CompainesState, CompaniesDispatch, RootState } from './Types'
import { fetchCompanies, searchCompany } from './features/counterSlice'
import companiesSlice from './features/counterSlice'
import companies from './features/counterSlice'
import { useEffect } from 'react';
import { Filter } from '@mui/icons-material'



const App = ()=> {

 const {companies , isLoading ,error, searchTerm} = useSelector((state:RootState) => state.companiesR);
 const dispatch:CompaniesDispatch =useDispatch();

 useEffect(() => {
  dispatch(fetchCompanies());
 },[dispatch]);


 if(isLoading){
  return <p> loading the Data now ..</p>;
 }
 if (error){
  return <p>{error}</p>
 }
 const handelSearch = (event :ChangeEvent<HTMLInputElement>)=>{
  dispatch(searchCompany(Number(event.target.value)));

 };
 const filteredCompanies =searchTerm?companies.filter((company:CompainesState)=> 
 company.id === searchTerm):companies;
 console.log(companies)


 return (
    <div>
       <h1>The companies App</h1>
      <input type='text' onChange={handelSearch} value={searchTerm}/> 
      <section className='theCopmanies'>

      {filteredCompanies.length > 0 && filteredCompanies.map((company) => {
        const {id,login, avater_url } = company;
        return (
        <div key={id} className='company'>
          <h3>{id}</h3>
          <p>{login}</p>
          <img src='{avater_url }' alt='{login}'/>
        </div>
        );
       })}
       </section>
     </div> 
   )
  };
export default App;