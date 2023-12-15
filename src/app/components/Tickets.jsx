"use client"
import "./Style.css"
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Items } from "./data/Items_2.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faTriangleExclamation, faCircleExclamation, faFileLines, faIdCard, faUserPlus} from '@fortawesome/free-solid-svg-icons';

const Tickets = () => {

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
          case 'comments':
            return faComments;
          case 'user':
            return faUser;
          case 'triangle':
            return faTriangleExclamation;
          case 'circle':
            return faCircleExclamation;
          case 'file':
            return faFileLines;
          case 'memoInfo':
            return faFileLines;
          case 'memoCheck':
            return faFileLines;
          case 'idCard':
            return faIdCard;
          case 'usersPlus':
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
                <div className="d-flex justify-content-between"> 
                  {row.map((item, itemIndex) => (
                    <div key={itemIndex} className={`col-md-${12 / itemsPerPage}`}>
                      
                      <div className="contenedor_padre">
                        <div className="contenedor_color" style={{background:`${item.color}`}} > 
                        <FontAwesomeIcon icon={getFontAwesomeIcon(item.icon)} />
                        
                        </div>
                        <div className="contenedor_target">
                            <div>
                                <h5>{item.title}</h5>
                                <p>{item.comentario}</p>
                                <h3><b>{item.numero}</b></h3>
                            </div>
                        </div> 
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

export default Tickets