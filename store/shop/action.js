export const actionTypes = {
    UPDATE_SHOP_CART: 'UPDATE_SHOP_CART',
};

export function updateShopCart(payload) {
    return { type: actionTypes.UPDATE_SHOP_CART, payload };
}
