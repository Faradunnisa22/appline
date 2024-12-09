import React from 'react'
import container1 from '../assets/container1.png'
import container2 from '../assets/container2.png'



const Feature2 = () => {
    const feature2 = [
        { id: 1, title: ' Lorem ipsum dolor.', description: 'Ut ultricies lacus non fermentum ultrices.' },
        { id: 2, title: 'Lorem ipsum dolor.', description: 'Ut ultricies lacus non fermentum ultrices.' },
    ]
    return (
        <div>
                        <div className='mt-36 md:gap-28 md:flex md:mx-52 items-center justify-between mx-3 '>
            <div className='md:w-[1000px] mb-5 '>
                <img src={container1} alt="" />
            </div>
            <div>
                <div>
                    <h1 className='text-neutralPurple mb-3'>Track Audience Activities</h1>
                    <h2 className='md:text-4xl text-2xl font-bold mb-3'>Track Your Audience
                        Activities</h2>
                    <p className='text-gray-500'>Schedule your posts for times when your audience is most active.
                        Choose from our best-time predictions, or create your own
                        publishing schedule.</p>
                    <div className='mt-9'>
                        {
                            feature2.map(feature2 => <div key={feature2.id} className='mt-4 '>
                                <div>
                                    <h4 className='font-bold '>{feature2.title}</h4>
                                    <p className='text-gray-500'>{feature2.description}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                </div>

            </div>

            <div className='mt-36 md:gap-28 md:flex md:mx-52 items-center justify-between mx-3 md:flex-row-reverse '>
            <div className='md:w-[1000px] mb-5 '>
                <img src={container2} alt="" />
            </div>
            <div>
                <div>
                    <h1 className='text-neutralPurple mb-3'>Create Audience Reports</h1>
                    <h2 className='md:text-4xl text-2xl font-bold mb-3'>Know More About Your
                        Audience.</h2>
                    <p className='text-gray-500'>Schedule your posts for times when your audience is most active.
                        Choose from our best-time predictions, or create your own
                        publishing schedule.</p>
                    <button className='mt-6 size-24 w-28 h-10 rounded-b-md  bg-neutralPurple text-white'>Know More</button>

                </div>
                </div>
            </div>

            

        </div>
        
    )
}

export default Feature2