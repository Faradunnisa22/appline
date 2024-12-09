import React from 'react'
import logo7 from '../assets/logo7.png'
import logo8 from '../assets/logo8.png'


const Feature3=()=> {
    const feature3 =[
        { id: 1, title: ' Install the App', description:'Lorem ipsum dolor sit ame consectetur adipiscing elit. In convallis tortor.',image:logo7 },
        { id: 2, title: 'Setup your profile', description: 'Lorem ipsum dolor sit ame consectetur adipiscing elit. In convallis tortor.',image:logo8 },
    ]
    return (
        <div>
            <div className='md:mx-52
           mt-32 items-center justify-between text-center '>
                
                <h2 className='font-bold text-5xl'>How <span className='block'>it Works?</span></h2>
                <p className='text-gray-500 mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec <span className='block'>vitae
                tortor lacus. Phasellus aliquam ante in maximus.</span></p>
            </div>

            <div className='mt-28 grid md:grid-cols-2 grid-cols-1 md:mx-52 items-center justify-between gap-28'>
                {
                    feature3.map(feature3 => <div key={feature3.id} className='px-4 py-8 text-center md:w-[300px] mx-auto rounded-md shadow-lg cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='mb-4 h-14 rounded-tl-3xl w-14 mx-auto'>
                                <img src={feature3.image} alt="" />
                            </div>
                            <h4 className='font-semibold text-2xl mb-2 px-2'>{feature3.title}</h4>
                            <p className='text-sm text-neutral-500 items-center justify-start'>{feature3.description}</p>
                        </div>
                        </div>)
                }
            </div>

            <div>
                <div className='md:mx-52  mt-28 text-center items-center justify-between'>
                    <h3 className='text-4xl font-bold'>Choose Your Plan</h3>
                    <h2 className='text-2xl font-semibold'>Enjoy the features!</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className='block'>In convallis tortor eros. Donec  vitae
                    tortor </span>lacus. Phasellus aliquam ante in maximus.</p>
                </div>

                <div className="w-full max-w-4xl mx-auto">
    {/* <!-- Toggle for Monthly/Yearly --> */}
    <div className="flex justify-center mb-8">
      <div className="flex items-center bg-gray-200 rounded-full p-1">
        <button className="py-2 px-6 bg-white rounded-full text-gray-700">Monthly</button>
        <button className="py-2 px-6 text-gray-500">Yearly</button>
      </div>
    </div>

    {/* <!-- Pricing Plans --> */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* <!-- Free Plan --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Free</h3>
        <p className="text-gray-500 mb-6">Lorem Ipsum is simply dummythe.</p>
        <p className="text-3xl font-bold mb-6">$0 <span className="text-lg font-medium">/month</span></p>
        <ul className="mb-6">
          <li className="flex items-center mb-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            60-day chat history
          </li>
          <li className="flex items-center mb-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            15 GB cloud storage
          </li>
          <li className="flex items-center mb-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            24/7 Support
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            Custom Branding Strategy
          </li>
        </ul>
        <button className="w-full bg-gray-800 text-white py-2 px-4 rounded">Choose Plan</button>
      </div>

      {/* <!-- Unlimited Plan --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
        <h3 className="text-xl font-bold mb-4 flex justify-between">
          <span>Unlimited</span>
          <span className="text-sm text-blue-600">Most popular</span>
        </h3>
        <p className="text-gray-500 mb-6">Lorem Ipsum is simply dummythe.</p>
        <p className="text-3xl font-bold mb-6">$35 <span className="text-lg font-medium">/month</span></p>
        <ul className="mb-6">
          <li className="flex items-center mb-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            60-day chat history
          </li>
          <li className="flex items-center mb-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            35 GB cloud storage
          </li>
          <li className="flex items-center mb-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            24/7 Support
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            Custom Branding Strategy
          </li>
        </ul>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded">Choose Plan</button>
      </div>
    </div>
  </div>
  <div className="items-center justify-between  md:mx-[600px] md:mt-20 md:w-[400px]">
      {/* <!-- Free Plan --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <h3 className="text-xl font-bold mb-4">Business</h3>
        <p className="text-gray-500 mb-6">Lorem Ipsum is simply dummythe.</p>
        <p className="text-3xl font-bold mb-6">$59<span className="text-lg font-medium">/month</span></p>
        <ul className="mb-6">
          <li className="flex items-center mb-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            60-day chat history
          </li>
          <li className="flex items-center mb-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            15 GB cloud storage
          </li>
          <li className="flex items-center mb-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            24/7 Support
          </li>
          <li className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" /></svg>
            Custom Branding Strategy
          </li>
        </ul>
        <button className="w-full md:w-[300px] bg-gray-800 text-white py-2 px-4 rounded">Choose Plan</button>
      </div>
      </div>
      </div>
            
        </div>
    )
}

export default Feature3
