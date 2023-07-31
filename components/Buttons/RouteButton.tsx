import React from 'react'
import Link from 'next/link'

type AppProps = {
  label: string,
  route: string,
}

const RouteButton = ({label, route}:AppProps) => {
  return (
    <Link className='py-2 px-4 outline outline-white' href={route}>{label}</Link>
  )
}

export default RouteButton