import Head from 'next/head'
import React from 'react'
import { useMoralis } from 'react-moralis'
import Auth from '../components/Auth'
import Dashboard from '../components/Dashboard'
import NavBar from '../components/NavBar'

export default function Mywallet() {
    const {
        isAuthenticated,
        authenticate,
        logout,
        user
      } = useMoralis()

      if(!isAuthenticated) {
        return(
          <>
            <Head>
              <title>Auth | solDashboard</title>
            </Head>
            <NavBar />
            <Auth authenticate={authenticate}/>
          </>
        )
      }


  return (
    <div>
        <NavBar />
      <Dashboard logout={logout} user={user}/>
    </div>
  )
}
