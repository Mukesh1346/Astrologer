import React from 'react'
import InquiryForm from '../InquiryForm/InquiryForm'
import Image from 'next/image'
import pic1 from '@/app/Assets/Images/Kundali.png'
import './Kundali.css'
import NakshatraCarousel from '../Carousel/Carousel'

export default function Kundali() {
  return (
  <>
  
      <NakshatraCarousel/>
  
  <div className='KundaliMainSec'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">

              <div className='ImageSection'>

              <Image src={pic1} alt="Kundil" className='KundaliImg'/>
              </div>
            </div>
            <div className="col-md-6">
              <InquiryForm/>
            </div>
          </div>
        </div>
    </div>
  
  
  </>
  )
}
