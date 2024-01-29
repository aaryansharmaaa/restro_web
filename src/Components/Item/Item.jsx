import React from 'react'
import './Item.css';

const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.image} />
            <div className="namecontainer">
                <p>{props.name}</p>
            </div>
        </div>
    )
}
export default Item
