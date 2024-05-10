import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
    year: 2024,
    title: 'Lead Full-Stack Developer.',
    duration: '2 Years.',
    details:
      "I successfully developed and implemented a comprehensive social media integration feature for a client's website. This included incorporating icons with hover effects for various platforms, ensuring each icon links to the respective profiles or pages in new tabs. The implementation enhanced user engagement and connectivity.",
  },
  {
    year: 2022,
    title: 'Back-End Developer.',
    duration: '3 Years.',
    details:
      "I successfully developed and implemented a comprehensive social media integration feature for a client's website. This included incorporating icons with hover effects for various platforms, ensuring each icon links to the respective profiles or pages in new tabs. The implementation enhanced user engagement and connectivity.",
  },
  {
    year: 2020,
    title: 'Software Engineer.',
    duration: '3 Years.',
    details:
      "I successfully developed and implemented a comprehensive social media integration feature for a client's website. This included incorporating icons with hover effects for various platforms, ensuring each icon links to the respective profiles or pages in new tabs. The implementation enhanced user engagement and connectivity.",
  },
  {
    year: 2019,
    title: 'Junior Software Engineer.',
    duration: '3 Years.',
    details:
      "I successfully developed and implemented a comprehensive social media integration feature for a client's website. This included incorporating icons with hover effects for various platforms, ensuring each icon links to the respective profiles or pages in new tabs. The implementation enhanced user engagement and connectivity.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="pb-4 text-4xl font-bold text-center text-[#ff6f00]">
        Work Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
