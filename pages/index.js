import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About' 
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>CLA</title>
        <meta name="description" content="Generated"></meta>
        <link ref="icon" href="/navLogo.png"></link>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}