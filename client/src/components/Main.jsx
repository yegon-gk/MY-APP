import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaDiscord,
  FaStackOverflow,
  FaEnvelope,
} from 'react-icons/fa';
// https://tinyurl.com/2yrm9gnm

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover scale-x-[-1"
        src="https://tinyurl.com/2a5l4jtx"
        alt="landing-page-img"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center text-white">
          <h1 className="sm:text-5xl text-4xl text-orange-600 font-bold">
            Hello 👋, I am Yegon G.K.
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 font-semibold">
            I am a
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Full-Stack Developer.',
                2000,
                'Database & API Developer.',
                2000,
                ' Tech Enthusiast.',
                2000,
              ]}
              wrapper="span"
              speed={10}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className="sm:text-1xl text-1xl pt-4 ">
            <p className='text-center leading-none font-normal text-slate-200'>
              I am a seasoned software engineer with years of experience and
              expertise in Software Engineering technologies. Dive into my
              website to discover the magic behind my resume and explore some of
              my captivating projects.
            </p>
          </div>

          <div className="flex justify-between pt-4 max-w-[200px] w-full ">
            <a
              href="mailto:gyegon.ke@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope
                className="cursor-pointer hover:text-orange-700 hover:scale-90 transition duration-300 ease-in-out"
                size={27}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/mryegon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="cursor-pointer hover:text-orange-700 hover:scale-90 transition duration-300 ease-in-out"
                size={27}
              />
            </a>
            {/* <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="cursor-pointer hover:text-orange-700 hover:scale-90 transition duration-300 ease-in-out"
                size={27}
              />
            </a> */}
            {/* <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="cursor-pointer hover:text-orange-700 hover:scale-90 transition duration-300 ease-in-out"
                size={27}
              />
            </a> */}
            {/* <a
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="cursor-pointer hover:text-orange-700 hover:scale-90 transition duration-300 ease-in-out"
                size={27}
              />
            </a> */}
            <a
              href="https://github.com/yegon-gk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="cursor-pointer hover:text-orange-700 hover:scale-90 transition duration-300 ease-in-out"
                size={27}
              />
            </a>
            
            <a
              href="https://stackoverflow.com/users/23611535/yegon-g-k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaStackOverflow
                className="cursor-pointer hover:text-orange-700 hover:scale-90 transition duration-300 ease-in-out"
                size={27}
              />
            </a>
            <a
              href="https://discord.com/channels/@yegon.ke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord
                className="cursor-pointer hover:text-orange-700 hover:scale-90 transition duration-300 ease-in-out"
                size={27}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
