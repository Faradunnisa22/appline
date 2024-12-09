import React from 'react'
import container from '../assets/container.png'
import link1 from '../assets/link1.png'
import border from '../assets/border.png'

const Home =()=> {
    return (
        <div className='mt-2  mx-5 text-sm md:text-base'>
            <div className=' md:w-auto w-72 md:flex md:flex-row-reverse md:mt-6 items-center justify-between flex-col-reverses'>
                    <img src={container} alt="" className='  md:w-96 md:mr-64'/>
            <div className='text-black font-medium  '>
                        <h2 className=''>Ready to Use Tailwind CSS Web <span className=''>Template.</span></h2>
                        <h1 className='font-semibold text-2xl mt-4'>Tailwind Template for<span className='block text-neutralPurple '>App & Software</span><span>Site.</span></h1>
                        <p className='mt-4 text-gray-400'>All in one Tailwind CSS site template for - App <span className='block'>and Software sites Comes with all essential</span><span className=''>components.</span></p>

                <div className='mt-10 md:flex  '>
                        <div className='mt-5 '>
                            <img src={link1} alt="" />
                        </div>
                        <div className='flex items-center '>
                            <img src={border} alt="" />
                            <p className='ml-6'>Watch Demo <span className='block'>See how it works</span></p>
                        </div>
                    </div>
                    </div>
                    <div>
                </div>
            </div>
        </div>
    //     <div className="mt-8  flex items-center justify-between md:mx-36 text-sm md:flex-row-reverse md:text-lg ">
    //   {/* Left side - Phone image */}
    //   <div className="w-1/2 flex justify-center ">
    //     <img src={container} alt="Phone" className="w-3/4" />
    //   </div>

   
    //                      <div className='md:mt-60  md:-ml-[200px] lg:-ml-[900px] md:mx-14 '>
    //                          <img src={link} alt="" />
    //                    </div>
    //   <div className="w-1/2  ">
    //   {/* Right side - Text content */}
    //     <h2 className="text-black font-medium sm:block">
    //       Ready to Use Tailwind CSS Web Template.
    //     </h2>
    //     <h1 className="font-semibold text-3xl mt-4">
    //       Tailwind Template for <span className="text-neutralPurple">App & Software</span> Site.
    //     </h1>
    //     <p className="lg:mt-4  text-gray-400">
    //       All in one Tailwind CSS site template for App and Software sites. Comes with all essential 
    //       <span>components.</span>
    //     </p>
    //     <div className=" ml-64 mt-10 flex items-center">
    //       <img src={border} alt="Demo Icon" className="mr-2" />
    //       <p className="text-gray-500">Watch Demo
    //       <span className="block text-gray-500 ">See how it works</span></p>
    //     </div>
    //   </div>
    // </div>
    )
}

export default Home
