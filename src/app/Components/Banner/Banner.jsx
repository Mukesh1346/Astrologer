import React from 'react'
import Websitebanner from '@/app/Assets/Images/Websitebanner.jpg'
import Image from 'next/image'
import './banner.css'

export default function Banner() {
  return (
    <>
      <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="Bgimage">
              <Image src={Websitebanner} alt="Banner" />
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
