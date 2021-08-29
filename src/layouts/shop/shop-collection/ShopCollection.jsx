import React from 'react';
import ShopCollectionItem from '../../../components/shop-collection-item/ShopCollectionItem';
import { connect } from 'react-redux';
import { selectShopCollectionData } from '../../../store/reducers/shop-reducer/shopSelector';
import "./ShopCollection.scss";

const findDataWithCategory = (arr, name) => {
    const found = arr.find((item) => item.routeName === name);
    return found;

}

const ShopCollection = ({ collection }) => {
    // console.log(params.name);
    console.log(collection)

    return (
        <div className="shop-collection">
            {collection.items.map((item) => <ShopCollectionItem key={item.id} item={item} />)}


        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollectionData(ownProps.match.params.name)(state)
})

export default connect(mapStateToProps)(ShopCollection)
