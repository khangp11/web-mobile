import React from 'react'

const SwiperMostsales = () => {
    return (
        <>
            <div className='flex mt-1 mb-2'>
                <h1 className='text-2xl ml-2'>Most sales</h1>
                <h2 className='mt-2 ml-40'>26 plances</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.0} stroke="currentColor" className="w-4 h-4 ml-2 mt-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className='flex grid grid-cols-3 gap-4 bg-white shadow-2xl border-none mt-2' >
                <div className='flex-1'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBChphWO2JX5bKpW3kViexcy8Lz1kbE_5MA&usqp=CAU" alt="" />
                </div>
                <div className='flex-1 ml-2 col-span-2'>
                    <p className='text-base'><b>Famous Dave's Bar-B-Que</b></p>
                    <p className='text-sm mr-1'>Vegetarian • Indian • Pure veg</p>
                    <div className='flex mt-3 ml-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className='ml-1 text-sm'>15-30 min</p>
                    </div>
                    <div className='flex w-26 h-9'>
                        <span className='bg-red-700 rounded-lg mt-2 mb-2 text-sm text-slate-50'>OFFER</span>
                        <samp className='text-sm m-2'>65% off</samp>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
    )
}

export default SwiperMostsales