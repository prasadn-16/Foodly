import ItemList from './ItemList'
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex()
    }
    return (
        <div className="rounded w-6/12 mx-auto my-4 text-2xl font-semibold bg-gray-200 shadow-lg p-4 cursor-pointer">
            <div className="flex justify-between" onClick={handleClick}>
                <span>{data.title} <span className="font-light">({data.itemCards.length})</span></span>
                <span>{showItems ? '⬆️' : '⬇️'}</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}

        </div>
    )
}
export default RestaurantCategory;