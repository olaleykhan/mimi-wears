export const addItemToCart = (oldItems, newItem) => {
    const itemExists = oldItems.find((item) => item.id === newItem.id);

    if (itemExists) {
        return oldItems.map(item => {
            return item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        });
    }

    return [...oldItems, { ...newItem, quantity: 1 }];

};