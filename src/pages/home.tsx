import Footer from "../components/footer"
import Intro from "../components/intro"
import Navbar from "../components/navbar"
import Projects from "../components/projects"
import Qoute from "../components/qoute"
import Tech from "../components/tech"

import { FloatingDock } from "../floatingDock"
import { IconBrandX } from '@tabler/icons-react'
import { IconBrandGithub } from '@tabler/icons-react'
import { IconBrandBehance } from '@tabler/icons-react'
import { IconBrandLinkedin } from '@tabler/icons-react'

const links = [
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/byir0nic",
    },
  
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Rohit-00",
    },
    {
      title: "Behance",
      icon: (
        <IconBrandBehance className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.behance.net/Rohit_Portfolio",
    },
  
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

export const Home = () => {
    return (
        <div className='bg-black text-gray-200'>
   
         <Intro/>
         <div className='flex-1 mt-12 flex items-center justify-center flex-col mb-6'>
         <FloatingDock 
         items={links}
         />
             <div style={{fontFamily:'Ubuntu mono'}}>
         rohit.991063@gmail.com
         </div>
         </div>
         <Tech/>
         <Projects/>
         <Qoute/>
   
        </div>
    )
}