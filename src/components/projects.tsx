import HoverDescription from './customCursor';


const Projects = () => {
  return (
    <div className='mt-9'>

      <h1 className='text-3xl sm:text-5xl mx-5 sm:mx-20 mb-5'>Projects</h1>
   
      <div>
      <div className='flex flex-col '> 
    <HoverDescription description='AI Book Summaries App made using google books api and gemini api' backgroundColor='teal' >
      <div className=' flex flex-col sm:flex-row justify-between sm:h-32 sm:items-center cursor-pointer transition-transform duration-300 ease-in-out sm:hover:scale-90 sm:mx-20 mx-10'>
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

        </div>

   
  )
}


export default Projects
