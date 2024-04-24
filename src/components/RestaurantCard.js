import { CDN_URL } from "../utils/constants"

const RestaurantCards = (props) => {/* Destructuring on the fly */
  const { ...resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId, sla } = resData.resCard.info;
  return (
    <div className="rounded w-[360px] flex items-stretch flex-col justify-between gap-2 p-4 hover:shadow-2xl transition-transform hover:scale-105 hover:shadow-red-900 ">
      <div className="">
        <img className="h-56 w-full rounded" alt="logo" src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <h3 className="text-lg font-bold ">{name}</h3>
      <h4 className="text-lg">{cuisines.join(', ')}</h4>
      <h4 className="text-lg">{avgRating} ⭐</h4>
      <h4 className="text-lg">{costForTwo}</h4>
      <h4 className="text-lg font-semibold">{sla.slaString}</h4>
    </div>
  )
}

export default RestaurantCards;
