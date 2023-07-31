import React from 'react'
import WelcomeMessage from '@/components/WelcomeMessage/WelcomeMessage'
import RouteButton from '@/components/Buttons/RouteButton'

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-4'>
    <WelcomeMessage 
      message="Starz Properties"
    />
    <div className="button-wrapper flex flex-col justify-center items-center gap-4">
      {/* <div className="top-row flex flex-row justify-center items-center gap-4">
        <RouteButton label="Style Guides" route="/style-guides" />
        <RouteButton label="One Sheets" route="/one-sheets" />
        <RouteButton label="Corporate" route="/corporate" />
      </div>
      <div className="bottom-row flex flex-row justify-center items-center gap-4">
        <RouteButton label="Starz Properties" route="/starz-properties" />
        <RouteButton label="Tune In Guides" route="/tune-in-guides" />
      </div> */}
    </div>
  </div>
  )
}

export default page