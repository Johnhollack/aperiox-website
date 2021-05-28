import Head from 'next/head'
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import NavBottom from "../components/NavBottom";


export default function Home() {


  return (
    <div className=" ">
      <Head>
        <title>Apeirox</title>
          <meta name="Apeirox" content="Connecting Trades" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header />

      <NavBar />

      <NavBottom />


    </div>
  )
}
