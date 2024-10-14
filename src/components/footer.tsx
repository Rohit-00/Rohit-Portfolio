import footerimg from '../assets/icons/footerImage.svg'
import linkedIn from '../assets/socials/linkedIn.svg'
import github from '../assets/socials/github.svg'
import twitter from '../assets/socials/twitter.svg'
import behance from '../assets/socials/behance.svg'


const Footer = () => {
  return (
    <div>
    
    <div className='flex flex-col justify-evenly items-center mt-14'>
    <div className='flex flex-row'>
    <div className='flex flex-col mx-14 gap-y-2'>
    <div className='font-bold text-lg'>Follow me</div>  
    <div className='grid sm:grid-cols-2 gap-2 gap-x-6 gap-y-4'>
    <div className='flex flex-row gap-2 items-center justify-start'><img src={linkedIn} alt='linkedIn' height={30} width={30}></img>LinkedIn</div>
    <div className='flex flex-row gap-2 items-center justify-start '><img src={twitter} alt='linkedIn' height={30} width={30}></img>Twitter</div>
    <div className='flex flex-row gap-2 items-center justify-start '><img src={github} alt='linkedIn' height={30} width={30}></img>Github</div>
    <div className='flex flex-row gap-2 items-center justify-start '><img src={behance} alt='linkedIn' height={30} width={30}></img>Behance</div>
    </div>
    </div>
    <div className='flex flex-col mx-14 gap-y-2 '>
    <div className='font-bold text-lg'>Explore</div>
    <div className='grid sm:grid-cols-2 gap-2 gap-x-6 gap-y-5'>
    <div>Home</div>
    <div>About me</div>
    <div>Projects</div>
    <div>Download CV</div>
    </div>
    </div>
    <div className='hidden sm:block'> rohit.991063@gmail.com</div>
    </div>
    <div className='sm:hidden block mt-4'>rohit.991062@gmail.com</div>
  
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
