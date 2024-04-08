import { CDN_URL } from "../utils/constants"
const styleCard = {
  backgroundColor: '#f0f0f0',
  padding: "10px"
}

const RestaurantCards = (props) => {/* Destructuring on the fly */
  const { ...resData } = props.resCard;
  const { type, data, subtype } = resData;
  const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = data;
  return (
    <div className="res-card" style={styleCard}>
      <div className="logo-div">
        <img className="res-img" alt="logo" src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>₹ {costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  )
}

export default RestaurantCards;