import { FloatingDock } from './floatingDock'
import Intro from './components/intro'
import Navbar from './components/navbar'
import './index.css'
import { IconBrandX } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconBrandBehance } from '@tabler/icons-react'
import { IconBrandLinkedin } from '@tabler/icons-react'
import Tech from './components/tech'
import Projects from './components/projects'
import Qoute from './components/qoute'
import Footer from './components/footer'

const links = [
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Github",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Behance",
    icon: (
      <IconBrandBehance className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

 
];

function App() {


  return (
   <>
   <Navbar/>
    <Intro/>
    <div className='flex-1 mt-12 flex items-center justify-center flex-col'>
    <FloatingDock 
    items={links}
    />
        <div>
    rohit.991063@gmail.com
    </div>
    
    </div>
    <Tech/>
    <Projects/>
    <Qoute/>
    <Footer/>
   </>
  )
}

export default App
