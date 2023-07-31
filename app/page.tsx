import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from 'next-auth/next'
import WelcomeMessage from "@/components/WelcomeMessage/WelcomeMessage"
import RouteButton from "@/components/Buttons/RouteButton"

export default async function Home() {

  const session = await getServerSession(options)

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      {session ? (
        <>
          <WelcomeMessage 
            message="Welcome to Starz!"
          />
          <div className="button-wrapper flex flex-col justify-center items-center gap-4">
            <div className="top-row flex flex-row justify-center items-center gap-4">
              <RouteButton label="Style Guides" route="/style-guides" />
              <RouteButton label="One Sheets" route="/one-sheets" />
              <RouteButton label="Corporate" route="/corporate" />
            </div>
            <div className="bottom-row flex flex-row justify-center items-center gap-4">
              <RouteButton label="Starz Properties" route="/starz-properties" />
              <RouteButton label="Tune In Guides" route="/tune-in-guides" />
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Starz</h1>
        </>
      )}
    </div>
  )
}
