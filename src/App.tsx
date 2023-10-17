import { useDispatch, useSelector ,} from 'react-redux'
import React from 'react'
import { RootState , fetchdate} from './store'
import { fetchDate } from './features/counterSlice';
import { useEffect } from 'react';


type companies={
  id:number ;
  login:string;
  
}

const Companies = () =>{

  const {data , isLoading ,error} = useSelector((state:RootState) => state.companiesR);
 const dispatch=useDispatch<fetchdate>();

 useEffect(() => {
  dispatch(fetchDate());
 },[dispatch]);


 if(isLoading){
  return <p> loading the Data ..</p>;
 }
 if (error){
  return <p>{error}</p>
 }


 return 

 
 <div>
  <h2>companies App</h2>
  {data.length > 0 && data.map((company :companies ) => {
    return (
    <div key={company.id}>
      <p>{company.id}</p>
      <p>{company.login}</p>
    </div>
    )
   })};
 </div>

  };
export default Companies;