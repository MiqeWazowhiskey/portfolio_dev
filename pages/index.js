import { motion } from "framer-motion";
import react from "react"
import Layout from "../components/Layout"
import Typical from 'react-typical'
import Github from "../components/icons/Github";

import LinkedinIcon from "../components/icons/Linkedin_icon";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
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
            
            <h2 className="mt-10 font-bold text-lg md:text-3xl mb-5">Starred Repos</h2>
            <div className="flex md:flex-row flex-wrap space-x-5 border  shadow-lg  shadow-red-200 px-4 py-6 rounded-3xl mb-5 dark:shadow-teal-400">
           
            {starredRepositories.map(repo =>{
                return(
                    < motion.a key={ repo.id } href={repo.url} target={"_blank"} rel="noopener noreferrer" className= " hover:" whileHover={{scale: 1.07}}>
                      
                      <div className= "shadow-xl shadow-gray-500 p-4 rounded-lg dark:shadow-black mt-5">
              
                        <h2 className="text-lg text-center font-bold md:text-xl mb-2">{repo.name}</h2>
                          <div className="justify-center flex space-x-8 text-sm">
                            <p className="flex flex-wrap">{repo.description}</p>
                            <p>⭐{repo.stargazerCount}</p>
                          </div>
                      </div>
                    </motion.a>
                )
              })}
            </div>
          </div>

        </section>
      </main>
      
    </Layout>
    
  )
  
}

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const{ data } = await client.query({
    query: gql`
    {
      user(login: "MiqeWazowhiskey") {
        starredRepositories {
          totalCount
          edges {
            node {
              id
              name
              url
              stargazerCount
              description
            }
          }
        }
      }
    }
    `
  });

  const {user} = data;
  const starredRepositories = user.starredRepositories.edges.map(({node})=>node);


  return {
    props: {
      starredRepositories
  }
  }
}