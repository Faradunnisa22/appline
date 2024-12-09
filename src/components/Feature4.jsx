import React from 'react'
import { Carousel } from "flowbite-react";
import 'flowbite/dist/flowbite.min.css';
import container from '../assets/container.png'
import container1 from '../assets/container1.png'
import container2 from '../assets/container2.png'
import link3 from '../assets/link3.png'
import link2 from '../assets/link2.png'


const Feature4 = () => {
    return (
        <div>
            <div className='md:mx-52 '>
                <div className='mt-28 text-center items-center justify-between'>
                    <h2 className='font-bold text-4xl'>Download Appline Now &
                        Get started for free.</h2>
                    <p className=' mt-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span className='block'> In convallis tortor eros. Donec</span>
                        <span > vitae tortor lacus. Phasellus aliquam ante in</span>
                        maximus.</p>
                </div>
                <div className="h-56 md:-mt-0 -mt-72   sm:h-64 xl:h-80 px-14 2xl:h-96 max-w-screen-2xl min-h-screen">
                    <Carousel className='relative '>
                        <div className="flex h-full  items-center justify-center  ">
                            <div  >
                                <img src={container1} alt="" />
                            </div>
                            <div className='hidden md:block' >
                                <img src={container2} alt="" />
                            </div>
                            <div className='hidden md:block'>
                                <img src={container} alt="" />
                            </div>
                        </div>
                        <div className="flex h-full items-center justify-center">
                            <div className='hidden md:block' >
                                <img src={container1} alt="" />
                            </div>
                            <div>
                                <img src={container2} alt="" />
                            </div>
                            <div className='hidden md:block'>
                                <img src={container} alt="" />
                            </div>
                        </div>
                        <div className="flex h-full items-center justify-center">
                            <div className='hidden md:block'>
                                <img src={container1} alt="" />
                            </div>
                            <div className='hidden md:block'>
                                <img src={container2} alt="" />
                            </div>
                            <div>
                                <img src={container} alt="" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>


            <div className='md:mt-2 -mt-72 mx-5 text-sm md:text-base'>
                <div className=' md:w-auto w-72 md:flex md:flex-row-reverse md:mt-6 items-center justify-between sm:flex-col-reverse'>
                    <img src={container} alt="" className='  md:w-96 md:mr-64' />
                    <div className='text-black font-medium md:mx-52 '>
                        <h2 className='text-3xl'>Download Appline
                            <span className='block'>Now & Get started
                                for free. </span></h2>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Nullam
                            lacus risus, molestie id
                            condimentum ut, semper vitae.</p>

                        <div className='mt-10 md:flex items-center justify-between '>
                            <div className='md:mt-0 items-center justify-between'>
                                <img src={link2} alt="" />
                            </div>
                            <div className='flex items-center md:ml-3 mt-5 '>
                                <img src={link3} alt="" />

                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature4
