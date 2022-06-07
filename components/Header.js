import React from 'react';
import { motion } from 'framer-motion';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
const Header = () => {
  const{theme,setTheme}= useTheme("dark");
  const [enabled, setEnabled] = React.useState(false);
  return (

    <header className='flex items-center justify-between text-white px-6 py-4 h-1 max-w-8xl mx-auto mt-8 bg-transparent'>
        <div className="flex flex-wrap justify-center pr-5 pt-3">
          <motion.a className="flex justify-center text-lg font-bold dark:hover:text-green-500 hover:text-orange-300 mr-5 text-gray-700 dark:text-gray-200" href="stars" whileHover={{scale: 1.1}}>
                Starred Repos
          </motion.a>
          <h3>
            <motion.a whileHover={{scale: 1.07}} href="/" className=" text-bold text-lg text-gray-700 dark:text-gray-200 font-bold flex dark:hover:text-green-500 hover:text-orange-300  border border-transparent ">Home</motion.a>
          </h3>
        </div>
        <Switch
          checked ={enabled}
          onChange={() => {  
          setEnabled(!enabled)
          setTheme(theme === "dark" ? "light" :"dark")
          }}
          className={`${
            theme === "dark" ? 'bg-gray-800 shadow-md shadow-black' : 'bg-gray-800 shadow-md shadow-black'
          } relative inline-flex h-7 w-12 items-center rounded-full  transition-shadow ease-in-out duration-200`}
          >
          <span
          
          className={`${
            theme === "dark" ? 'translate-x-6 bg-gray-500' : 'translate-x-1 bg-gray-500'
          } pointer-events-none inline-block h-5 w-5 transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
      
        />
        </Switch> 
    </header>
  )
}

export default Header