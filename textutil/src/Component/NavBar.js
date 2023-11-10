import React from 'react'
import PropTypes from 'prop-types'




function NavBar(props) {
  return (
    <>

        <div className='all'  style={{backgroungColor:props.mode==='dark'?'white':'white'}} >
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.link}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {props.dropdown}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">{props.disable}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">

      <div className={`form-check form-switch" text-id='{props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toglemode} role="switch" id="flexSwitchCheckDefault"/>
  {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch ch</label> */}
</div>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">{props.search}</button>
      </form>
    </div>
  </div>
</nav>
</div>
    </>
  )
}



                        
export default NavBar;