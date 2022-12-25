import Head from 'next/head'
import Navbar from '../components/navbar'
import Main from '../components/Main'
import About from '../components/About' 
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CLA Landscaping</title>
        <meta name="description" content="Generated"></meta>
        <link ref="icon" href="/favicon.ico"></link>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}