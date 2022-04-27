import React from 'react';
import { useTheme } from 'next-themes';
const Header = () => {
  const{theme,setTheme}= useTheme();
  return (

    <header className='flex items-center justify-between text-white px-6 py-4 h-1 max-w-8xl mx-auto mt-8 bg-transparent'>
       <span></span> 
        <button className='px-8 py-2 bg-purple-900 text-white rounded-md font-semibold uppercase'
                onClick={ () => setTheme(theme === "dark" ? "light" :"dark")}>
            {theme === "Light" ? "Dark" : "Light"}
        </button>

    </header>
  )
}

export default Header