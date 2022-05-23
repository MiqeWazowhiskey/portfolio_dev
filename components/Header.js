import React from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
const Header = () => {
  const{theme,setTheme}= useTheme("dark");
  const [enabled, setEnabled] = React.useState(false);
  return (

    <header className='flex items-center justify-between text-white px-6 py-4 h-1 max-w-8xl mx-auto mt-8 bg-transparent'>
       <span></span> 
        <Switch
          checked ={enabled}
          onChange={() => {  
          setEnabled(!enabled)
          setTheme(theme === "dark" ? "light" :"dark")
          }}
          className={`${
            enabled ? 'bg-gray-800 shadow-md shadow-black' : 'bg-gray-600 shadow-gray-500 hover:bg-gray-700 shadow-md'
          } relative inline-flex h-7 w-12 items-center rounded-full  transition-shadow ease-in-out duration-200`}
          >
          <span
          
          className={`${enabled ? 'translate-x-6 bg-gray-500' : 'translate-x-1 bg-gray-200'}
          pointer-events-none inline-block h-5 w-5 transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
      
        />
        </Switch> 
          

        


    </header>
  )
}

export default Header