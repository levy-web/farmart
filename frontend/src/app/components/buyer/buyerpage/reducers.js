const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        // check if item is already in cart
        const itemIndex = state.cartItems.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (itemIndex !== -1) {
          // if item is already in cart, increase quantity
          const newCartItems = [...state.cartItems];
          newCartItems[itemIndex].quantity += 1;
          return {
            ...state,
            cartItems: newCartItems,
          };
        } else {
          // if item is not in cart, add it
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          };
        }
      case "REMOVE_FROM_CART":
        // remove item from cart
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  