import { motion } from "framer-motion";
import react from "react"
import Layout from "../components/Layout"
import Link from 'next/link'



import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export default function Home({ starredRepositories }) {
  return (
    <Layout title={"Portfolio"} description={"Starred Github Repos"}>
        <div className="flex justify-end pr-5 pt-3">
        <h3><motion.a whileHover={{scale: 1.07}} href="/" className=" text-bold text-2xl flex dark:hover:text-green-500 hover:text-orange-300  border border-transparent ">Home</motion.a></h3>
        </div>
           <div className=" border border-white shadow-xl shadow-gray-500 dark:shadow-black rounded-xl flex flex-wrap mt-3 pb-5">
           
            {starredRepositories.map(repo =>{
                return(
                    

                    < motion.a className="flex mx-5" key={ repo.id } href={repo.url} target={"_blank"} rel="noopener noreferrer" whileHover={{scale: 1.07}}>
                      
                      <div className= "ml-4 shadow-xl border border-white shadow-gray-500 p-4 rounded-lg dark:shadow-black mt-5"  >
              
                        <h2 className="text-lg text-center font-bold md:text-xl mb-2">{repo.name}</h2>
                          <div className="justify-center flex space-x-8 text-sm">
                            <p>{repo.description}</p>
                            <p>⭐{repo.stargazerCount}</p>
                          </div>
                      </div>
                    </motion.a>
                )
              })}
            </div>
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