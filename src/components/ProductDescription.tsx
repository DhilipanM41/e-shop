import { useContext } from "react";
import { ShopItemsContext } from "../context/ShopContext";
import { IProducts } from "../interfaceModels/interfaces";
import { Link, useLocation } from "react-router-dom";

function ProductDesctiptionComponent() {

    const { cartItemsData, addOrRemoveCartItem } = useContext(ShopItemsContext);
    const pathLocate = useLocation();

    const stateData = pathLocate?.state;
    let extractObj = {
        product_id: stateData?.product_id,
        product_name: stateData?.product_name,
        product_image: stateData?.product_image,
        product_cost: stateData?.product_cost,
    }
    let productData = cartItemsData?.find((item: IProducts) => item.product_id == stateData.product_id) || extractObj;


    return (
        <>
            {stateData ?
                <div className="container w-100">
                    <Link to="/products"><img src="images/back.png" alt="back" className="back-icon" /></Link>
                    <h3 style={{ marginLeft: "40px" }}>{stateData.categoryName} / {productData.product_name}</h3>
                    <div className="flex">
                        <div className="prod-left-container border-container">
                            <img src={productData.product_image} alt="product" className="product-img-size" />
                        </div>
                        <div className="prod-left-container">
                            <h4>{productData.product_name}</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <h4 className="pt-10">${productData.product_cost}/-</h4>

                            {
                                cartItemsData.some((ele: IProducts) => ele.product_id == productData.product_id) ?
                                    <div className="increment-btn-container flex space-between w-30">
                                        <button className="increment-btn" onClick={() => {
                                            addOrRemoveCartItem(productData, "decrement")
                                        }}>-</button>
                                        <p className="count-box border-container">{productData.product_count}</p>
                                        <button className="increment-btn" onClick={() => {
                                            addOrRemoveCartItem(productData, "increment")
                                        }}>+</button>
                                    </div>
                                    :
                                    < button className="button" onClick={() => {
                                        addOrRemoveCartItem(productData, "increment")
                                    }}>Add to Cart</button>
                            }
                        </div>
                    </div>
                </div> : <div>No records found</div>}
        </>
    )
}

export default ProductDesctiptionComponent;