import ShimmerMenu from './ShimmerMenu'
import { useParams } from 'react-router-dom'
import useMenu from '../utils/useMenu'
const Menu = () => {
    // URL Parameter or ID of restaurant
    const { resId } = useParams()
    const resInfo = useMenu(resId) //custom Hook

    if (resInfo === null) return <ShimmerMenu />
    const { name, avgRatingString, cuisines
    } = resInfo?.cards[2]?.card?.card?.info
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards)
    return (
        <div className="menu">
            <div className='top-section'>
                <h1 className='text-5xl text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 '>
                    <span className="shadow-inner ring ring-pink-500 ring-offset-4 ring-offset-slate-50 rounded">{name}</span>
                </h1>
                <h2 className='text-3xl text-center my-8'>Menu</h2>
            </div>
            <div className='bottom-section'>
                {itemCards.map((card) => {
                    return (
                        <ul className='flex flex-col w-[450px] mx-auto my-10 shadow-lg shadow-red-900 p-10 rounded p-3 rounded bg-gradient-to-r from-pink-500 to-yellow-500 cursor-pointer transition-transform hover:scale-105'
                            key={card.card.info.id}
                        >
                            <li className="text-2xl py-2 antialiased font-medium ">
                                <h3 className="">{card.card.info.name}</h3>
                            </li>
                            <li className="text-xl py-2 ">
                                <h4>₹{card.card.info.price / 100 || card.card.info.defaultPrice / 100} for two</h4>
                            </li>
                            <li className="text-lg py-2">Available in stock : {card.card.info.inStock}</li>
                            <li className='text-wrap py-2 text-base'>{card.card.info.description}</li>
                        </ul>
                    )
                })}

            </div>
        </div>
    )
}
export default Menu;