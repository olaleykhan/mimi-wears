export const addItemToCart = (oldItems, newItem) => {
    const itemExists = oldItems.find((item) => item.id === newItem.id);

    if (itemExists) {
        return oldItems.map(item => {
            return item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        });
    }

    return [...oldItems, { ...newItem, quantity: 1 }];

};


// reduceCartItemQuantity
export const reduceCartItemQuantity = (oldItems, newItem) => {
    try {
        const itemExists = oldItems.find((item) => item.id === newItem.id);
        if (itemExists) {
            if (newItem.quantity > 1) {
                return oldItems.map(item => {
                    return item.id === newItem.id ? { ...item, quantity: item.quantity - 1 } : item
                });
            } else {
                return oldItems.filter(item => item.id !== newItem.id)
            }
        }
        return [...oldItems];

    } catch (error) {
        console.log(error, "+ meanwhile, item you're deleting does not exist")
    }
}

// completely remove item

export const removeCartItem = (oldItems, newItem) => {
    const itemExists = oldItems.find((item) => item.id === newItem.id);

    if (itemExists) {
        return oldItems.filter(item => item.id !== newItem.id)
    }

    return [...oldItems, { ...newItem, quantity: 1 }];

}



// this function assumes that the first argument is an array that contains objects.
// second argument is the name of the property that we wish to accumulate from the object 

export const reduceItem = (arr, prop) => {
    return arr.reduce((acc, item) => acc + item[prop], 0)

}


// calculates total price by accumulating total cost while multiplying each cost by quantity
export const reducePrice = (arr, quantity, price) => {
    return arr.reduce((acc, item) => acc + (item[quantity] * item[price]), 0)

}
