export const addItemToCart = (oldItems, newItem) => {
    const itemExists = oldItems.find((item) => item.id === newItem.id);

    if (itemExists) {
        return oldItems.map(item => {
            return item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        });
    }

    return [...oldItems, { ...newItem, quantity: 1 }];

};


// this function assumes that the first argument is an array that contains objects.
// second argument is the name of the property that we wish to accumulate from the object 

export const reduceItem = (arr, prop) => {
    return arr.reduce((acc, item) => acc + item[prop], 0)

}
