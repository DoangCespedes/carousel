"use client"
import { FaBeer } from 'react-icons/fa';
import "./Style.css"
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Items } from "./data/Items_2.js";

const Tickets = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const itemsPerPage = 4;
    
  return (
    <>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {Items.reduce((rows, item, index) => {
          if (index % itemsPerPage === 0) {
            rows.push([]);
          }
          rows[rows.length - 1].push(item);
          return rows;
        }, []).map((row, rowIndex) => (
          <Carousel.Item key={rowIndex}>
            <div className="d-flex justify-content-between">
              {row.map((item, itemIndex) => (
                <div key={itemIndex} >
                  {/* Tu contenido del card */}
                  <div className="contenedor_padre">
                    <div className="contenedor_color" style={{background:`${item.color}`}} > <FaBeer/></div>
                    <div className="contenedor_target">
                        <div style={{}}>
                            <h5>{item.title}</h5>
                            <p>{item.comentario}</p>
                            <h3><b>{item.numero}</b></h3>
                        </div>
                    </div> 
                </div>
            </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>





        

       
    </>
  )
}

export default Tickets