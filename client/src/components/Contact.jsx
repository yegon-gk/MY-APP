import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#ff6f00] ">
        Contact Me
      </h1>
      <p className="text-center leading-none text-slate-700 pb-4">
        Fill this form and submit to get in touch with me. I will most
        defenitively reply back to you.
      </p>
      <form action="https://getform.io/f/nbvvdwlb" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm  py-2">Full Names:</label>
            <input
              className="border-2 rounded-lg p-1 flex border-slate-600"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm  py-2">Phone Number:</label>
            <input
              className="border-2 rounded-lg p-1 flex border-slate-600"
              type="text"
              name="phone"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm  py-2">Email:</label>
            <input
              className="border-2 rounded-lg p-1 flex border-slate-600"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2 ">
            <label className="uppercase text-sm  py-2">Subject:</label>
            <input
              className="border-2 rounded-lg p-1 flex border-slate-600"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm  py-2">Message:</label>
            <textarea
              className="border-2 rounded-lg p-1 border-slate-600"
              rows="10"
              name="message"
              id=""
            ></textarea>
          </div>
        </div>
        <button className="bg-[#ff6f00] text-slate-300 mt-4 w-full p-2 rounded-lg">
          Submit Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
