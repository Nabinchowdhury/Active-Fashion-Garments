import React from 'react';
import af from "../../resources/logo.png"

const Navbar = () => {

    const items = <>
        <li><a>Item 1</a></li>
        <li><a>Parent </a> </li>
        <li><a>Item 3</a></li></>

    return (
        <div className=''>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <img src={af} alt="" className='w-24' />
                </div>
                <div className='navbar-end'>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {items}
                        </ul>
                    </div>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32 right-0">
                            {items}
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;