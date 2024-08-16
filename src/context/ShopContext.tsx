import { createContext, useState } from 'react';
import { ICategories, IProducts } from '../interfaceModels/interfaces';
import { CATEGORYDATA } from '../staticdata/data';

export const ShopItemsContext = createContext<any | null>(null);

const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const shopItemsData: ICategories[] = CATEGORYDATA;
    const [cartItemsData, setCartItemsData] = useState<IProducts[]>([]);
    const [currentCategory, setCurrentCategory] = useState<ICategories>();

    const addOrRemoveCartItem = (productItem: IProducts, incOrDec: string) => {
        let updateCart = [...cartItemsData];
        let currentIndexOfProduct = updateCart.findIndex((val: IProducts) => val.product_id == productItem.product_id);
        switch (incOrDec) {
            case "increment":
                if (currentIndexOfProduct < 0) {
                    productItem.product_count = 1;
                    updateCart.push(productItem);
                } else {
                    updateCart[currentIndexOfProduct].product_count = (updateCart[currentIndexOfProduct].product_count || 1) + 1;
                }
                break;
            case "decrement":
                updateCart[currentIndexOfProduct].product_count = (updateCart[currentIndexOfProduct].product_count || 1) - 1;
                if (!updateCart[currentIndexOfProduct].product_count) {
                    updateCart.splice(currentIndexOfProduct, 1)
                }
                break;
            default:
                break;
        }

        setCartItemsData(updateCart)
    }

    return <ShopItemsContext.Provider value={{ shopItemsData, cartItemsData, addOrRemoveCartItem, currentCategory, setCurrentCategory }}>{children}</ShopItemsContext.Provider>;
};

export default ShopContextProvider;