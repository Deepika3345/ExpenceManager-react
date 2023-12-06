import React from 'react'


const Navbar = () => {



  return (
    <nav className="navbar bg-dark ">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">Expence-Manager</span>
        <span className='navbar-brand mb-0 h1'>
          <button className="btn btn-outline-light btn-sm" >Dark Mode</button>
        </span>
      </div>
    </nav>


  )
}

export default Navbar