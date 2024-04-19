import { CDN_URL } from "../utils/constants"

const RestaurantCards = (props) => {/* Destructuring on the fly */
  const { ...resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId, sla } = resData.resCard.info;
  return (
    <div className="res-card">
      <div className="logo-div">
        <img className="res-img" alt="logo" src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <h3 className="res-cardname">{name}</h3>
      <h4 className="res-cuisine">{cuisines.join(', ')}</h4>
      <h4 className="res-rating">{avgRating} ⭐</h4>
      <h4 className="costtwo">{costForTwo}</h4>
      <h4 className="res-sla">{sla.slaString}</h4>
    </div>
  )
}

export default RestaurantCards;
