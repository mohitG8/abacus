import React from 'react';

const Hero = () => {
  return (
    <>
    <div className="height-screen flex gap-2 flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 text-white">
      
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          ChatLLM Teams
        </h1>
        <img
          src="/line1.webp"
          alt="Decorative line"
          className="mx-auto md:mx-0 w-62"
          loading='lazy'
        />
        <p className="text-gray-300 leading-relaxed text-lg">
        One AI assistant for you or your team with access to all the state-of-the-art LLMs, web search and image generation.
        </p>
        <button className="px-9 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full transition duration-300">
          Get Started
        </button>
        <p className="text-md text-gray-400">
        $10 per user, billed monthly (first month free, minimum 2 month subscription {' '}
          <a
            href="https://chatllm.abacus.ai/chat_llm_faq?token="
            className="text-blue-400 underline hover:text-blue-500 transition"
          >
            learn more
          </a>
          )
        </p>
      </div>

      
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="/group1.webp"
          alt="Decorative group image"
          className="w-full max-w-md mx-auto"
          loading='lazy'
        />
      </div>
    </div>
    <div className='w-full flex justify-center align-center py-10'>
        <img src="/group2.webp" alt="group2 image" loading='lazy'/>
    </div>
    </>
  );
};

export default Hero;
