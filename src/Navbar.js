import React from 'react';
import logo from './logo.png'

const Navbar = () => {
    return (
      <div>
        
        <nav class="navbar navbar-expand-lg navbar-light text-white bg-primary">
          <div>
             <div className="bg-white">
                <img
                 src={logo} alt="Logo"
                    style={{ height: '100', width:'100px'}}
                 ></img
                >
            </div>
          </div>
  <a class="navbar-brand text-white" href="#">ARIS_UDSM</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link text-white" href="#"> HOME </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" href="#"> ARIS </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          LOGIN
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled text-white" href="#">SERVICE</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0 d-flex flex-row">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-dark flex-direction-flex-end my-2 my-sm-0" type="submit">Search</button>
    </form>

            <h2>UNIVERSITY OF DAR ES SALAAM</h2>
            
            <div>
               <div style={{background:'white'}}>
                <img
                 src={logo} alt="Logo"
                    style={{ height: '100', width:'100px'}}
                 ></img
                >
            </div>
            </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;