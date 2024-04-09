import RestaurantCards from './RestaurantCard'
import resList from '../utils/mockData.js'
import { useState } from 'react'

console.log(resList)
const Body = () => {
  const [listOfRestaurants, setListofRestaurant] = useState(resList)

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
        {listOfRestaurants.map((card) => <RestaurantCards key={card.data.id} resCard={card} />)}
      </div>
    </div>
  )
}
export default Body;