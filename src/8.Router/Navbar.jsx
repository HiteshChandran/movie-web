import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <link to ="/">Home</link>
        <link to ="/about">About</link>
        <link to ="/contact">Contact</link>
    </div>
  )
}

export default Navbar