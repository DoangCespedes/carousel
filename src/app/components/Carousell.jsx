"use client"

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Items } from "./data/Items.js";
import Image from 'next/image'

export const Carousell = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const itemsPerPage = 5;

  const loaderProp =({ src }) => {
    return src;
}

  return (
    <>

    <div style={{ display:'flex',width: '100%',justifyContent:'center' }}>
      <div style={{display:'flex' , justifyContent:'center',width: '50%'}}>

          <Carousel activeIndex={index} onSelect={handleSelect} interval={null} style={{fontSize:'16px', color:'black'}} pagination={false}>
            {Items.reduce((rows, item, index) => {
              if (index % itemsPerPage === 0) { 
                rows.push([]);
              }
              rows[rows.length - 1].push(item);
              return rows;
            }, []).map((row, rowIndex) => (
              <Carousel.Item key={rowIndex} >
                <div className="d-flex justify-content-between" style={{textAlign: "center", width: '100%', justifyContent:'center', margin:'0 8px 0 8px'}}>
                  {row.map((item, itemIndex) => (
                    <div key={itemIndex} className="card" style={{width:'14rem'}}>
                      <Image
                            style={{width: '100%', height: '220px'}}
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
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
      </div>
    </div>
    </>
  );
};