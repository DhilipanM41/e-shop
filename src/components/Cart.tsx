import { ShopItemsContext } from "../context/ShopContext";
import { useContext } from "react";
import { IProducts } from "../interfaceModels/interfaces";
import { useNavigate } from "react-router-dom";

function CartComponent() {

    const { cartItemsData, addOrRemoveCartItem } = useContext(ShopItemsContext);
    let totalCost = 0;

    const navigate = useNavigate();

    const bindCartItems = () => {
        if (!cartItemsData.length) return (
            <>No records Found</>
        )
        return cartItemsData?.map((items: IProducts) => {
            return <div key={items.product_id} className="cart-items flex space-between">
                <div style={{ width: "80%" }}>
                    <div style={{ width: "15%", float: "left" }}>
                        <img src={items.product_image} className="cart-items-img-size"></img>
                    </div>
                    <div style={{ width: "20%", float: "left" }}>
                        <p>{items.product_name}</p>
                        <p className="bold">${items.product_cost}/-</p>
                    </div>
                </div>
                <div className="cart-list-btn-container">
                    {
                        cartItemsData.some((ele: IProducts) => ele.product_id == items.product_id) ?
                            <div className="flex space-between">
                                <button className="increment-btn" onClick={() => {
                                    addOrRemoveCartItem(items, "decrement");
                                }}>-</button>
                                <p className="count-box border-container">{items.product_count}</p>
                                <button className="increment-btn" onClick={() => {
                                    addOrRemoveCartItem(items, "increment");
                                }}>+</button>
                            </div>
                            :
                            < button className="button" onClick={() => {
                                addOrRemoveCartItem(items, "increment")
                            }}>Add to Cart</button>
                    }
                </div>
            </div>
        })
    }

    const bindSummary = () => {
        return cartItemsData?.map((items: IProducts) => {
            totalCost += (items?.product_count || 0) * items.product_cost;
            return <p key={items.product_id} className="flex space-between"><span>{items.product_name}</span><span>{items?.product_count || 0} x {items.product_cost} = {(items?.product_count || 0) * items.product_cost}</span></p>
        })
    }

    return (
        <>
            <div className="cart-parent-container">
                <h2>Cart Items</h2>
                <div className="cart-items-listing-container">
                    {bindCartItems()}
                </div>

                <div className="summary-items">
                    <h4>Summary</h4>
                    <div>
                        {bindSummary()}
                    </div>
                    <span style={{
                        float: "right",
                        margin: "12px 2px"
                    }}>Total = {totalCost}/-</span>
                </div>

                <button className="button place-order-btn" onClick={() => {
                    navigate("/orders")
                }}>Place Order</button>
            </div >
        </>
    )
}

export default CartComponent;