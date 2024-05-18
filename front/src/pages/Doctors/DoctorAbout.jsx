import React from 'react'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About 
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                    Mujeeb-ur-Rehman Ansari
                </span>
            </h3>
            <p className='text__para'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Accusantium harum assumenda cupiditate, quibusdam 
                 delectus eveniet deserunt perferendis dolorem soluta placeat
                  possimus non, dolorum consequatur modi, neque fuga illo.
                   Earum, dolores?
            </p>
        </div>
        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor 
            font-semibold flex items-center '>Education</h3>
            <ul className="pt-4 md:p-5">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5  mb-[30px[">
                   <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>23 june ,2008</span>
                    <p className='text-[16px]  leading-6 font-medium text-textColor'>PHD in Surgeon </p>
                    </div>
                    <p className='text-[14px] leading-5  font-medium text-textColor'>New Apollo  hospital,New York</p>
                    
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5  mb-[30px[">
                   <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>23 june ,2008</span>
                    <p className='text-[16px]  leading-6 font-medium text-textColor'>PHD in Surgeon </p>
                    </div>
                    <p className='text-[14px] leading-5  font-medium text-textColor'>New Apollo  hospital,New York</p>
                    
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout