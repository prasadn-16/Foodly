import RestaurantCards from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
const Body = () => {
  const [listOfRestaurants, setListofRestaurant] = useState([])
  const [filterredListOfRestaurants, setFilterredListOfRestaurants] = useState([])
  const [filterBtnName, setFilterBtnName] = useState("Top Rated Restaurants")
  const [searchText, setSeachText] = useState("")
  useEffect(() => {
    fetchData();
  console.log(`UsE EFFECT CALLED`)}, [])
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const apiResList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(apiResList)
    setListofRestaurant(apiResList)
    setFilterredListOfRestaurants(apiResList)
  }

  /* Conditional Rendering with shimmer effect   */
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div div className="body" >
      <div className="filter">
        <form role="search" className='search' onSubmit={(e) => e.preventDefault()}>
          <label className='sr-only' htmlFor="search">Search this site</label>
          <input
            type="search"
            role="searchbox"
            aria-description="search results will appear below"
            id="search"
            className="search-input"
            value={searchText}
            onChange={(e) => setSeachText(e.target.value)}
          />
          <button className='search-btn' onClick={() => {
            const filteredListSearch = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilterredListOfRestaurants(filteredListSearch)
          }
          }>Search</button>
        </form>
        <button className='filter-btn' onClick={() => {
          console.log("clicked")
          filterBtnName === "Top Rated Restaurants" ? setFilterBtnName("Reset") : setFilterBtnName("Top Rated Restaurants")
          const filteredList = listOfRestaurants.filter((res) => {
            return res.info?.avgRating > 4
          })
          filterBtnName === "Reset" ? setFilterredListOfRestaurants(listOfRestaurants) : setFilterredListOfRestaurants(filteredList)

        }
        }>
          {filterBtnName}
        </button>
      </div>
      <div className="res-container ">
        {filterredListOfRestaurants.map((card) => <RestaurantCards key={card.info.id} resCard={card} />)}
      </div>
    </div>
  )
}
export default Body; 