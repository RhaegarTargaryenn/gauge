import React from 'react';
import owner from '../Assests/owner.webp';
import {FaWhatsapp} from "react-icons/fa";

function AfterNavBar(){
  return (
       <div className=' flex lg:h-[670px] bg-[#19163a] w-full lg:flex-row  rounded-b-3xl xl:pt-12 lg:pt-14 sm:flex-col md:flex-col'>

             <div className='xl:pl-14 md:flex md:justify-center md:pt-16 lg:pt-4 sm:pt-16 sm:flex sm:justify-center'>
                 <img src={owner}  alt='logo'/>
            </div>


            <div className='lg:pt-10 lg:pl-16 md:flex md:flex-col md:items-center md:mt-10 sm:flex sm:flex-col sm:items-center'>
                <div>
                    <p className='xl:text-[45px] lg:text-[45px] md:text-[60px] text-white font-serif sm:text-[50px] sm:pt-10'>Gauge Water Purifier <br/>
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Puts An End </span>
                    To RO <br/> <span className='md:pl-[18%] sm:pl-[10%]'>Service Pain</span></p>
                </div>

                  <p className='text-gray-300 xl:text-[16px] lg:text-[14px] xl:pt-6 lg:pt-6'>Fully automatic water purifier provides the highest water savings while <br/> <span className='pl-[110px]'>ensuring a seamless service experience.</span></p>

                  <div className='flex'>
                  <button className='xl:mx-[150px] lg:mx-[130px]  bg-blue-600 text-white my-16 md:ml-[250px] w-[200px] md:my h-[70px] rounded-3xl'>Take a product tour</button>
                  <div className='bg-green-500 w-[50px] h-[43px] lg:mt-[59px] xl:ml-[430px] lg:ml-[400px] md:ml-[250px] rounded-3xl lg:fixed text-white text-[30px] lg:pl-2 lg:pt-1 md:pl-2 md:pt-1 md:inline-block sm:hidden'><FaWhatsapp/></div>
                
                  </div>

                  <p className='text-gray-400 xl:text-[16px] lg:text-[14px]'>Experience Convenience Like Never Before With Our Smart Water Purifier</p>
                  
            </div>
              
       </div>
  )
}
export default AfterNavBar;
