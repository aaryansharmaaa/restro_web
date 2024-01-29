import React, { useEffect, useState } from 'react'
import './Relateditem.css';
import { fetchdish } from '../API/ApiCalling';
import Item from '../Item/Item';
const Relateditem = () => {

    const [data,setData]=useState();
    const [query,seQuery]=useState('desert');

    useEffect(()=>{
      fetchdish(query).then((respo)=>{
        setData(respo);
      })
    },[])


  return (
    <div className='relateditem'>
      <h1>Desert</h1>
      <hr />
      <div className="relatedcontainer">
        {
            data && data.hits.slice(0,4).map((item,index)=>{
                return <Item key={index} name={item.recipe.label} image={item.recipe.image}/>
            })
        }
      </div>
      

      
    </div>
  )
}

export default Relateditem
