

// data.js
export const products = [
  { id: 1, name: "Remote Car", category: "Toys & Games", price: 25.99, stock: 0, status: "out of stock" },
  { id: 2, name: "Drone", category: "Electronics", price: 49.99, stock: 3, status: "low stock" },
  { id: 3, name: "Rice Cooker", category: "Home & Kitchen", price: 30.00, stock: 15, status: "in stock" },
  { id: 4, name: "Robot Toy", category: "Toys & Games", price: 14.99, stock: 0, status: "out of stock" },
  { id: 5, name: "Microwave Oven", category: "Home & Kitchen", price: 89.99, stock: 2, status: "low stock" },
  { id: 6, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 6, status: "in stock" },
  { id: 7, name: "LED Bulbs Pack", category: "Home & Kitchen", price: 12.49, stock: 1, status: "low stock" },
  { id: 8, name: "Gaming Console", category: "Electronics", price: 299.99, stock: 0, status: "out of stock" },
  { id: 9, name: "Puzzle Set", category: "Toys & Games", price: 5.99, stock: 8, status: "in stock" },
  { id: 10, name: "Vacuum Cleaner", category: "Home & Kitchen", price: 120.00, stock: 10, status: "in stock" }
];

export function useSampleData() {
  const totalProducts = products.length
  const inStockCount = products.filter(p => p.status === "in stock").length
  const lowStockCount = products.filter(p => p.status === "low stock").length
  const outOfStockCount = products.filter(p => p.status === "out of stock").length

  return {
    products,
    totalProducts,
    inStockCount,
    lowStockCount,
    outOfStockCount
  }
}
