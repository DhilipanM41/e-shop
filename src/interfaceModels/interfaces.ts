export interface ICategories {
    category_id: number;
    category_name: string;
    category_image: string;
    products: IProducts[]
}

export interface IProducts {
    product_id: number;
    product_name: string;
    product_cost: number;
    product_image: string;
    product_count?: number;
}

export type IShopItemsContext = {
    shopItemsData: ICategories[];
    cartItemsData: IProducts[];
    currentCategory: ICategories;
    addOrRemoveCartItem: (productItem: IProducts, incOrDec: string) => void;
    setCurrentCategory: React.Dispatch<React.SetStateAction<ICategories | undefined>>
}