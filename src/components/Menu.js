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
                <h1 className='menu-title'>{name}</h1>
                <h2 className='menu-subtitle'>Menu</h2>
            </div>
            <div className='bottom-section'>
                {itemCards.map((card) => {
                    return (<ul className='ul-start' key={card.card.info.id}>
                        <div className="card-divider"></div>
                        <li><h3>{card.card.info.name}</h3></li>
                        <li><h4>₹{card.card.info.price / 100 || card.card.info.defaultPrice / 100} for two</h4></li>
                        <li className='stock'>Available in stock : {card.card.info.inStock}</li>
                        <li className='desc'>{card.card.info.description}</li>
                    </ul>)
                })}

            </div>
        </div>
    )
}
export default Menu;