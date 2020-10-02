import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
         <h1>Todo List</h1> 
         <Link style ={linkstyle} to="/">Home</Link>  | <Link style ={linkstyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

const linkstyle={
    color:'#fff',
    TextDecoration:'none'

}

export default Header;