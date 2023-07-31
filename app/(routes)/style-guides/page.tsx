import React from 'react'
import WelcomeMessage from '@/components/WelcomeMessage/WelcomeMessage'
import RouteButton from '@/components/Buttons/RouteButton'

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-4'>
      <WelcomeMessage 
        message="Style Guides"
      />
      <div className="button-wrapper flex flex-col justify-center items-center gap-4">
        <div className="top-row flex flex-row justify-center items-center gap-4">
          <RouteButton label="Brand" route="/style-guides/brand" />
          <RouteButton label="Original Series" route="/style-guides/original-series" />
          <RouteButton label="#TAKETHELEAD" route="/style-guides/take-the-lead" />
        </div>
      </div>
    </div>
  )
}

export default page