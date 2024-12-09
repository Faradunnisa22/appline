import React from 'react'
import container6 from '../assets/container6.png'
import container7 from '../assets/container7.png'
import container8 from '../assets/container8.png'
import path1 from '../assets/path1.png'
import path2 from '../assets/path2.png'
import path3 from '../assets/path3.png'
import path4 from '../assets/path4.png'
import path5 from '../assets/path5.png'
import path6 from '../assets/path6.png'

const Feature6 =()=>{
const feature6 =  [
    {id:1, title:'Free advertising for your online business', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.', image: container6},
    {id:2, title:'9 simple ways to improve your design skills', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.', image: container7},
    {id:3, title:'Tips to quickly improve your coding speed.', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.', image: container8},
    
    
]

    return (
        <div>
            <div className=' md:mx-52 text-center justify-between items-center '>
                <h2 className='font-bold md:text-3xl  mt-20'>Latest News & Blogs</h2>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae
                <span className='block '>tortor lacus. Phasellus aliquam ante in maximus.</span></p>
                </div>

                <div className='mt-10 grid md:grid-cols-3 grid-cols-1 md:mx-52 items-center justify-between gap-28'>
                {
                    feature6.map(feature6 => <div key={feature6.id} className='px-4 py-8 text-center md:w-[300px] mx-auto rounded-md shadow-lg cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='mb-4 h-14 rounded-tl-3xl w-full mx-auto'>
                                <img src={feature6.image} alt="" />
                            </div >
                            <div className='mt-36'>
                            <h4 className='font-semibold  mt-0  text-2xl mb-2 px-2'>{feature6.title}</h4>
                            <p className='text-sm text-neutral-500 items-center justify-start'>{feature6.description}</p>
                            </div>
                        </div>
                        </div>)
                }
            </div>
            <div className='md:mt-20 md:mx-52 md:grid-cols-3  grid mt-10  items-center justify-between grid-cols-2 gap-6 '>
                <img src={path1} alt="" />
                <img src={path2} alt="" />
                <img src={path3} alt="" />
                <img src={path4} alt="" />
                <img src={path5} alt="" />
                <img src={path6} alt="" />
            </div>
                

            <div className=' md:mx-52 text-center justify-between items-center '>
                <h2 className='font-bold md:text-3xl  mt-20'>Lets Stay Connected</h2>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae
                <span className='block '>tortor lacus. Phasellus aliquam ante in maximus.</span></p>
                </div>

                <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md ">
   

    <form>
      <div className="mb-4 md:mt-0 -mt-96">
        <label className="block text-sm font-medium text-gray-700">Enter your name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Enter your email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Company (optional)</label>
        <input
          type="text"
          placeholder="Company (optional)"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Enter your Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your Phone Number"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <p className="text-sm text-gray-500 mb-4">
        By clicking the contact us button, you agree to our terms and policy.
      </p>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Contact Us
      </button>
    </form>
  </div>
</div>
        </div>
    )
}

export default Feature6
