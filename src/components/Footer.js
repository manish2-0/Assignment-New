import React from 'react'

const Footer = () => {
    return (
        <div className=' relative bg-[#333333] py-6'>
            <div className='flex flex-col md:flex-row justify-between items-start mx-3 md:mx-8 px-3'>
                <div className='w-full md:w-2/5'>
                    <h2 className='py-3 border-b border-[#6D6D6D] text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest'>Contact Us</h2>


                    <div className='flex items-center justify-between'>
                        <p className=' w-1/3 text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest my-3 whitespace-wrap'><i class="fa-solid fa-phone "></i> Call Us</p>
                        <p className='w-2/3 text-white text-base uppercase my-3 cursor-pointer'>
                            02 9055 6222</p>
                    </div>

                    <div className='flex items-start justify-between'>
                        <p className='w-1/3 text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest my-3 whitespace-wrap'><i class="fa-solid fa-location-dot"></i> St IVES Clinic</p>
                        <p className='w-2/3 text-white text-base uppercase my-3 cursor-pointer'>
                            G6 / 177 MONA VALE ROAD ST IVES, NSW 2075</p>
                    </div>

                    <div className='flex items-start justify-between'>
                        <p className='w-1/3 text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest my-3 whitespace-wrap'><i class="fa-solid fa-location-dot"></i> Miranda Clinic</p>
                        <p className='w-2/3 text-white text-base uppercase my-3 cursor-pointer'>
                            SUITE 406/533 KINGSWAY MIRANDA NSW 2228</p>
                    </div>






                </div>


                <div className='w-full md:w-2/5 flex items-start justify-between'>

                    <div className='w-1/2 md:w-2/5 pr-2'>
                        <h2 className='py-3 border-b border-[#6D6D6D] text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest'>Sections</h2>

                        <ul className=''>
                            <li className='text-white text-base uppercase my-3 cursor-pointer'>About Us</li>
                            <li className='text-white text-base uppercase my-3 cursor-pointer'>Treatments</li>
                            <li className='text-white text-base uppercase my-3 cursor-pointer'>Pricing</li>
                            <li className='text-white text-base uppercase my-3 cursor-pointer'>Contact</li>
                            <li className='text-white text-base uppercase my-3 cursor-pointer'>Blog</li>
                        </ul>


                    </div>

                    <div className='w-1/2 md:w-2/5 pl-2'>
                        <h2 className='py-3 border-b border-[#6D6D6D] text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest'>Procedures</h2>

                        <ul className=''>
                            <li className='text-white text-base uppercase my-3 cursor-pointer'>Body</li>
                            <li className='text-white text-base uppercase my-3 cursor-pointer'>dermal Fillers</li>
                            <li className='text-white text-base uppercase my-3 cursor-pointer'>Face</li>
                            <li className='text-white text-base uppercase my-3 cursor-pointer'>Skin</li>
                        </ul>




                    </div>


                </div>
            </div>


            <div className='flex flex-col md:flex-row justify-between items-center mx-3 md:mx-8 px-3'>
                <div className='w-full md:w-1/2 m-2 flex flex-col md:flex-row justify-start items-center'>
                    <ul className='flex items-center justify-center'>
                        <li className='relative z-20 hcircle h-16 w-16 md:h-20 md:w-20 bg-[#ffeee6] rounded-full mx-3 flex justify-center items-center text-base text-gray-500 hover:text-xl'><i class="fa-brands fa-facebook"></i></li>
                        <li className='relative z-20 hcircle h-16 w-16 md:h-20 md:w-20 bg-[#ffeee6] rounded-full mx-3 flex justify-center items-center text-base text-gray-500 hover:text-xl'><i class="fa-brands fa-instagram"></i></li>
                        <li className='relative z-20 hcircle h-16 w-16 md:h-20 md:w-20 bg-[#ffeee6] rounded-full mx-3 flex justify-center items-center text-base text-gray-500 hover:text-xl'><i class="fa-brands fa-youtube"></i></li>
                    </ul>
                    <p className='text-[#6D6D6D] mx-3 mt-3 md:my-0'>&copy; 2023 | <span className='hover:text-[#ffeee6] transition-all'>Disclaimer</span></p>
                </div>

                <div className='w-full h-fit md:w-1/2 m-2 flex justify-center  items-center flex-wrap'>
                    <ul className='flex justify-center items-center flex-wrap'>
                        <li className=' text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest cursor-pointer hover:text-[#ffeee6] transition-all'>FAQs </li>
                        <span className=' text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest mx-1'> | </span>
                        <li className=' text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest cursor-pointer hover:text-[#ffeee6] transition-all'> Privacy Policy </li>
                        <span className=' text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest mx-1'> | </span>
                        <li className=' text-[#6D6D6D] font-nm uppercase font-bold text-sm tracking-widest cursor-pointer hover:text-[#ffeee6] transition-all'> Terms and Conditions </li>


                    </ul>

                </div>


            </div>




        </div>
    )
}

export default Footer