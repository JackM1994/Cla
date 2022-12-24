import Head from 'next/head'
import Navbar from '../components/navbar'
import Main from '../components/Main'
import About from '../components/About' 

export default function Home() {
  return (
    <div>
      <Head>
        <title>CLA</title>
        <meta name="description" content="Generated"></meta>
        <link ref="icon" href="/favicon.ico"></link>
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  )
}