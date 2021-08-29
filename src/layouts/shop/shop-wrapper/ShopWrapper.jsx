import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { selectShopData } from '../../../store/reducers/shop-reducer/shopSelector';

import ShopCategoryPreview from '../shop-category/ShopCategoryPreview';

import "./ShopWrapper.scss"

const ShopWrapper = ({ collections }) => {
    return (
        <div>
            {collections.map(({ id, ...collection }) => {
                return <ShopCategoryPreview key={id} {...collection} />;
            })}

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopData
})

export default connect(mapStateToProps)(ShopWrapper);
