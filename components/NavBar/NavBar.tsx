'use client'
import React from 'react'
import SignOutButton from '../Buttons/SignOutButton'
import { useSession } from 'next-auth/react'
import SignInButton from '../Buttons/SignInButton'
import RouteButton from '../Buttons/RouteButton'


const NavBar = () => {
  const { data: session } = useSession()

  return (
    <div className='p-4 flex items-center justify-center gap-4'>
      {session? (
        <SignOutButton />
      ) : (
        <SignInButton />
      )}
      <RouteButton label='Home' route='/' />
    </div>
  )
}

export default NavBar