import React from 'react';

function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md" action='https://script.google.com/macros/s/AKfycbxFwm1LQj5luVOXzPgi2xfyv48Z9zSHBEm74N_gxT8hMGN16oeHAfL8sUbynjEk9LNE/exec'>
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Contact Us</h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" name="name" htmlFor="name">
              Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="John Doe" />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" name="email" htmlFor="email">
              Email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="johndoe@example.com" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" name="message" htmlFor="message">
              Message
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none" id="message" placeholder="Enter your message here"></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
