// REST API: GET, POST, PUT, DELETE. JSON Server is a teaching backend, not production auth.
const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3002';
async function request(path, options = {}) {
  const response = await fetch(`${BASE}${path}`, {...options,headers:{'Content-Type':'application/json',...options.headers}});
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  if (response.status===204) return null;
  const text=await response.text(); return text ? JSON.parse(text):null;
}
export const api={
 getProducts:()=>request('/products'),getSellers:()=>request('/sellers'),getOrders:()=>request('/orders'),getOrder:id=>request(`/orders/${encodeURIComponent(id)}`),
 createProduct:p=>request('/products',{method:'POST',body:JSON.stringify(p)}),
 updateProduct:(id,p)=>request(`/products/${id}`,{method:'PUT',body:JSON.stringify(p)}),
 deleteProduct:id=>request(`/products/${id}`,{method:'DELETE'}),
 createOrder:o=>request('/orders',{method:'POST',body:JSON.stringify(o)}),
 updateOrder:(id,o)=>request(`/orders/${id}`,{method:'PUT',body:JSON.stringify(o)}),
 getListings:()=>request('/listings'),createListing:o=>request('/listings',{method:'POST',body:JSON.stringify(o)}),updateListing:(id,o)=>request(`/listings/${id}`,{method:'PUT',body:JSON.stringify(o)}),deleteListing:id=>request(`/listings/${id}`,{method:'DELETE'}),createEnquiry:o=>request('/enquiries',{method:'POST',body:JSON.stringify(o)})
};
