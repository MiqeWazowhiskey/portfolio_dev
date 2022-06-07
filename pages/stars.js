import { motion } from "framer-motion";
import react from "react"
import Layout from "../components/Layout"
import Link from 'next/link'
import Typical from 'react-typical'



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
           <div className="justify-center  pl-4 flex flex-wrap  rounded-xl  mt-3 pb-5">
           
            {starredRepositories.map(repo =>{
                return(
                    

                    < motion.a className="flex flex-wrap  justify-center mx-5" key={ repo.id } href={repo.url} target={"_blank"} rel="noopener noreferrer" whileHover={{scale: 1.07}}>
                      
                      <div className= "w-96 shadow-xl border border-white shadow-gray-500 p-4 rounded-lg dark:shadow-black mt-5"  >
              
                        <h2 className="text-lg text-center font-bold md:text-xl mb-2">{repo.name}</h2>
                          <div className="justify-center flex space-x-8 text-sm ">
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