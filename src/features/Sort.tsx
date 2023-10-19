import { useDispatch, useSelector } from "react-redux";
import React, { ChangeEvent } from 'react'
import {CompaniesDispatch } from '../Types'
import { sortCmopany } from "./counterSlice";

const Sort =() => {
    const dispatch:CompaniesDispatch =useDispatch();

    const handelChange = (event:ChangeEvent<HTMLSelectElement>)=> {
        let sortKeyword=event.target.value;
        dispatch(sortCmopany(sortKeyword));
       }

       return (
        <div>
            <label htmlFor="sort">sort</label>
            <select name="sort"id="sort" onChange={handelChange}>
             <option value='id' defaultValue='id'>id</option>
             <option value='login'>login</option>

            </select>

        </div>

       );


};
export default Sort;