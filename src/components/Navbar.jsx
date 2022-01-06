import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from "./Search";

import logo from "../images/SEEKiT.png";

export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-400'>
            <div className='container mx-auto flex justify-between items-center space-x-5 w-screen'>
                <Link to='/'>
                    <img src={logo} alt="SEEKiT" className='w-40' />
                </Link>
                <button type="button" onClick={()=> setDarkTheme(!darkTheme)} className='text-xl dark:bg0gray-50 dark:text-gray-900 bg-white border rounded-md px-2 py-1 hover:shadow-lg'>
                    {darkTheme ? '💡' : '🌙'}
                </button>
            </div>
            <div className='container mx-auto'>
                <Search />
            </div>
        </div>
    )
}
