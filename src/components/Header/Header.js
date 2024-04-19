import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Select from "../Selectdrop/Select";
import axios from "axios";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import compare from './../images/compare.svg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Button } from "@mui/material";
const Header = () => {
  const [Categories , setCategories] = useState([
    
    'Milks and Dhals',
    'Vegetables',
    'Ice Cream',
    'Noodeels & Rice',
    'Noodeels & Rice',
    'Noodeels & Rice',
    'Noodeels & Rice',
    'Noodeels & Rice',
  ]);

  const countryList=[];

  const getCountry = async()=> {
    try{
      await axios.get('https://countriesnow.space/api/v0.1/countries/').then((res)=>{
        if(res!==null){
          // console.log(res.data.data);
          res.data.data.map((item, index)=> {
            countryList.push(item.country);
            // console.log(item.country)
          })
         
          // You would access the array of countries using res.data.data.countries. 
          // The first data accesses the top-level data property of the response, 
          // and the second data accesses the countries property within that object.
        }
      })
    }catch(error) {
      console.log(error.message);   
    }
  }

useEffect (()=> {
  getCountry();
},[]);

  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <h1>Logo</h1>
          </div>
          <div className="col-lg-5">
            <div className="headersearch d-flex align-items-center">
            <Select data={Categories} placeholder={'All Categories'} icon={false}/>
                <div className="header-search">
                    <input type="text" placeholder="Search for items..."/>
                    <SearchIcon className="search-icon"/>
                </div>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className="d-flex align-items-center">
            <div className="country d-flex align-items-center">
          
               <Select data={countryList} placeholder={'Your Location'} className="cus-country" icon={<LocationOnOutlinedIcon className="select-location"/>}/>
       
            </div>
            <ul className="compare-section">
              <li className="cursor"><span><img src={compare} alt="compare"/></span>Compare</li>
              <li className="cursor"><span><ShoppingCartOutlinedIcon/></span>Cart</li>
              <li className="cursor position-relative"><span><PersonOutlineOutlinedIcon/></span>Account
                <ul className="dropdown-menu">
                    <li><Button>My Account</Button></li>
                    <li><Button>Order Tracking</Button></li>
                    <li><Button>Whish List</Button></li>
                    <li><Button>Logout</Button></li>
                </ul>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
