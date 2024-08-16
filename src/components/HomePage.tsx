import { ShopItemsContext } from "../context/ShopContext";
import { ICategories, IProducts } from "../interfaceModels/interfaces";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function HomeComponent() {

    const { setCurrentCategory, shopItemsData } = useContext(ShopItemsContext);
    const navigate = useNavigate();

    const handleCategoriesClickEvent = (data: any) => {
        setCurrentCategory(data);
        navigate("/products");
    }

    const bindCategories = () => {
        return shopItemsData.map((categoryObj: ICategories) => {
            return <div key={categoryObj.category_id} className="card border-container" onClick={() => { handleCategoriesClickEvent(categoryObj) }}>
                <div className="product-image-container">
                    <img src={categoryObj.category_image} alt="ProductImage" className="product-image-size" />
                </div>
                <div className="container">
                    <span>{categoryObj.category_name}</span>
                </div>
            </div>
        })
    }

    return (
        <>
            <div className="card-container">
                <h3 style={{ marginLeft: "10px" }}>Categories</h3>
                {bindCategories()}
            </div>

        </>
    )
}

export default HomeComponent;