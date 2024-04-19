import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Select.css';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';


const Select = ({data, placeholder, icon}) => {
    // useState import hook
    // usestate returns an array with two elements
    // OpenSelect is the current state value
    // setOpenSelect is used the update the state
    const [isOpenSelect , setisOpenSelect] = useState(false);
    const [selectedIndex, setselectedIndex]= useState(0);
    const [selectedItem , setSelectedItem] = useState(placeholder);
    const [listData , setlistData] = useState(data);
    const [listData1 , setlistData1] = useState(data);
    const OpenSelect = () => {
        setisOpenSelect(!isOpenSelect)
    }
    const closeSelect =(index, name)=> {
        setselectedIndex(index);
        setisOpenSelect(false);
        setSelectedItem(name);
    }
    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        const list = listData1.filter((item)=>{
            return item.toLowerCase().includes(keyword);
        })
        const list1 = list.filter((item, index) => list.indexOf(item) === index);
        setlistData(list1)
        console.log(keyword)
    }

    return(
        <ClickAwayListener onClickAway={()=>setisOpenSelect(false)}>
        <div className="header-dropdown cursor">
            {icon}
            <span className="open-select cursor" onClick={OpenSelect}>{selectedItem.length>14? selectedItem.substr(0 , 14) + '...' : selectedItem} <KeyboardArrowDownIcon className="arrow"/></span>
            {
                isOpenSelect === true &&
                <div className="select-dropdown">
                <input type="text" placeholder="Search here ..." onChange={filterList}/>
                <ul>
                    {/* This is the first list item element being rendered. */}
                    {/* It has a key attribute set to 0, which is used by React to identify list items uniquely when rendering lists dynamically. */}
                <li key={0} onClick={()=>closeSelect(0, placeholder)} className={`${selectedIndex===0 ? 'active' : ''}`}>{placeholder}</li>
                {
                    // . Here, the Categories data is passed to the Select component as a prop named data. This prop is then accessed within the Select component using props.data.
               listData.map((item, index) =>{
                    return(
                        // The closeSelect function is called with arguments index+1 (to avoid a collision with the first list item, which has an index of 0) and the item from the data array.
                        <li key={index} onClick={()=>closeSelect(index+1, item)} className={`${selectedIndex===index+1 ? 'active' : ''}`}>{item}</li>
                    )
                })
             }
                    {/* select filed befor mapping */}
                    {/* <li onClick={()=>closeSelect(0, 'All Categories')} className={`${selectedIndex===0 ? 'active' : ''}`}>All Categories</li>
                    <li onClick={()=>closeSelect(1, 'Milks and Dhals')} className={`${selectedIndex===1 ? 'active' : ''}`}>Milks and Dhals</li>
                    <li onClick={()=>closeSelect(2, 'Milks and Dhals')} className={`${selectedIndex===2 ? 'active' : ''}`}>Milks and Dhals</li>
                    <li onClick={()=>closeSelect(3, 'Milks and Dhals')} className={`${selectedIndex===3 ? 'active' : ''}`}>Milks and Dhals</li>
                    <li onClick={()=>closeSelect(4, 'Milks and Dhals Rice')} className={`${selectedIndex===4 ? 'active' : ''}`}>Milks and Dhals Rice</li>
                    <li onClick={()=>closeSelect(5, 'Milks and Dhals')} className={`${selectedIndex===5 ? 'active' : ''}`}>Milks and Dhals</li> */}
                </ul>
            </div>
            }
       
    </div>
    </ClickAwayListener>
    )
}

export default Select;