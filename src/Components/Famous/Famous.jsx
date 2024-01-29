import React, { useEffect, useState } from 'react'
import { fetchdish } from '../API/ApiCalling';
import Item from '../Item/Item';
import './Famous.css';

const Famous = (props) => {
    const [queary, setQueary] = useState('indian')
    const [data, setData] = useState();

    useEffect(() => {
        props.setLoader(true)
        fetchdish(queary).then((resp) => {
            setData(resp)
            props.setLoader(false)
        })
    }, []);

    return (
        <div className='famous-container'>
            <h1> Special Indian</h1>
            <hr />
            <div className="item-container">
                {
                    data && data.hits.map((item, index) => (
                        <Item key={index} image={item.recipe.image} name={item.recipe.label} />
                    ))
                }
            </div>
        </div>
    )
}

export default Famous
