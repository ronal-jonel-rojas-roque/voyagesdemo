import React from 'react'
import './sectionseven.css'
import img1 from '../../../assets/images/slider/img_1.jpg'
import img2 from '../../../assets/images/slider/img_2.jpg'
import img4 from '../../../assets/images/slider/img_4.jpg'
import img3 from '../../../assets/images/slider/img_3.jpg'

export default function SectionSeven() {
  return (
    <div>
      <div className="div-content-seven">
        <div className="div-imagescontent">
          <div className="div-img">
            <img src={img1} alt="alt1" />
          </div>
          <div className="div-img">
            <img src={img2} alt="alt2" />
          </div>

          <div className="div-img">
            <img src={img3} alt="alt3" />
          </div>
          <div className="div-img">
            <img src={img4} alt="alt4" />
          </div>
        </div>
      </div>
    </div>
  )
}
