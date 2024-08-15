import React from 'react';
import ProjectItem from './ProjectItem';
import ajaliImg from '../assets/projects/ajali.png';
import globalImg from '../assets/projects/global.png';
import portfolioImg from '../assets/projects/portfolio.png';
import teslaImg from '../assets/projects/tesla.png';
import yegonhomesImg from '../assets/projects/yegonhomes.png';
import ygnImg from '../assets/projects/ygn.png';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className='pb-4 text-4xl font-bold text-center text-[#ff6f00] '>Projects</h1>
      <p className='text-center leading-none text-slate-700 pb-4'>
        Explore my collection of software engineering projects showcased on this
        page. With a blend of creativity and technical prowess, each project
        represents a unique solution crafted with precision and dedication. Dive
        in to witness firsthand the results of my commitment to excellence.
      </p>
      <div className="grid sm:grid-cols-2 gap-12 ">
        <ProjectItem img={ajaliImg} title='Ajali ' />
        <ProjectItem img={globalImg} title='Global Wander' />
        <ProjectItem img={portfolioImg} title='My Portfolio' />
        <ProjectItem img={teslaImg} title='Tesla Clone App' />
        <ProjectItem img={yegonhomesImg} title='YegonHomes' />
        <ProjectItem img={ygnImg} title='My Portfolio' />
      </div>
    </div>
  );
};

export default Projects;
