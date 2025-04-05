import footerimg from '../assets/icons/footerImage.svg'
import linkedIn from '../assets/socials/linkedIn.svg'
import github from '../assets/socials/github.svg'
import twitter from '../assets/socials/twitter.svg'
import behance from '../assets/socials/behance.svg'


const Footer = () => {
  return (
    <div style={{fontFamily:'Helvetica'}}>
    
    <div className='flex flex-col justify-evenly items-center mt-14'>
    <div className='flex flex-row'>
    <div className='flex flex-col mx-14 gap-y-2'>
    <div className='font-bold text-lg'>Follow me</div>  
    <div className='grid sm:grid-cols-2 gap-2 gap-x-6 gap-y-4'>
    <a href='#'><div className='flex flex-row gap-2 items-center justify-start'><img src={linkedIn} alt='linkedIn' height={30} width={30}></img>LinkedIn</div></a>
    <a href='https://x.com/byir0nic' target='_blank'><div className='flex flex-row gap-2 items-center justify-start '><img src={twitter} alt='twitter' height={30} width={30}></img>Twitter</div></a>
    <a href='https://github.com/Rohit-00' target='_blank'><div className='flex flex-row gap-2 items-center justify-start '><img src={github} alt='github' height={30} width={30}></img>Github</div></a>
    <a href='https://www.behance.net/Rohit_Portfolio' target='_blank'><div className='flex flex-row gap-2 items-center justify-start '><img src={behance} alt='behance' height={30} width={30}></img>Behance</div></a>
    </div>
    </div>
    <div className='flex flex-col mx-14 gap-y-2 '>
    <div className='font-bold text-lg'>Explore</div>
    <div className='grid sm:grid-cols-2 gap-2 gap-x-6 gap-y-5'>
    <div><a href='/'>Home</a></div>
    <div><a href='/aboutme'>About Me</a></div>
    <div><a href='/projects'>Projects</a></div>
    <div><a href='/contactme'>Contact Me</a></div>

    </div>
    </div>
    <div className='hidden sm:block'> rohit@byrohit.live</div>
    </div>
    <div className='sm:hidden block mt-4'>rohit@byrohit.live</div>
  
    </div>
  
    <div className="mt-7 sm:flex justify-center items-center hidden mr-20">
    <img src={footerimg} alt='footerimg' width={1200} height={500}></img>
  </div>
    <div className="mt-7 flex items-center justify-center ml-12 sm:hidden mr-20">
    <img src={footerimg} alt='footerimg' width={800} height={500}></img>
  </div>
      
    </div>
  )
}

export default Footer
