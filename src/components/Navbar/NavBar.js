import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

function Navbar () {
    return (
        <>
            <nav className="navbar" >
                <Link className="nav-link" to="/">首頁</Link>
                <Link className="nav-link"  to="/Collect">收藏</Link>
            </nav>
        </>
    )
}
export default Navbar;