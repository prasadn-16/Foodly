import { useState } from 'react'
import ShimmerMenu from './ShimmerMenu'
import { useParams } from 'react-router-dom'
import useMenu from '../utils/useMenu'
import RestaurantCategory from './RestaurantCategory'
const Menu = () => {
    // URL Parameter or ID of restaurant
    const { resId } = useParams()
    const resInfo = useMenu(resId) //custom Hook
    const [showIndex, setShowIndex] = useState(0)

    if (resInfo === null) return <ShimmerMenu />
    const { name, avgRatingString, cuisines
    } = resInfo?.cards[2]?.card?.card?.info
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    // console.log("first", cards)
    const categoRies = cards.filter((c) => c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    // console.log(categoRies)
    return (
        <div className="menu">
            <div className='top-section'>
                <h1 className='text-5xl text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 '>
                    <span className="shadow-inner ring ring-pink-500 ring-offset-4 ring-offset-slate-50 rounded">{name}</span>
                </h1>
                <h2 className='text-3xl text-center my-8'>Menu</h2>
            </div>
            <div className='bottom-section transition-all ease-out duration-300'>
                {categoRies.map((category, index) => (
                    // controlled component
                    <RestaurantCategory
                        key={category?.card?.card.title}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}
export default Menu;