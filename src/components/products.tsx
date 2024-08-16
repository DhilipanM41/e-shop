import { useContext } from "react";
import { ShopItemsContext } from "../context/ShopContext";
import { IProducts } from "../interfaceModels/interfaces";
import { useNavigate } from "react-router-dom";

function ListProducts() {

    const { currentCategory, cartItemsData, addOrRemoveCartItem } = useContext(ShopItemsContext);

    const navigate = useNavigate();

    let products = currentCategory?.products;
    let categoryId = currentCategory?.category_id;
    let categoryName = currentCategory?.category_name;

    const bindProducts = () => {
        if (!products?.length) return <div>No records Found</div>
        return products?.map((item: IProducts) => {
            return <div key={item.product_id} className="card border-container">
                <div className="product-image-container">
                    <img src={item.product_image} alt="ProductImage" className="product-image-size" onClick={() => {
                        navigate("/productView", { state: { ...item, categoryId, categoryName } })
                    }} />
                </div>
                <div className="container">
                    <p>{item.product_name}</p>
                    <p className="bold">${item.product_cost}/-</p>
                    {
                        cartItemsData.some((ele: IProducts) => ele.product_id == item.product_id) ?
                            <div className="increment-btn-container flex space-between">
                                <button className="increment-btn" onClick={() => {
                                    addOrRemoveCartItem(item, "decrement")
                                }}>-</button>
                                <p className="count-box border-container">{cartItemsData.find((ele: IProducts) => ele.product_id == item.product_id).product_count || item.product_count}</p>
                                <button className="increment-btn" onClick={() => {
                                    addOrRemoveCartItem(item, "increment")
                                }}>+</button>
                            </div>
                            :
                            < button className="button" onClick={() => {
                                addOrRemoveCartItem(item, "increment")
                            }}>Add to Cart</button>
                    }
                </div>
            </div >
        })
    }

    return (
        <>
            <div className="card-container">
                <h3 style={{ marginLeft: "10px" }}>{categoryName}</h3>
                {bindProducts()}
            </div>
        </>
    )
}

export default ListProducts;