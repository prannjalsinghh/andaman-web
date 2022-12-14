import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderNewPackage = (option)=>{
    props.headerCloseHandler();
    navigate('/TypePackages',{state:{id:option}})
    window.location.reload(true);
    handleClose();
    
  }
  const handleOnLeave = (event)=>{
    event.target.style.backgroundColor = '#ffffff'
    
  }

  return (
    <>
      <li
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver = {props.matches===true? handleClick : undefined}
        onClick = {props.matches===false? handleClick:undefined}
      ><a>
        {props.item.heading}
        </a>
      </li>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {props.item.options.map((option) =><MenuItem  onMouseEnter={(e) => e.target.style.backgroundColor= 'rgb(245,105,65'}
onMouseLeave={handleOnLeave} onClick={()=>renderNewPackage(option)}>{option}</MenuItem>)}
      </Menu>
      
    </>
  );
}

