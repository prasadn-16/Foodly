import RestaurantCards from './RestaurantCard'
import resList from '../utils/mockData.js'



const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container ">
      {resList.map((card)=><RestaurantCards key={card.data.id} resCard={card}/>)}
      </div>
    </div>
  )
}

export default Body;