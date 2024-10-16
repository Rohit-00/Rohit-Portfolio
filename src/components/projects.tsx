import HoverDescription from './customCursor';
import { useState } from 'react';
import Modal from './modal';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconExternalLink } from '@tabler/icons-react';

interface project {
  image         ?: string,
  projectName   ?: string,
  projectLink   ?: string,
  projectType   ?: string,
  projectTech   ?: string,
  projectStatus ?: boolean,
  projectDesc   ?: string,
  githubLink    ?: string
}

const projects = [
  {
    image         : 'https://i.ibb.co/zQ3thNC/image.png',
    projectName   : 'Cascade UI',
    projectLink   : 'https://cascadeui.pages.dev',
    projectType   : 'React Native Component Library',
    projectTech   : 'React Native, React, Reanimated ',
    projectStatus : true,
    projectDesc   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed augue congue, blandit magna at, placerat eros. Mauris faucibus convallis ex, et efficitur mi placerat a. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Nullam efficitur gravida pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tincidunt mattis ipsum, ut commodo lorem molestie sit amet. Morbi sollicitudin iaculis felis ultrices iaculis. Praesent a tellus vulputate, placerat velit ac, viverra est. Nulla vel porttitor erat. Mauris quis consequat neque. In semper gravida nibh vel commodo. Aenean eu lectus justo. Vestibulum faucibus nibh a dolor auctor tincidunt.",
    hoverText     : "A react native ui library",
    githubLink    : ""

  },
  {
    image         : 'https://i.ibb.co/zQ3thNC/image.png',
    projectName   : 'After Reads',
    projectLink   : 'https://cascadeui.pages.dev',
    projectType   : 'An AI based book summarizing app',
    projectTech   : 'React Native, firebase, Google Books API',
    projectStatus : false,
    projectDesc   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed augue congue, blandit magna at, placerat eros. Mauris faucibus convallis ex, et efficitur mi placerat a. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Nullam efficitur gravida pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tincidunt mattis ipsum, ut commodo lorem molestie sit amet. Morbi sollicitudin iaculis felis ultrices iaculis. Praesent a tellus vulputate, placerat velit ac, viverra est. Nulla vel porttitor erat. Mauris quis consequat neque. In semper gravida nibh vel commodo. Aenean eu lectus justo. Vestibulum faucibus nibh a dolor auctor tincidunt.",
    hoverText     : "A react native ui library",
    githubLink    : ""

  },
  {
    image         : 'https://i.ibb.co/zQ3thNC/image.png',
    projectName   : 'Feedback',
    projectLink   : 'https://cascadeui.pages.dev',
    projectType   : 'React Native Component Library',
    projectTech   : 'React Native, React, Reanimated ',
    projectStatus : true,
    projectDesc   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed augue congue, blandit magna at, placerat eros. Mauris faucibus convallis ex, et efficitur mi placerat a. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Nullam efficitur gravida pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tincidunt mattis ipsum, ut commodo lorem molestie sit amet. Morbi sollicitudin iaculis felis ultrices iaculis. Praesent a tellus vulputate, placerat velit ac, viverra est. Nulla vel porttitor erat. Mauris quis consequat neque. In semper gravida nibh vel commodo. Aenean eu lectus justo. Vestibulum faucibus nibh a dolor auctor tincidunt.",
    hoverText     : "A react native ui library",
    githubLink    : ""

  },
  
]

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<project>({})
  const toggleModal = () => setShowModal(!showModal);

  const ModalContent : React.FC  = () => {

    return(
      <div>
        <img src={currentProject.image}  />
        <div className='flex justify-between mt-4 mx-6 items-center'>
        <a href={currentProject.projectLink}>
        <div className='sm:text-4xl text-3xl font-semibold flex flex-row items-center gap-1'>{currentProject.projectName}<IconExternalLink className='size-9'/></div>
        <div className='text:text-xl text-base font-thin flex flex-row items-center gap-1'>{currentProject.projectType}</div>
        <div className='font-thin text-sm m-0'>  Technology Used : {currentProject.projectTech} </div> 
        </a>
       
        <div className='flex flex-col items-end gap-1'>

        <div className='flex  gap-2'> 
        <div>Status : </div>{currentProject.projectStatus === true ? <p className='text-green-500'>live</p> : <p className='text-red-500'>undeployed</p>}
        </div>
        <a href=''>
        <div className='dark:bg-gray-900 p-2 rounded-full'><IconBrandGithub/></div>
        </a>
        </div>
        </div>
      
        
        <div className='mx-6 text-justify'>
         
          <br/>
          {currentProject.projectDesc}
       </div>
      </div>
    )
    }


  return (
    <div className='mt-9'>

      <h1 className='text-3xl sm:text-5xl mx-5 sm:mx-20 mb-5'>Projects</h1>
   
      <div>
      <div className='flex flex-col '> 
      {projects.map((item)=>{

      return(
       <>
      <HoverDescription description={item.hoverText} backgroundColor='teal'> 
      <div onClick={()=>{toggleModal();setCurrentProject(item)}} className=' flex flex-col sm:flex-row justify-between sm:h-32 sm:items-center cursor-pointer transition-transform duration-300 ease-in-out sm:hover:scale-90 sm:mx-20 mx-10'>
      <div className=' text-3xl sm:text-3xl font-normal'>{item.projectName}</div>
      <div className=' sm:hidden'><img src={'https://placehold.co/600x400.png'} alt='placeholder' height={400} width={600}></img></div>
      <div className='text-sm text-end  flex flex-col'><div className='text-xl sm:text-2xl font-thin'>{item.projectType}</div>
      <div className='font-extralight'>{item.projectTech}</div></div>
      </div> 
      </HoverDescription>
      <hr className="opacity-65 sm:mx-20 mx-10 sm:my-0 my-6 " />
      <Modal showModal={showModal} onClose={toggleModal} Children={ModalContent}/>
       </>
      
      )
    })}
 
       </div>        
        </div>
        </div>
  )
}

export default Projects
