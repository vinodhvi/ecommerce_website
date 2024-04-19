import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Select from "../Selectdrop/Select";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <h1>Logo</h1>
          </div>
          <div className="col-lg-5">
            <div className="headersearch d-flex align-items-center">
                <div className="header-dropdown cursor">
                    12345
                   <Select/>
                </div>
                <div className="header-search">
                    <input type="text" placeholder="Search for items..."/>
                    <SearchIcon className="search-icon"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
