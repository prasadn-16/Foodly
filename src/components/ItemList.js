import { CDN_URL } from "../utils/constants"
const ItemList = ({ items }) => {
    
    return (
        items.map((item) => (
            <ul className='flex flex-col bg-white items-center w-[450px] mx-auto my-10 shadow-lg shadow-gray-400 p-10 rounded p-3 rounded outline-1 cursor-pointer transition-transform hover:scale-105'
                key={item.card.info.id}
            >
                <li className="rounded flex flex-col relative">
                    <img className="rounded w-[200px] h-[150px]" src={CDN_URL + item.card.info.imageId} alt='logo'></img>
                    <button className="absolute">
                        <span className=" before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
                            <span className="relative text-white font-semibold font-normal">Add +</span>
                        </span>
                    </button>
                </li>
                <li className="text-2xl py-1 antialiased font-medium ">
                    <h3 className="">{item.card.info.name}</h3>
                </li>
                <li className="text-xl py-1 mr-auto pl-1">
                    <h4>₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100} for two</h4>
                </li>
                <li className="text-lg py-1 mr-auto pl-1">Available in stock : {item.card.info.inStock}</li>
                <li className='text-wrap py-2 text-base font-normal pl-1 mr-auto'>{item.card.info.description}</li>
            </ul>
        ))
    );
}
export default ItemList