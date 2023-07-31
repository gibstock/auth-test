type AppProps = {
  message: string
}

const WelcomeMessage = ({message}: AppProps) => {

  return (
    <div>{message}</div>
  )
}

export default WelcomeMessage