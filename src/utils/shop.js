// ES6: const, arrow functions, array methods and objects.
export const money = (amount) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
export const cartTotal = (cart) => cart.reduce((sum, item) => sum + item.price * item.quantity, 0); // reduce
export const cartCount = (cart) => cart.reduce((sum, item) => sum + item.quantity, 0);
export const categories = (products) => ['All', ...new Set(products.map((p) => p.category))]; // map, spread, Set
export const selectProducts = (products, search, category, sort) => {
  let result = products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) && (category === 'All' || p.category === category)); // let, filter
  if (sort === 'low') result = [...result].sort((a, b) => a.price - b.price);
  if (sort === 'high') result = [...result].sort((a, b) => b.price - a.price);
  return result;
};
export function demonstrateScope(items) {
  const message = 'Processing cart'; // function scope (const is block-scoped)
  items.forEach((item) => { // forEach and arrow callback
    let subtotal = item.price * item.quantity; // block scope
    console.log(message, item.name, subtotal);
  });
  // subtotal is NOT available outside the callback block.
}
