import { CDN_URL } from "../utils/constants"

const RestaurantCards = (props) => {/* Destructuring on the fly */
  const { ...resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = resData.resCard.info;
  return (
    <div className="res-card">
      <div className="logo-div">
        <img className="res-img" alt="logo" src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  )
}

export default RestaurantCards;