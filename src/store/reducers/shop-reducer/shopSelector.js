import { createSelector } from "reselect";

const selectShop = (state) => state.shop;


export const selectShopData = createSelector([selectShop], (shop) => {
    console.log(shop.shopData);
    return shop.shopData;
})

export const selectShopCollectionData = collectionName => createSelector([selectShopData], (shopData) => {

    const collection = shopData.find((data) => data.routeName === collectionName)
    console.log(collection);
    return collection;

});