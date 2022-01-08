import React, { useState } from 'react';

import { AppRoutes } from "./components/AppRoutes";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(true);
    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className='relative bg-sky-50 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
                <div>
                    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                </div>                
                <div className='container mx-auto mt-5 mb-5'>
                    <AppRoutes />
                </div>
                <div className='absolute bottom-0 w-full'>
                    <Footer />
                </div>                
            </div>
        </div>
    )
}

export default App
