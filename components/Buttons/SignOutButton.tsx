import React from 'react'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <button className='py-2 px-4 outline outline-white' onClick={() => signOut({callbackUrl: '/'})}>Sign Out</button>
  )
}

export default SignOutButton