import React from 'react'

const Hero2 = () => {
  return (
    <>
 <div className="flex justify-center items-center mb-4">
  <img
    src="group3.webp"
    alt="group3"
    className="p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl"
  />
</div>


     <div className='flex justify-center align-center'>
     <img src="midGroup4.webp" alt="group4" className="p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-3xl" />
     </div>
     <div className="height-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-24 text-white">
      
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        An AI Brain That Connects All Your Tools
        </h1>
        <img
          src="/line1.webp"
          alt="Decorative line"
          className="mx-auto md:mx-0 w-62"
          loading='lazy'
        />
        <p className="text-gray-300 leading-relaxed text-lg">
        Access all the state-of-the-art in one AI Assistant! Integrate with slack or teams, create custom chatbots and AI agents
More powerful and accessible than ChatGPT
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
          src="/group4.webp"
          alt="Decorative group image"
          className="w-full max-w-md mx-auto"
          loading='lazy'
        />
      </div>
    </div>
 </>
  )
}

export default Hero2