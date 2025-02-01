import React from 'react'
//import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/*<li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li>*/}
        </ul>
      {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>*/}
      <div className="dropdown-center">
          <button className="btn btn-secondary dropdown-toggle mx-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-palette-fill" viewBox="0 0 16 16">
  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
          </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
                <button type="button" data-theme="primary" onClick={props.customTheme}className="btn btn-primary mx-1" style={{border: '2px solid black'}}></button>
                <button type="button" data-theme="success" onClick={props.customTheme} className="btn btn-success mx-1" style={{border: '2px solid black'}}></button>
                <button type="button" data-theme="danger" onClick={props.customTheme} className="btn btn-danger mx-1" style={{border: '2px solid black'}}></button>
                <button type="button" data-theme="warning" onClick={props.customTheme} className="btn btn-warning mx-1" style={{border: '2px solid black'}}></button>
                <button type="button" data-theme="light" onClick={props.customTheme} className="btn btn-light mx-1" style={{border: '2px solid black'}}></button>
                <button type="button" data-theme="dark" onClick={props.customTheme} className="btn btn-dark mx-1"></button>
          </li>
        </ul>
      </div>
      {/*<div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
          <input className="form-check-input" onClick={props.enableGreyDark} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Greyish Dark Mode</label>
      </div>*/}
      
    </div>
  </div>
</nav>
  )
}


