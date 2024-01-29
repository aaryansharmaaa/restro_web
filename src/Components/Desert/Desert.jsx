import React, { useEffect, useState } from 'react'
import './Desert.css';
import desert1 from '../Video/desert1.mp4';
import desert2 from '../Video/desert2.mp4';
import desert3 from '../Video/desert3.mp4';

const desertcont=[
    {
        video:desert1,
        quote:"Grab a wine glass after the dinner..."
    },
    {
        video:desert2,
        quote:"Get the delecious burger in the begning..."
    },
    {
        video:desert3,
        quote:"Serving up some sweet happiness"
    }
]


const Desert = () => {
    const [currentIndex,setCurrentIndex]=useState(0);
    useEffect(()=>{
        
        const interval=setInterval(()=>{
            setCurrentIndex((prev)=>{
                if(prev+1===desertcont.length){
                    return 0;
                }
                else{
                    return prev +1;
                }
            })
        },5000)
        {
            return ()=>{
                clearInterval(interval);
            }
        }
        
    },[])
    return (
    <div className='desert'>
        <h1>Deserts</h1>
        <hr />
        <div className="desert-parent">
        <video src={desertcont[currentIndex].video} autoPlay loop muted controls={false}/>
        <div className="desert-content">
            <p>{desertcont[currentIndex].quote}</p>
            <span>Get desert free on order of more then 3500</span>
            <button>Get Now</button>
        </div>
        </div>
    </div>
  )
}

export default Desert
