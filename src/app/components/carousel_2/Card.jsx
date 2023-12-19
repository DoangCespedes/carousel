"use client"

import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleExclamation, faFileLines, faUserPlus} from '@fortawesome/free-solid-svg-icons';

import { Items } from "../data/item_3";

export const Card = () => {

    const [index, setIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1100) {
        setItemsPerPage(3);
      } else if (width >= 800) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
  
    useEffect(() => {
      updateItemsPerPage();
      window.addEventListener('resize', updateItemsPerPage);
      return () => {
        window.removeEventListener('resize', updateItemsPerPage);
      };
    }, []);

    const getFontAwesomeIcon = (icon) => {
        switch (icon) {
          case 'user':
            return faUser;
          case 'circle':
            return faCircleExclamation;
          case 'file':
            return faFileLines;
          case 'memoInfo':
            return faFileLines;
          case 'Check':
            return faFileLines;
          case 'users':
            return faUserPlus;
          default:
            return null; 
        }
      };
    
  return (
    <>
        <Carousel 
            activeIndex={index} 
            onSelect={handleSelect} 
            interval={null}
        >
        {Items.reduce((rows, item, index) => {
          if (index % itemsPerPage === 0) {
            rows.push([]);
          }
          rows[rows.length - 1].push(item);
          return rows;
        }, []).map((row, rowIndex) => (
          <Carousel.Item key={rowIndex}>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div className="d-flex "style={{gap:'2rem'}}> 
                  {row.map((item, itemIndex) => (
                    <div key={itemIndex} className={`col-md-${12 / itemsPerPage}`}  >

                        {/* card */}
                        <div style={{height:'14rem', display:'flex', alignItems:'center'}}>
                            
                            <div className='cont_padre' style={{background:'white', width:'16rem', height:'10rem' }}>
                                <div className='cont'>
                                    <div className="circle" style={{background:`${item.color}`, width:'3rem',height:'3rem'}}> <FontAwesomeIcon icon={getFontAwesomeIcon(item.icon)} /></div>       
                                </div>
                                
                                <div className='cont_target'>
                                    <h5>{item.title}</h5>
                                    <h3>{item.numero}</h3>
                                </div>
                                <div className='box_end'>
                                    Mas informacion
                                </div>
                            </div>

                        {/* card */}
                        </div>

                    </div>
                    
                    ))}
                    </div>
    
                </div>
              </Carousel.Item>
            ))}
          </Carousel>            
                    



                    
    </>
  )
}
