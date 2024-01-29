import React, { useEffect, useState } from 'react'
import './Offer.css';
import chef from '../Assets/chef.jpg';
import pizza from '../Assets/pizza.jpg';
import offerbuttton from '../Assets/offerbutton.jpg';
import forward from '../Assets/forward.png';
import backward from '../Assets/backward.png';
import studentchef from '../Assets/studentchef.jpg';
import pizzastudent from '../Assets/pizzastudent.jpg'
import pizzaoffer from '../Assets/pizzaoffer.jpg';

const Offer = () => {
      const [current,setCurrent]=useState(0);
      
      const content=[
        {
            heading:'Special offer',
            image1:pizza,
            heading2:"For everyone",
            quote:"Kill your hunger now 20% discount available...!",
            image2:offerbuttton,
            imageright:chef,
        },
        {
            heading:'Student offer',
            image1:pizza,
            heading2:"For Student",
            quote:"Get discount on student id 30% discount available...!",
            image2:pizzastudent,
            imageright:studentchef,
        },
        {
            heading:'Discount cupons available..',
            image1:pizza,
            heading2:"For Party's..",
            quote:"30% discount on order of more than 3500....!",
            image2:offerbuttton,
            imageright:pizzaoffer,
        },
      ]

      const nextIndex=()=>{
        setCurrent((prev)=>{
            if(prev+1===content.length){
                return 0;
            }
            else{
                return prev+1;
            }
        })
      }

      const backIndex=()=>{
         setCurrent((prev)=>{
            if(prev===0){
                return content.length-1;
            }
            else{
                return prev-1;
            }
         })
      }  
        return (
            <div>
                <div className='offer'>
                    <div className="offer-left">
                        <h2>{content[current].heading}</h2>
                        <div className='offer-mid-container'>
                            <p>{content[current].heading2}</p>
                            <img src={pizza} />
                        </div>
                        <p>{content[current].quote}</p>
                        <div className="offer-check">
                            <p>Check Now</p>
                            <img src={content[current].image2}  />
                        </div>
                    </div>
                    <div className="offer-right">
                        <img src={content[current].imageright} />
                    </div>
                    <div className="arrow-container">
                        <img src={forward} className='forward' onClick={nextIndex}/>
                        <img src={backward} className='backward'onClick={backIndex} />
                    </div>
                </div>
            </div>
        )
    }

    export default Offer
