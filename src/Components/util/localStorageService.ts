export const localStorageService = (food: any, amount: any) => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : { cart: [] };

  const existingCartItem = user.cart.find((item: any) => item.id === (food.id || food.foodID));

  if (existingCartItem) {
    existingCartItem.quantity = amount;
  } else {
    user.cart.push({ ...food, quantity: amount });
  }

  localStorage.setItem('user', JSON.stringify(user));
};
