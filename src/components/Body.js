import RestaurantCards from './RestaurantCard'
import resList from '../utils/mockData'
import { useState, useEffect } from 'react'
const Body = () => {
  const [listOfRestaurants, setListofRestaurant] = useState(resList)
  useEffect(() => {
    fetchData();
  })
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING" + "https://cors-anywhere.herokuapp.com/"
    );
    const json = await data.json();
    const apiResList = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(apiResList)
    setListofRestaurant(apiResList)
  }


  return (
    <div className="body">
      <div className="filter">
        <button className='filter-btn' onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => {
            return res.data?.avgRating > 4
          })
          setListofRestaurant(filteredList)
        }
        }>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container ">
        {listOfRestaurants.map((card) => <RestaurantCards key={card.info.id} resCard={card} />)}
      </div>
    </div>
  )
}
export default Body;