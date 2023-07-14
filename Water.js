import React from 'react'
import { BsCheckLg } from 'react-icons/bs';
import {FiShield} from 'react-icons/fi';
import water from '../Assests/water.webp';

function Water(){
  return (
    <div className='lg:flex lg:flex-row mt-16 md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse'>


         <div className=' ml-[70px] mt-[40px]'>


             <div className=' w-[300px] h-[20px] shadow-black border-gray-300 ml-16 '>
                 <div className='flex border border-gray-200 rounded-3xl shadow-2xl shadow-blue-600'>
                 <span className=' text-blue-300 pl-[2px] pr-1  mt-1 pb-1'><FiShield/></span>
                 <div className=' lg:text-[17px] pl-2 pb-1'>Customers Needs Above All Else</div>
                 </div>
             </div>


             <div className='mt-7 '>
              <p className='text-black text-[40px] font-bold'>Take Control<span className='text-red-500'><br/>Monitor Usage & Change <br/> Filters </span><br/>No Technician Needed</p>
             </div>

             <div className='text-gray-400 text-[16px] mt-5'>
              <p>We have crafted a product that addresses the real frustrations of a<br/> customer. The first step is to ensure there are zero service delays.</p>
             </div>

             <div className='flex mt-4'>
             <div className='bg-green-300 rounded-full h-[17px] w-[17px] mt-1'>
             <span className='text-white pl-3'><BsCheckLg/></span>
             </div>
              <div className='pl-6 font-medium text-[20px]'>Smart Water Purifier With Self Servicing Capability</div>
             </div>
               <div className='text-gray-400 text-[16px] pl-10 pt-4'>
                <p>Say goodbye to the hassle of scheduling a technician for purifier <br/> maintenance with our self-replacing filters.</p>
               </div>


               <div className='flex mt-4'>
             <div className='bg-green-300 rounded-full h-[17px] w-[17px] mt-1'>
             <span className='text-white'><BsCheckLg/></span>
             </div>
              <div className='pl-6 font-medium text-[20px]'>Compensation For Service Delays</div>
             </div>
               <div className='text-gray-400 text-[16px] pl-10 pt-4'>
                <p>You are entitled to a compensation of 100 Rs/Day if service is<br/> delayed for more than 24 hours.</p>
               </div>

               <button className='bg-blue-500 text-white my-10 w-[300px] h-[60px] rounded-3xl lg:ml-[170px] md:ml-[310px] text-[16px] font-medium border-black border border-x-1 border-y-1'>Next: Smart Water Conversation </button>
             



         </div>


         <div className='pl-16 md:w-[740px] lg:w-[500px]'>
            <img src={water} alt='water' />
         </div>
    
    
  </div>
  )
}

export default Water;
