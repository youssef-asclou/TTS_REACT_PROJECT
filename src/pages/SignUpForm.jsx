import React from 'react'
import { Check } from 'lucide-react';
import Header from '../components/header'

const SignUpForm = () => {

  
  return (
    
    <div>
        <Header gotstarted={true}></Header>
        <div className='my-10 lg:my-0 flex flex-col justify-center items-center font-[Poppins] lg:flex-row lg:mx-4'> 

            {/* <Header ></Header> */}

            {/* title area for form */}
            <div className='flex flex-col justify-center items-center xl:block '> {/*md:hidden*/}
                <div className='lg:block hidden lg:mb-24'>
                  <p className='text-black leading-9  w-[450px] mb'>Get the full experience for </p>
                  <h1 className='text-green-700 text-4xl leading-9 font-bold w-[450px] '>0$ today</h1>
                  <h1 className=' font-semibold text-2xl text-gray-500 leading-9  w-[450px]  mb-8 '>Transform Your Words into Lifelike Speech.</h1>
                </div>
                
                {/* subtitles */}
                <div className='max-w-[650px] lg:-mt-16 '>
                  <div className='flex justify-center py-1 px-7'>
                    <Check /><p className='font-normal text-lg  leading-7 ml-3'>Explore optimized voices for narration, training, and announcements.</p>
                  </div>
                  <div className='flex justify-center py-1 px-7'>
                    <Check /><p className='font-normal text-lg  leading-7 ml-3'>	 Access a smooth audio player, compatible with all your devices.</p>
                  </div>
                  <div className='flex justify-center py-1 px-7'>
                    <Check /><p className='font-normal text-lg leading-7 ml-3 '>Easily convert your documents and content into audio formats.</p>
                  </div>
                </div>
            </div>

            {/* sign up form */}
            <div className=' py-3  flex justify-center items-center flex-col   bg-[#FAF6F4] rounded-3xl w-10/12 max-w-[550px]'>   
                <h1 className='my-1 mt-4 font-semibold text-3xl'>Sign up</h1>
                <p className='my-3'>Already Have An Account? <a href="#" className='font-semibold text-[#6366F1]'>Log in</a></p>
                
                <div className='flex flex-col w-11/12 my-3'>
                    
                    <input 
                        type='text'
                        className='font-light border-gray-500 border-2 border-gray rounded-md p-3 mt-1 bg-transparent'
                        placeholder="First name *"/>
                </div>

                <div className='flex flex-col w-11/12 my-3'>
                    
                    <input 
                        type='text'
                        className='font-light border-gray-500 border-2 border-gray rounded-md p-3 mt-1 bg-transparent'
                        placeholder="Name *"/>
                </div>

                <div className='flex flex-col w-11/12 my-3'>
                    
                    <input 
                        type='text'
                        className='font-light border-gray-500 border-2 border-gray rounded-md p-3 mt-1 bg-transparent'
                        placeholder="Emial address *"/>
                </div>

                <div className='flex flex-col w-11/12 my-3'>
                    
                    <input 
                        type='text'
                        className=' font-light border-gray-500 border-2 border-gray rounded-md p-3 mt-1 bg-transparent'
                        placeholder="Passsword (8 characters minimum) *"/>
                </div>
                
                <button className='rounded-full my-4 bg-[#0040EA] w-11/12 p-4 text-white font-semibold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform' >Register</button>
                
                <button className=' mb-4 w-11/12 rounded-full flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 text-gray-700 font-medium text-lg border-2 border-black '>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                        <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                        <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                        <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                    </svg>
                    Sign in with Google
                </button>
            </div>

        </div>
    </div>
  )
}

export default SignUpForm