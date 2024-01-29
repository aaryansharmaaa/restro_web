import React, { useEffect, useState } from 'react'
import './KidsSpecial.css';
import { fetchdish } from '../API/ApiCalling';
import Item from '../Item/Item';



const KidsSpecial = (props) => {
    const [query, setQuery] = useState('famous');
    const [data, setData] = useState();

    useEffect(() => {
        props.setLoader(true)
        fetchdish(query).then((respo) => {
            setData(respo)
            props.setLoader(false)
        })
    }, []) 
    return (
        <div className='kids-section'>
            <h1>Famous</h1>
            <hr />
            <div className="kids-container">
                {
                    data && data.hits.map((item,index)=>(
                       <Item key={index} image={item.recipe.image} name={item.recipe.label}/>
                    ))
                }
            </div>
        </div>
    )
}

export default KidsSpecial
