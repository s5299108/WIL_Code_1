export async function fetchCategories() {
    try {
      const response = await fetch("https://fakestoreapi.com/products/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      return (data);
    } catch (error) {
     return [];
    } 
}

export async function fetchProducts(category) {
    const encodedCategory = encodeURIComponent(category);
    const url = `https://fakestoreapi.com/products/category/${encodedCategory}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      return (data);
    } catch (error) {
     return [];
    } 
}
export async function fetchProductsDetail( product_id) {
    
    const url = `https://fakestoreapi.com/products/${product_id}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      return(data);
    } catch (error) {
     return [];
    } 
}