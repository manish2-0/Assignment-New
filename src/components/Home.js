import React from 'react'
import bg from "../bg.png"

const Home = () => {
    return (
        <div className='relative homepage1 min-h-[120vh] overflow-hidden flex flex-col justify-center items-center'>
            {/* <div className='absolute  min-h-screen w-full z-1'></div> */}

            <div className='font-cursive text-5xl sm:text-7xl md:text-8xl text-center text-[#333333]'>
                Authenticity,<br />
                artistry, Asterie

            </div>

            <div className='mt-10 font-nm mb-20 text-[#333333] tracking-wide text-sm mx-4 text-center'>Personalised aesthetics by Dr. Rafael Ekmejian</div>

            <button className='relative firstbt px-10 py-5 font-nm tracking-wider text-sm font-[600] bg-white rounded-full text-[#B7876B] hover:text-gray-100'>SEE OUR TREATMENTS</button>



        </div>
    )
}

export default Home