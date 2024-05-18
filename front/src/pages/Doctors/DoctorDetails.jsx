
import doctorImg from './../../assets/Image/doctor-img02.png'
import  starIcon from './../../assets/Image/Star.png'
import { useState } from 'react';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
const DoctorDetails = () => {
const [Tab, setTab] = useState('About');

  return <section>
    <div className='max-w-[1170px] px-5 mx-auto'>
      <div className='grid md:grid-cols-3 gap-[50px]'>
        <div className='md:col-span-2'>
          <div className="flex items-center gap-5">
            <figure className='max-w-[200px] max-h-[200px]'>
              <img src={doctorImg} className='w-full'/>
            </figure>
            <div>
              <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:px-6 text-[12px]
              leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon </span>
              <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Mujeeb </h3>
              <div className='flex item gap-[6px]'>
                <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                lg:leading-7 font-semibold text-headingColor'>
                  <img src={starIcon} />4.8
                </span>
                <span className='text-[14px] leading-5 lg:text-[16px]
                lg:leading-7 font-semibold text-textColor'>
                  (272)
                  </span>
              </div>

              <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              </p>
            </div>
          </div>

          <div className="mt-[50px] boorder-b border-solid border-[#0066ff34] ">
            <button className={`${Tab=='About' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
             onClick={()=>setTab('About')}>About</button>

           <button onClick={()=>setTab('Feedback')} className={`${Tab=='Feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>Feedback</button>
          </div>

          <div className='mt-[50px] '>
            {
              Tab=='About' && <DoctorAbout/>
            }
            {
              Tab=='Feedback' && <Feedback/>
            }
          </div>


        </div>
        <div></div>
      </div>
    </div>
    </section>
}

export default DoctorDetails