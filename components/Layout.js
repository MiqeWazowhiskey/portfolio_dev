import Head from 'next/head'
import Header from "../components/Header"
import React from 'react'
import Typical from 'react-typical'



  

const Layout = ({title, description, children}) => {
  return (
    <>
         <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property='og:site_name' content='Portfolio'/>
        <meta property='og:title' content={title}/>
        <meta property='og:description' content={description}/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light dark:bg-primary-dark antialiased font-play">
            <div className='w-full h-full'>
                <Header/>
                {children}
            </div>
        </div>
    </>
  )
}

export default Layout