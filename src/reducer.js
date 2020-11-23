export const initialState = {
  basket: [
    {
      id: "123356",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Succesfull Bussiness Paperback",
      price: 11.96,
      rating: 5,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    },
  ],
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
