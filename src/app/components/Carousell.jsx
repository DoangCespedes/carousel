
"use client"

import Leon from '../../../public/leon.jpg';
import Tigre from '../../../public/tigre.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Image from 'next/image'
import { Cardd } from './Cardd';

const Images = [
  {
    className: "d-block w-100",
    src: Leon,
    alt: "First slide"
  },
  {
    className: "d-block w-100",
    src: Tigre,
    alt: "First slide"
  }
]


export const Carousell = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* <Carousel activeIndex={index} onSelect={handleSelect} >
        {Images.map((item)=> (
            <Carousel.Item>
            <Image
            src={item.src}
            width={500}
            height={500}
            alt="primera doang gay"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
       
      </Carousel> */}

      

    </>
  )
}
