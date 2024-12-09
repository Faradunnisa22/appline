import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'


const Feature1 =()=> {
    const feature1 = [
        {id:1, title:'Crafted for App Landing', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.', image: logo1},
        {id:2, title:'High-quality Design', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.', image: logo2},
        {id:3, title:'All Essential Sections', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.', image: logo3},
        {id:4, title:'High-quality Design', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.', image: logo4},
        {id:5, title:'Speed Optimized', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.', image: logo5},
        {id:6, title:'Fully Customizable', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.', image: logo6},
        
    ]
    return (
        <div>
            <div className='text-center justify-between items-center mx-2 '>
                <h2 className='font-bold text-3xl mt-20'>Amazing features for to make
                <span className='block'>your work easier</span></h2>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae
                <span className='block '>tortor lacus. Phasellus aliquam ante in maximus.</span></p>
            </div>

            <div className='mt-28 grid md:grid-cols-3 grid-cols-1 md:mx-52 items-center justify-between gap-28'>
                {
                    feature1.map(feature1 => <div key={feature1.id} className='px-4 py-8 text-center md:w-[300px] mx-auto rounded-md shadow-lg cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='mb-4 h-14 rounded-tl-3xl w-14 mx-auto'>
                                <img src={feature1.image} alt="" />
                            </div>
                            <h4 className='font-semibold text-2xl mb-2 px-2'>{feature1.title}</h4>
                            <p className='text-sm text-neutral-500 items-center justify-start'>{feature1.description}</p>
                        </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Feature1
