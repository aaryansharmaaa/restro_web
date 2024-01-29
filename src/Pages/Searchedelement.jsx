import React, { useEffect, useState } from 'react'
import searchicon from '../Components/Assets/sear.png';
import { fetchdish } from '../Components/API/ApiCalling';
import searchbanner from '../Components/Assets/searchedbanner.jpeg';
import './Css/searchedelement.css';

const Searchedelement = (props) => {

  const [searchedItem, setSearchedItem] = useState('');
  const [data, setData] = useState('');
  const [defaultdata, setDefaultData] = useState('pasta');

  const clickedItem = () => {
    fetchdish(searchedItem).then((respo) => {
      setData(respo);
      props.setLoader(false);
    })
  }

  useEffect(() => {
    fetchdish(defaultdata).then((respo) => {
      setData(respo)
      props.setLoader(false);
    })
  }, [])

  return (
    <div className='searchedelement'>
      <div className="searchedbannercontainer">
        <img src={searchbanner} alt="" />
      </div>
      <h1>Search you food here</h1>
      <div className="searchedelement-container">
        <div className="searchedelement-input-container">
          <input type="text" onChange={(e) => setSearchedItem(e.target.value)} value={searchedItem} placeholder='Hunger is deadly virus kill it by searching here...' />
        </div>
        <div className="searchedelement-input-icon">
          <img src={searchicon} onClick={() => (clickedItem(searchedItem), props.setLoader(true))} />
        </div>
      </div>
      <div className="searched-api-respo">
        {
          data && data.hits.map((item, index) => (
            <div className="data-api-respo" key={index}>
              <div className="data-api-img">
                <img src={item.recipe.image} />
              </div>
              <div className="data-api-name">
                <span>{item.recipe.label}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Searchedelement
