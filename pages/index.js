import { motion } from "framer-motion";
import react from "react"
import Layout from "../components/Layout"
import Typical from 'react-typical'
import Github from "../components/icons/Github";
import LinkedinIcon from "../components/icons/Linkedin_icon";
const TypingAnimation = react.memo(
   ()=>{
    return (
      <Typical
      loop = {Infinity}
      wrapper="p"
      steps={[
        "AI Developer",2500,
        "React Enthusisast",2500,
        "I Love Java",2500,
        "PowerLifter",2500,
      ]}
      />
    )},
   
)
export default function Home({ starredRepositories }) {
  console.log(starredRepositories)
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <main className="h-full w-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-center">
            <h3 className="text-lg text-gray-900 dark:text-white"> 
              <span className="text-xl font-normal">Merhaba,</span> Ben
            </h3>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-900 uppercase md:text-5xl dark:text-white ">
             Ali Kağan Yılmaz
            </h1>
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r bg-green-500  bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>
            <div className="flex items-center mt-8 space-x-4 md:mt-4">
              <motion.a href="https://github.com/MiqeWazowhiskey" 
              target={"_blank"} rel="noopener noreferrer" 
              className="flex items-center justify-center text-gray-700 transition-colors duration-400 dark:text-gray-200 dark:hover:text-green-500 hover:text-orange-300"
              whileHover={{scale: 1.1}}
              >
                <Github className={"w-8 h-8 fill-current"}/>
                
              </motion.a>
              <motion.a href="" 
              target={"_blank"} rel="noopener noreferrer" 
              className="flex items-center justify-center text-gray-700 transition-colors duration-400 dark:text-gray-200 dark:hover:text-green-500 hover:text-orange-300"
              whileHover={{scale: 1.1}}
              >
                
                <LinkedinIcon className={"w-8 h-8 fill-current"}/>
              </motion.a>
            </div>
          </div>
          <div className="pt-5">
            <motion.a className="flex justify-center text-lg font-bold dark:hover:text-green-500 hover:text-orange-300" href="stars" whileHover={{scale: 1.1}}>
              Starred Repos
            </motion.a>
          </div>
        </section>
      </main>
      
    </Layout>
    
  )

}