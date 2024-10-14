import reactIcon from '../assets/icons/reactIcon.svg'
import nextIcon from '../assets/icons/nextIcon.svg'
import tsIcon from '../assets/icons/tsIcon.svg'
import nodeIcon from '../assets/icons/nodeIcon.svg'
import dockerIcon from '../assets/icons/dockerIcon.svg'
import gitIcon from '../assets/icons/gitIcon.svg'
import awsIcon from '../assets/icons/awsIcon.svg'
import expressIcon from '../assets/icons/expressIcon.svg'
import tailwindIcon from '../assets/icons/tailwindIcon.svg'
import mongoDBIcon from '../assets/icons/mongoDBIcon.png'


const Tech = () => {
  return (
    <div>
      <div>
        <div>
            <h1 className='text-3xl  sm:mx-20 sm:text-5xl'>Tech I use</h1>
        </div>
    <div className='grid grid-cols-5 grid-rows-2  gap-y-10 gap-x-9 mt-10 px-9 sm:px-28   '>
        <div className='flex flex-col justify-between items-center'><img alt='tsIcon' src={reactIcon} className='h-11'></img> <div className='text-xs sm:text-base'>React</div></div>
        <div className='flex flex-col justify-between items-center'><img alt='tsIcon' src={tsIcon} className='h-11'></img> <div className='text-xs sm:text-base'>Typescript</div></div>
        <div className='flex flex-col justify-between items-center'><img alt='nextIcon' src={nextIcon} className='h-11'></img> <div className='text-xs sm:text-base'>NextJs</div></div>
        <div className='flex flex-col justify-between items-center'><img alt='nodeIcon' src={nodeIcon} className='h-11'></img> <div className='text-xs sm:text-base'>NodeJs</div></div>
        <div className='flex flex-col justify-between items-center'><img alt='mongoIcon' src={mongoDBIcon} className='h-11'></img> <div className='text-xs sm:text-base'>MongoDB</div></div>
        <div className='flex flex-col justify-between items-center'><img alt='dockerIcon' src={dockerIcon} className='h-11'></img> <div className='text-xs sm:text-base'>Docker</div></div>
        <div className='flex flex-col justify-between items-center'><img alt='gitIcon' src={gitIcon} className='h-11'></img> <div className='text-xs sm:text-base'>Git/Github</div></div>
        <div className='flex flex-col justify-between items-center'><img alt='awsIcon' src={awsIcon}  className='mt-3 sm:mt-5 h-11'></img> <div className='text-xs sm:text-base'>AWS</div></div>
        <div className='flex flex-col justify-between items-center'><img alt='expressIcon' src={expressIcon} className='h-11' ></img> <div className='text-xs sm:text-base'>ExpressJS</div></div>
        <div className='flex flex-col justify-between items-center'><img alt='tailwindIcon' src={tailwindIcon} className='mt-2 h-11'></img> <div className='text-xs sm:text-base'>Tailwind</div></div>
    </div>

      </div>
    </div>
  )
}

export default Tech
