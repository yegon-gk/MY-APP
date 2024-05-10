import React from 'react';

function ProjectItem({ img, title }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-400 to-[#ff8c00]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-slate-200 tracking-wider text-center">
          {title}
        </h3>
        <a href="/">
            <p className='text-center p-3 rounded-lg bg-white text-slate-600 font-bold cursor-pointer text-lg'>Live link</p>
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
