import React from 'react'
import styled from 'styled-components';
import LanguageIcon from '@mui/icons-material/Language';

function Header() {
  return (
    <Container>
      <a>
        <img src='images/logo.svg' alt=''/>
      </a>
      <Menu>
      <a href="#">Model S</a>
      <a href="#">Model 3</a>
      <a href="#">Model X</a>
      <a href="#">Model Y</a>
      <a href="#">Solar Roof</a>
      <a href="#">Solar Panel</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Acount</a>
        <a href="#">Menu</a>
      </RightMenu>
      <NavMenu>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#"></a>Used Inventory</li>
        <li><a href="#"></a>Trade-in</li>
        <li><a href="#"></a>Test Drive</li>
        <li><a href="#"></a>Cybertruck</li>
        <li><a href="#"></a>Roadster</li>
        <li><a href="#"></a>Semi</li>
        <li><a href="#"></a>Charging</li>
        <li><a href="#"></a>Powerwall</li>
        <li><a href="#"></a>Commercial Energy</li>
        <li><a href="#"></a>Utilities</li>
        <li><a href="#"></a>Find Us</li>
        <li><a href="#"></a>Support</li>
        <li><a href="#"></a>Investor Relations</li>
        <li><a href="#"> <LanguageIcon/> United States</a></li>
      </NavMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
position:fixed;
min-height:60px;
padding: 0 20px;
display:flex;
align-items:center;
justify-content:space-between;
top:0;
right:0;
left:0;
z-index:1; 
`
const Menu = styled.div`
 display:flex;
 align-items: center;
 flex: 1;
 justify-content:center;

 a{
   padding: 0px 10px;
   font-weight: 550;
   flex-wrap: nowrap;
 }

 @media(max-width:768px){
   display:none;
 }
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  padding: 0px 10px;
  font-weight: 550;
}
`
const NavMenu = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:16;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  li{
    padding: 15px 0;
    cursor:pointer;
  }
`