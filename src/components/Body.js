import RestaurantCards, { withPureVegLabel } from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from "react-router-dom"
const Body = () => {
  const [listOfRestaurants, setListofRestaurant] = useState([])
  const [filterredListOfRestaurants, setFilterredListOfRestaurants] = useState([])
  const [filterBtnName, setFilterBtnName] = useState("Top Rated Restaurants")
  const [searchText, setSeachText] = useState("")
  const RestaurantCardVeg = withPureVegLabel(RestaurantCards)
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const apiResList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofRestaurant(apiResList)
    setFilterredListOfRestaurants(apiResList)
    // console.log(apiResList)
  }
  console.log("body Cards", listOfRestaurants)

  /* Conditional Rendering with shimmer effect   */
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div div className="body font-sans">
      <div className="flex justify-around my-5">
        <form role="search" className='flex gap-4' onSubmit={(e) => e.preventDefault()}>
          <label className='sr-only' htmlFor="search">Search this site</label>
          <input
            className="placeholder:italic placeholder:text-slate-400 border-solid  block bg-white border-black-300 border-opacity-65 border rounded py-2 pl-9 pr-3 shadow focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
            type="search"
            role="searchbox"
            aria-description="search results will appear below"
            id="search"
            value={searchText}
            onChange={(e) => setSeachText(e.target.value)}
          />
          <button className='px-7 text-white rounded-full bg-[#DC6B19]' onClick={() => {
            const filteredListSearch = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilterredListOfRestaurants(filteredListSearch)
          }
          }>Search</button>
        </form>
        <button className='text-white px-10 rounded-full bg-[#DC6B19]' onClick={() => {
          // console.log("clicked")
          filterBtnName === "Top Rated Restaurants" ? setFilterBtnName("Reset") : setFilterBtnName("Top Rated Restaurants")
          const filteredList = listOfRestaurants.filter((res) => {
            return res.info?.avgRating > 4.3
          })
          filterBtnName === "Reset" ? setFilterredListOfRestaurants(listOfRestaurants) : setFilterredListOfRestaurants(filteredList)

        }
        }>
          {filterBtnName}
        </button>
      </div>
      <div className="flex flex-wrap gap-4 my-8">
        {
          filterredListOfRestaurants.map((card) =>
            <Link className="flex " key={card.info.id} to={"/restaurants/" + card.info.id} >
              {card?.info?.veg ? <RestaurantCardVeg resCard={card} /> : <RestaurantCards resCard={card} />}
            </Link>
          )
        }
      </div>
    </div>
  )
}
export default Body; 