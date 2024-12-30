import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex gap-4 justify-center items-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Have Questions?</h2>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            ChatLLM FAQ
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg text-center md:text-left mb-6 md:mb-0">
            <p>Copyright © 2024 Abacus.AI. All Rights Reserved</p>
          </div>

    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-right">
            
            <div>
              <h3 className="font-bold text-lg mb-2">Products</h3>
              <ul className="space-y-1">
                <li>ChatLLM</li>
                <li>AI Agents And RAG</li>
                <li>Forecasting and Planning</li>
                <li>Marketing and Sales AI</li>
                <li>Anomaly Detection</li>
              </ul>
            </div>

           
            <div>
              <h3 className="font-bold text-lg mb-2">Products</h3>
              <ul className="space-y-1">
                <li>Language AI</li>
                <li>Vision AI</li>
                <li>Discrete Optimization</li>
                <li>Predictive Modeling</li>
                <li>Personalization AI</li>
                <li>LLM + ML Ops</li>
              </ul>
            </div>

          
            <div>
              <h3 className="font-bold text-lg mb-2">Company</h3>
              <ul className="space-y-1">
                <li>About Us</li>
                <li>Culture</li>
                <li>Press</li>
                <li>Case Studies</li>
                <li>Jobs</li>
                <li>Terms of Service</li>
                <li>Privacy</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Contact Us</h3>
              <ul className="flex justify-center md:justify-end space-x-4">
                <li>
                  <a href="#" aria-label="Twitter">
                    <img
                      src="/twitter.svg"
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="LinkedIn">
                    <img
                      src="/linkedin.svg"
                      alt="LinkedIn"
                      className="w-6 h-6"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
