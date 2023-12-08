"use client"

import Image from 'next/image'
import  {Items}  from "./data/Items.js";
import { Carousel } from 'react-bootstrap';
// import imge from "../../../assets/heroes/"

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

export const Cardd = () => {
    console.log(Items)

    const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

 
  const loaderProp =({ src }) => {
    return src;
}
  return (
    <>
      
          <Carousel activeIndex={index} onSelect={handleSelect} >
            
            {Items.map((item, index) => (
                <Carousel.Item >
                  <div className="card" style={{width: '14rem'}}>
                    <Image
                        key={index}
                        src={item.img} 
                        alt={item.superhero}
                        width={500}
                        height={500}
                        loader={loaderProp}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.superhero}</h5>
                      <p className="card-text" style={{fontSize:'12px'}}>{item.alter_ego} <br/> {item.publisher} <br/> {item.first_appearance}</p>
                      <a href="#" className="btn btn-primary center" style={{alignContent:"center"}}>Back</a>
                    </div>

                  </div>

          
                </Carousel.Item>

          
            ))}

          </Carousel>
     
    </>
  )
}
