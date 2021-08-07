import React from 'react'
import "./ShopCollectionItem.scss"

const ShopCollectionItem = ({ imageUrl, name, price }) => {
    return (
        <div className="shop-collection-item">
            <img src={imageUrl} alt={name} />
            <div className="details">
                <p>{name}</p>
                <p>${price}</p>
            </div>


        </div>
    )
}

export default ShopCollectionItem
