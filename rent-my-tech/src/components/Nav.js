import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';





export default function Nav(props) {
  return (
    <Navigation>
        <div className='red-box'></div>
         <h3>Rent My <span>Tech </span></h3> 
         
    <div className='links'>

    
    <Link to='/'>Home</Link> 
    <Link to='/signup'>Sign Up</Link> 
    <Link to='/login'>Login</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link> 

    
    </div>
    
    </Navigation>
  
  );
}


//styles---------------------------------------------
const Navigation = styled.div`
box-sizing:border-box;
background: #385A64;
color: #f3e8e8;
width:100vw;
height: 10%;
margin-top:-2.7%; 
display:flex;
justify-content:space-between;
align-items:center;

h3 {
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
  font-size:1.9rem;
  margin-left: -18rem;
  letter-spacing: 0.2rem;
}
span {
 color: #df5f68;
 font-weight: bold;
 font-size:2rem;
}

.red-box {
    height:6.3rem;
    width:0.5%;
    background:#df5f68;
    
}

.links {
    background: #df5f68;
    height: 100%;
    width: 70%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 5rem 0 0 5rem;
    
    
}

.links:hover {
    background: #1A2E35;
    
}

a {
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
    font-family: 'Quicksand', sans-serif;
  font-size:1.4rem;
  margin-right:2rem;
  text-decoration:none;
  color: #f3e8e8;
  letter-spacing: 0.2rem;
  font-weight:normal;
  padding: 7rem;
}
a:hover {
  color:#df5f68;
} 

//Laptop-----------------
@media (min-width: 1300px) {
width: 100vw;
.links {
  width: 75%;
  
}

a {
  padding: 4rem;
  font-size: 1.2rem;
  
  
}
.red-box {
margin-right: 15rem;
height: 4.8rem;
}

}

//Desktop---------------------
@media (min-width: 1900px) {
 

.links {
  width: 80%;
}

a{
  padding: 5rem;
  font-size: 1.8rem;
}

.red-box {
  height: 6.3rem;
}

}
//4k-------------------------------
@media (min-width: 2400px) {
 
 
 .red-box {
   height: 8.3rem;
 }
 
 }

`