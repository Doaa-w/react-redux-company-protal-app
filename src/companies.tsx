import { BrowserRouter, Routes , Route } from 'react-router-dom';
import App from './App';
import SingleCompany from './SingleCompany';


const Companies = ()=>{
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>} />
             <Route path='/:id' element={<SingleCompany />} /> 
           </Routes> 
         </BrowserRouter>
    )
}
export default Companies;