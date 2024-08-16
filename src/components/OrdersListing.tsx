import { ShopItemsContext } from "../context/ShopContext";
import { useContext } from "react";
import { IProducts } from "../interfaceModels/interfaces";

function OrderListingComponent() {
    const { cartItemsData } = useContext(ShopItemsContext);

    const calculateOverAllCost = () => {
        let sum = 0;
        cartItemsData.forEach((element: IProducts) => {
            sum += element.product_cost * (element.product_count || 1)
        });
        return sum;
    }

    let totalCost = calculateOverAllCost();

    const bindOrderListing = () => {
        if (!cartItemsData.length) return <div>No records Found</div>
        let randomOrderID = (Math.random() + 1).toString(32).substring(10);
        return <div className="order-card-container border-container b-shad-container">
            <div className="flex space-between">
                <p>Order Id: #{randomOrderID}</p>
                <p>Total: ${totalCost}/-</p>
            </div>
            <h4>Items</h4>
            {cartItemsData?.map((items: IProducts) => {
                totalCost += (items?.product_count || 0) * items.product_cost;
                return <div className="cart-items order-cart-items flex space-between border-container">
                    <div style={{ width: "80%" }}>
                        <div style={{ width: "15%", float: "left" }}>
                            <img src={items.product_image} className="cart-items-img-size"></img>
                        </div>
                        <div style={{ width: "20%", float: "left" }}>
                            <p>{items.product_name}</p>
                            <p className="bold">${items.product_cost}/-</p>
                        </div>
                    </div>
                    <div className="cart-list-btn-container calc-box">
                        <span>{items?.product_count || 0} x {items.product_cost} = {(items?.product_count || 0) * items.product_cost}</span>
                    </div>
                </div>
            })}
        </div>
    }


    return (
        <>
            <div className="container">
                <h3 style={{ marginLeft: "10px" }}>Orders </h3>
                {bindOrderListing()}
            </div>
        </>
    )
}

export default OrderListingComponent;