const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(
    //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
    //   product
    // );

let existinlgProduct = state.cart.find((x) => x.id ==id+color)
console.log(existinlgProduct)

if(existinlgProduct){
    let updatedProduct = state.cart.map((x) => {
      if(x.id == id+color){
        let newAmount = x.amount + amount
        if(newAmount >= x.max){
          newAmount = x.max;
        }
        return {
         ...x,
         amount:newAmount
        }
      } else {
        return x
      }
    })
    return {
      ...state,
      cart: updatedProduct,
    };
}else{
    let cartProduct;

    cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  return state;
};

export default cartReducer;
