import HoverDescription from './customCursor';
import { useState } from 'react';
import Modal from './modal';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconExternalLink } from '@tabler/icons-react';

interface project {
  image?: string;
  projectName?: string;
  projectLink?: string;
  projectType?: string;
  projectTech?: string;
  projectStatus?: boolean;
  projectDesc?: string;
  githubLink?: string;
  hoverText?: string;
  hoverColor?: string;
}

const projects = [
  {
    image: 'https://i.ibb.co/zQ3thNC/image.png',
    projectName: 'Cascade UI',
    projectLink: 'https://cascadeui.pages.dev',
    projectType: 'React Native Component Library',
    projectTech: 'React Native, React, Reanimated ',
    projectStatus: true,
    projectDesc: 'A UI Library for React Native consists of beautiful and animated components. Components are made with Reanimated (some uses gesture handler). Components can be installed by two ways, first is to manually copy and paste the code and second one involves downloading the npm package of the c',
    hoverText: 'A react native ui library with animated components',
    hoverColor: '#0077FF',
    githubLink: 'https://github.com/Rohit-00/cascade',
  },
  {
    image: 'https://i.ibb.co/ZRYfC0b6/image-2025-03-27-153659598.png',
    projectName: 'After Reads',
    projectLink: 'https://play.google.com/store/apps/details?id=com.rohit965.bookapp',
    projectType: 'Android App',
    projectTech: 'React Native, Expo, Supabase, google gemini, google books API',
    projectStatus: true,
    projectDesc: 'After Reads is an android app that provides book summaries using AI(Gemini 2.0 flash). I am using google books API to fetch book data and provide search functionality and gemini 2.0 flash to summarize the book',
    hoverText: 'AI Book Summary Android App',
    hoverColor: '#01C796',
    githubLink: 'https://github.com/Rohit-00/After-Reads',
  },
  {
    image: 'https://i.ibb.co/nshSc0cR/image-2025-03-27-153806613.png',
    projectName: 'Hourglass',
    projectLink: 'https://play.google.com/store/apps/details?id=com.rohit965.tickdown&pli=1',
    projectType: 'Android App',
    projectTech: 'React Native, Expo, Sqlite',
    projectStatus: true,
    projectDesc:'Hourglass is an android app that tells you how much time is left for the day to end. You can add tasks that you have done and sort them in productive and unproductive categories to reflect on your daily routine.',
    hoverText: 'Daily Journaling Android App',
    hoverColor: '#536DBC',
    githubLink: 'https://github.com/Rohit-00/hourglass',
  },
  {
    image: 'https://i.ibb.co/dpSbzTv/image-2025-01-05-213521344.png',
    projectName: 'Trivia Time',
    projectLink: 'https://www.reddit.com/r/TriviaTimeEvent/',
    projectType: 'A community-based Trivia Game',
    projectTech: 'Devvit,Redis,Opentdb',
    projectStatus: true,
    projectDesc : 'Trivia Time is a game that I made for the reddit games hackathon.It is a community based trivia game where everyone gets 5 attempts(every event) to answer 5 trivia questions and everytime they answer one correct it adds a point to the community goal.',
    hoverText: 'A Community based trivia game made with devvit',
    hoverColor: '#D93A00',
    githubLink: 'https://github.com/Rohit-00/Devvit-Trivia',
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<project>({});
  const toggleModal = () => setShowModal(!showModal);

  const ModalContent: React.FC = () => {
    return (
      <div
      className='p-3 sm:p-6'
        style={{ fontFamily: 'Helvetica', maxWidth: '80vw', overflowY: 'auto', backgroundColor:'#0A0A0A'}}
      >
        <img
          src={currentProject.image}
          className="object-contain w-full"
          style={{ maxHeight: '50vh' }}
        />
        <div className="flex justify-between mt-4 sm:mx-6 items-start">
          <a href={currentProject.projectLink} target='_blank'>
            <div className="sm:text-4xl text-3xl font-semibold flex flex-row items-center gap-1">
              {currentProject.projectName}
              <IconExternalLink className="size-9" />
            </div>
            <div className="text:text-xl text-base font-thin flex flex-row items-center gap-1">
              {currentProject.projectType}
            </div>
            <div className="font-thin text-sm m-0">Technology Used : {currentProject.projectTech} </div>
          </a>

          <div className="flex flex-col items-end gap-1">
            <div className="flex gap-2">
              <div>Status: </div>
              {currentProject.projectStatus === true ? (
                <p className="text-green-500">live</p>
              ) : (
                <p className="text-red-500">undeployed</p>
              )}
            </div>
            <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer">
              <div className="dark:bg-gray-900 p-2 rounded-full">
                <IconBrandGithub />
              </div>
            </a>
          </div>
        </div>

        <div className="sm:mx-6 text-justify">
          <br />
          {currentProject.projectDesc}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-9" style={{ fontFamily: 'Helvetica' }}>
      <h1 className="text-3xl sm:text-6xl mx-5 sm:mx-20 mb-1">Projects</h1>

      <div>
        <div className="flex flex-col ">
          {projects.map((item) => {
            return (
              <>
                <HoverDescription description={item.hoverText} backgroundColor={item.hoverColor}>
                  <div
                    onClick={() => {
                      toggleModal();
                      setCurrentProject(item);
                    }}
                    className=" flex flex-col sm:flex-row justify-between sm:h-32 sm:items-center cursor-pointer transition-transform duration-300 ease-in-out sm:hover:scale-90 sm:mx-20 mx-10"
                  >
                    <div className=" text-3xl sm:text-3xl font-normal">{item.projectName}</div>
                    <div className=" sm:hidden">
                      <img src={item.image} alt="placeholder" height={400} width={600} />
                    </div>
                    <div className="text-sm text-end  flex flex-col">
                      <div className="text-xl sm:text-2xl font-thin">{item.projectType}</div>
                      <div className="font-extralight">{item.projectTech}</div>
                    </div>
                  </div>
                </HoverDescription>
                <hr className="opacity-65 sm:mx-20 mx-10 sm:my-0 my-6 " />
                <Modal showModal={showModal} onClose={toggleModal}>
                  <ModalContent />
                </Modal>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;