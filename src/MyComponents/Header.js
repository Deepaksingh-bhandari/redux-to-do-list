import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink} from 'react-router-dom'

export default function Header(props) {
   
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link  className="navbar-brand"  to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3">
                                <Link className="nav-Link text-decoration-none" to="/" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* Setting a default value for the paramters as deepak & singh */}
                                <Link  className="nav-Link text-decoration-none"  to="/about" >About</Link>
                            </li>
                        </ul>
                        {!props.searchBar ? <form className="d-flex">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button> */}
                            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label  htmlFor="flexSwitchCheckDefault" >Enable Dark mode</label>
                            </div>
                        </form> : "Search Bar Disabled"}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true,
    mode: "light"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    searchBar: PropTypes.bool,
    mode: PropTypes.string.isRequired
}