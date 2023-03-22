import React from 'react';
import Navbar from '../Navbar';

function Header ({handlePageChange, currentPage}) {
    return (
        <header>
            <h1>Sarah Jacobs</h1>
            <Navbar handlePageChange={handlePageChange} currentPage={currentPage}/>
        </header>
    )
}
export default Header;