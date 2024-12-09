import React from 'react'
import author1 from '../assets/author1.png'
import author2 from '../assets/author2.png'
import author3 from '../assets/author3.png'
import author4 from '../assets/author4.png'

const Feature5=()=> {
    return (
        <div>
             <div className='md:mx-52
           mt-32 items-center justify-between text-center '>
                
                <h2 className='font-bold text-5xl'>What Client's <span className='block'>Say</span></h2>
                <p className='text-gray-500 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec <span className='block'>vitae
                tortor lacus. Phasellus aliquam ante in maximus.</span></p>
            </div>



            <div className="grid md:mx-52 grid-cols-1 sm:grid-cols-2 gap-8 p-8 bg-gray-100">
  {/* <!-- Testimonial 1 --> */}
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
    <img
      className="w-16 h-16 rounded-full"
      src={author1}
      alt="Musharof Chowdhury"
    />
    <h3 className="mt-4 font-semibold text-lg">Musharof Chowdhury</h3>
    <p className="text-sm text-gray-500">Web Entrepreneur</p>
    <div className="flex items-center mt-2">
      <span className="text-yellow-500 text-lg font-bold">5.0</span>
      <div className="flex ml-2 text-yellow-500">
        ★★★★★
      </div>
    </div>
    <p className="mt-4 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      dignissim nisi a odio laoreet luctus.
    </p>
  </div>

  {/* <!-- Testimonial 2 --> */}
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
    <img
      className="w-16 h-16 rounded-full"
      src={author2}
      alt="Naimur Rahman"
    />
    <h3 className="mt-4 font-semibold text-lg">Naimur Rahman</h3>
    <p className="text-sm text-gray-500">Product Designer</p>
    <div className="flex items-center mt-2">
      <span className="text-yellow-500 text-lg font-bold">5.0</span>
      <div className="flex ml-2 text-yellow-500">
        ★★★★★
      </div>
    </div>
    <p className="mt-4 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      dignissim nisi a odio laoreet luctus.
    </p>
  </div>

  {/* <!-- Testimonial 3 --> */}
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
    <img
      className="w-16 h-16 rounded-full"
      src={author3}
      alt="Devid Miller"
    />
    <h3 className="mt-4 font-semibold text-lg">Devid Miller</h3>
    <p className="text-sm text-gray-500">App Developer</p>
    <div className="flex items-center mt-2">
      <span className="text-yellow-500 text-lg font-bold">5.0</span>
      <div className="flex ml-2 text-yellow-500">
        ★★★★★
      </div>
    </div>
    <p className="mt-4 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      dignissim nisi a odio laoreet luctus.
    </p>
  </div>

  {/* <!-- Testimonial 4 --> */}
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
    <img
      className="w-16 h-16 rounded-full"
      src={author4}
      alt="Justin Fernandes"
    />
    <h3 className="mt-4 font-semibold text-lg">Justin Fernandes</h3>
    <p className="text-sm text-gray-500">SEO Expert</p>
    <div className="flex items-center mt-2">
      <span className="text-yellow-500 text-lg font-bold">5.0</span>
      <div className="flex ml-2 text-yellow-500">
        ★★★★★
      </div>
    </div>
    <p className="mt-4 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      dignissim nisi a odio laoreet luctus.
    </p>
  </div>
</div>


<div className=' md:mx-52 text-center justify-between items-center '>
                <h2 className='font-bold md:text-3xl  mt-20'>Frequently Asked
                <span className='block'> Questions</span></h2>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae
                <span className='block '>tortor lacus. Phasellus aliquam ante in maximus.</span></p>

                <div className="space-y-4">
      {/* <!-- Question 1 --> */}
      <div className="p-4 border rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <p className="text-gray-800 font-medium">Lorem ipsum dolor sit amet, consectetur.</p>
          <span className="text-gray-600">+</span>
        </div>
      </div>

      {/* <!-- Question 2 --> */}
      <div className="p-4 border rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <p className="text-gray-800 font-medium">Lorem ipsum dolor sit amet, consectetur.</p>
          <span className="text-gray-600">+</span>
        </div>
      </div>

      {/* <!-- Question 3 --> */}
      <div className="p-4 border rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <p className="text-gray-800 font-medium">Lorem ipsum dolor sit amet, consectetur.</p>
          <span className="text-gray-600">+</span>
        </div>
      </div>
            </div>
</div>
        </div>
    )
}

export default Feature5
