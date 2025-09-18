import React from 'react';

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-2">EcoLeap</h3>
            <p className="text-gray-400 max-w-sm">
              Gamifying environmental education to inspire real-world action and build a sustainable future for India.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wider uppercase text-gray-400 text-sm">About</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white">Our Mission</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white">Team</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wider uppercase text-gray-400 text-sm">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0 text-center sm:text-left">
            &copy; {new Date().getFullYear()} EcoLeap. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <SocialIcon>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
            <SocialIcon>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </SocialIcon>
             <SocialIcon>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12.011c0 4.43 3.223 8.11 7.438 8.865.548.1.75-.237.75-.526 0-.26-.01-1.12-.015-2.04-3.134.678-3.794-1.34-3.794-1.34-.498-1.265-1.217-1.6-1.217-1.6-.994-.678.075-.665.075-.665 1.098.077 1.678 1.126 1.678 1.126.976 1.673 2.56 1.19 3.18.91.1-.707.382-1.19.697-1.46-2.428-.275-4.975-1.21-4.975-5.396 0-1.19.426-2.163 1.126-2.925-.112-.277-.49-1.383.108-2.885 0 0 .917-.293 3.004 1.12.87-.242 1.803-.363 2.73-.367.927.004 1.86.125 2.73.367 2.087-1.413 3.004-1.12 3.004-1.12.598 1.502.22 2.608.108 2.885.702.762 1.126 1.735 1.126 2.925 0 4.196-2.552 5.115-4.985 5.385.393.337.745.998.745 2.012 0 1.45-.013 2.62-.013 2.975 0 .29.2.628.756.524C18.78 20.12 22 16.44 22 12.01C22 6.477 17.523 2 12 2z" clipRule="evenodd" /></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;