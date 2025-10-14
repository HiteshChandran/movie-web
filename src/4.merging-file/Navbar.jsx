import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
          <div className="logo"><h1>Hitesh Chandran</h1></div>
          
          <div className="right">

           <label htmlFor="check" className="checked">
               <i className="fa-solid fa-bars"></i>
            </label>
              <input type="checkbox" id="check"/>


              <ul className="list">
                <li><a href="">Home</a></li>
                <li><a href="">Skill</a></li>
                <li className="but"><a href="">Full screen</a></li>
                
              </ul>

               
          </div>
        </nav>
    </div>
  )
}

export default Navbar