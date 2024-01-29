import React, { useEffect, useState } from 'react'
import './Css/NonVeg.css';
import downward from '../Components/Assets/downwardarrow.png';
import { fetchdish } from '../Components/API/ApiCalling';
import Item from '../Components/Item/Item';
import Relateditem from '../Components/Relateditem/Relateditem';

const Veg = (props) => {
    const [data, setData] = useState();
    const [query, setQueary] = useState('veg');

    useEffect(() => {
        props.setLoader(true);
        fetchdish(query).then((respo) => {
            setData(respo);
            props.setLoader(false);
        })
    }, []);

    return (
        <div className='nonveg'>
            <div className="nonveg-banner">
                <img src={props.banner} />
            </div>
            <div className="nonveg-item-container">
                <div className="nonveg-item-childcontainer">
                    <div className="nonveg-heading">
                        <p>Showing</p>
                        <p>12 item</p>
                        <span>Out of Available </span>
                    </div>
                    <div className="nonveg-showmore">
                        <p>Show More</p>
                        <img src={downward} />
                    </div>
                </div>
            </div>
            <div className="nonvegitem-container">
                {
                    data && data.hits.map((item, index) => (
                        <Item key={index} image={item.recipe.image} name={item.recipe.label}  />
                    ))
                }

            </div>
            <div className="nonveg-footer">
                <div className="footer-explore">
                    <p>Explore More</p>
                </div>
            </div>
            <div className="nonveg-related-item">
                <Relateditem />
            </div>
        </div>

    )
}
<h1></h1>
export default Veg

