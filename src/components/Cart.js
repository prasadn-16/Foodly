import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log("Cart Component", cartItems)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        //Dispatch an action
        dispatch(clearCart())
        console.log("Action", clearCart())
    }
    return (
        <>
            <div className="text-center m-5 p-4">
                <h1 className="text-5xl py-1 antialiased font-medium">Cart</h1>
            </div>
            <div className="flex flex-col">
                <button className="p-2 rounded-lg bg-black text-white shadow-lg absolute" onClick={handleClearCart}>
                    Clear 🛒
                </button>
                {cartItems.length === 0 ? <h2 className="text-2xl py-1 antialiased text-center font-medium">Please add Items</h2> : ""}
                <ItemList items={cartItems} status={true}></ItemList>
            </div>
        </>
    )
}
export default Cart; 