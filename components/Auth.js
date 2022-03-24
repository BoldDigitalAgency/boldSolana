export default function Auth({authenticate}) {

  const phantomAuth = async () => {
    try {
      await authenticate({
        type: 'sol',
        network: 'devnet'
      })
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r bg-black">
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-4xl">Connect with Solana phantom</h1>
        <button className="flex items-center justify-center bg-white text-blue px-2 py-1 mt-3 md:text-xl lg:text-3xl hover:bg-green drop-shadow-xl hover:drop-shadow-2xl transition duration-150 ease-out" onClick={phantomAuth}><img className="w-10 md:w-14 h-10 md:h-14 mr-4" src="/images/phantom.png" />auth with phantom</button>
    </div>
  )
}