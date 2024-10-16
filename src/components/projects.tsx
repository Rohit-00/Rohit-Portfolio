import HoverDescription from './customCursor';
import { useState } from 'react';
import Modal from './modal';
import { IconExternalLink } from '@tabler/icons-react';

const projects = [
  {
    image         : 'https://i.ibb.co/zQ3thNC/image.png',
    projectName   : 'Cascade UI',
    projectLink   : 'https://cascadeui.pages.dev',
    projectType   : 'React Native Component Library',
    projectTech   : 'React Native, React, Reanimated ',
    projectStatus : true,
    projectDesc   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed augue congue, blandit magna at, placerat eros. Mauris faucibus convallis ex, et efficitur mi placerat a. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Nullam efficitur gravida pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tincidunt mattis ipsum, ut commodo lorem molestie sit amet. Morbi sollicitudin iaculis felis ultrices iaculis. Praesent a tellus vulputate, placerat velit ac, viverra est. Nulla vel porttitor erat. Mauris quis consequat neque. In semper gravida nibh vel commodo. Aenean eu lectus justo. Vestibulum faucibus nibh a dolor auctor tincidunt."


  }
]

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  console.log(showModal)
  
  return (
    <div className='mt-9'>

      <h1 className='text-3xl sm:text-5xl mx-5 sm:mx-20 mb-5'>Projects</h1>
   
      <div>
      <div className='flex flex-col '> 
    <HoverDescription description='AI Book Summaries App made using google books api and gemini api' backgroundColor='teal' >
      
      <div onClick={toggleModal} className=' flex flex-col sm:flex-row justify-between sm:h-32 sm:items-center cursor-pointer transition-transform duration-300 ease-in-out sm:hover:scale-90 sm:mx-20 mx-10'>
      <div className=' text-3xl sm:text-3xl font-normal'>After Reads</div>
      <div className=' sm:hidden'><img src={'https://placehold.co/600x400.png'} alt='placeholder' height={400} width={600}></img></div>
      <div className='text-sm text-end  flex flex-col'><div className='text-xl sm:text-2xl font-thin'>Mobile App</div><div className='font-extralight'>React Native, Firebase</div></div>
      </div> 

    </HoverDescription>
      <hr className="opacity-65 sm:mx-20 mx-10 sm:my-0 my-6 " />

      <HoverDescription description='Feedback collection and analytic SaaS' backgroundColor={'blue'}>
   
      <div className='relative flex flex-col sm:flex-row justify-between sm:h-32 sm:items-center cursor-pointer transition-transform duration-300 ease-in-out sm:hover:scale-90 sm:mx-20 mx-10'>
      <div className=' text-3xl sm:text-3xl font-normal'>Survay Snaps</div>
      <div className=' sm:hidden'><img src={'https://placehold.co/600x400.png'} alt='placeholder' height={400} width={600}></img></div>
      <div className='text-sm text-end  flex flex-col'><div className='text-xl sm:text-2xl font-thin'>Fullstack SaaS</div><div className='font-extralight'>Nextjs, Supabase, Next Auth, PostgreSQL</div></div>
      </div> 
      </HoverDescription>
      
      <hr className="opacity-65 sm:mx-20 mx-10 sm:my-0 my-6 " />
     
      <HoverDescription description='Another Project' backgroundColor={'red'}>
      <div className=' flex flex-col sm:flex-row justify-between sm:h-32 sm:items-center cursor-pointer transition-transform duration-300 ease-in-out sm:hover:scale-90 sm:mx-20 mx-10'>
      <div className=' text-3xl sm:text-3xl font-normal'>Survay Snaps</div>
      <div className=' sm:hidden'><img src={'https://placehold.co/600x400.png'} alt='placeholder' height={400} width={600}></img></div>
      <div className='text-sm text-end  flex flex-col'><div className='text-xl sm:text-2xl font-thin'>Android/IOS App</div><div className='font-extralight'>React Native, Firebase</div></div>
      </div>
      </HoverDescription>
      <hr className="opacity-65 sm:mx-20 mx-10 sm:my-0 my-6 " />
 
       </div>
         
        </div>
        <Modal showModal={showModal} onClose={toggleModal} Children={ModalContent} >
      
      </Modal>

        </div>

   
  )
}



const ModalContent : React.FC = () => {

return(
  <div>
    <img src='https://i.ibb.co/zQ3thNC/image.png'  />
    <div className='flex flex-row justify-between mt-4 mx-6 items-center'>
    <a href=''>
    <div className='text-4xl font-bold flex flex-row items-center gap-1'>Cascade UI<IconExternalLink size={38}/></div>
    <div className='text-xl font-thin flex flex-row items-center gap-1'>React Native UI library</div>
    </a>
    <div className='flex flex-row gap-2'>
    <div>Status : </div><p className='text-green-500'> live </p>
    </div>
    
    </div>
    <div className='mx-6 text-justify mt-4'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed augue congue, blandit magna at, placerat eros. Mauris faucibus convallis ex, et efficitur mi placerat a. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Nullam efficitur gravida pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tincidunt 
    mattis ipsum, ut commodo lorem molestie sit amet. Morbi sollicitudin iaculis felis ultrices iaculis. Praesent a tellus vulputate, placerat velit ac, viverra est. Nulla vel porttitor erat. Mauris quis consequat neque. In semper gravida nibh vel commodo. Aenean eu lectus justo. Vestibulum faucibus nibh a dolor auctor tincidunt.
    </div>
  </div>
)
}

export default Projects
