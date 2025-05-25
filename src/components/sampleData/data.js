// Product data
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
  { id: 10, name: "Vacuum Cleaner", category: "Home & Kitchen", price: 120.00, stock: 10, status: "in stock" },

  // New products added
  { id: 11, name: "Bluetooth Headphones", category: "Electronics", price: 79.99, stock: 20, status: "in stock" },
  { id: 12, name: "Coffee Maker", category: "Home & Kitchen", price: 45.00, stock: 5, status: "low stock" },
  { id: 13, name: "Action Figure", category: "Toys & Games", price: 10.99, stock: 12, status: "in stock" },
  { id: 14, name: "Smartphone", category: "Electronics", price: 599.99, stock: 4, status: "low stock" },
  { id: 15, name: "Electric Kettle", category: "Home & Kitchen", price: 22.50, stock: 18, status: "in stock" },
  { id: 16, name: "Board Game", category: "Toys & Games", price: 20.00, stock: 9, status: "in stock" },
  { id: 17, name: "Wireless Charger", category: "Electronics", price: 25.00, stock: 7, status: "in stock" },
  { id: 18, name: "Blender", category: "Home & Kitchen", price: 60.00, stock: 2, status: "low stock" },
  { id: 19, name: "Doll House", category: "Toys & Games", price: 45.99, stock: 0, status: "out of stock" },
  { id: 20, name: "Fitness Tracker", category: "Electronics", price: 99.99, stock: 11, status: "in stock" },
];

// Enhanced sales data with time dimension
export const salesData = [
  // Daily data for last 14 days (more products)
  { date: '2023-05-01', productId: 1, quantity: 2, revenue: 51.98 },
  { date: '2023-05-01', productId: 3, quantity: 1, revenue: 30.00 },
  { date: '2023-05-01', productId: 11, quantity: 1, revenue: 79.99 },
  { date: '2023-05-02', productId: 2, quantity: 3, revenue: 149.97 },
  { date: '2023-05-02', productId: 5, quantity: 2, revenue: 179.98 },
  { date: '2023-05-02', productId: 13, quantity: 4, revenue: 43.96 },
  { date: '2023-05-03', productId: 6, quantity: 1, revenue: 199.99 },
  { date: '2023-05-03', productId: 10, quantity: 1, revenue: 120.00 },
  { date: '2023-05-03', productId: 14, quantity: 2, revenue: 1199.98 },
  { date: '2023-05-04', productId: 9, quantity: 5, revenue: 29.95 },
  { date: '2023-05-04', productId: 7, quantity: 3, revenue: 37.47 },
  { date: '2023-05-04', productId: 15, quantity: 3, revenue: 67.50 },
  { date: '2023-05-05', productId: 4, quantity: 2, revenue: 29.98 },
  { date: '2023-05-05', productId: 8, quantity: 1, revenue: 299.99 },
  { date: '2023-05-05', productId: 17, quantity: 4, revenue: 100.00 },
  { date: '2023-05-06', productId: 1, quantity: 1, revenue: 25.99 },
  { date: '2023-05-06', productId: 3, quantity: 2, revenue: 60.00 },
  { date: '2023-05-06', productId: 12, quantity: 3, revenue: 135.00 },
  { date: '2023-05-07', productId: 6, quantity: 2, revenue: 399.98 },
  { date: '2023-05-07', productId: 16, quantity: 1, revenue: 20.00 },
  { date: '2023-05-08', productId: 18, quantity: 1, revenue: 60.00 },
  { date: '2023-05-08', productId: 20, quantity: 2, revenue: 199.98 },
  { date: '2023-05-08', productId: 13, quantity: 2, revenue: 21.98 },
  { date: '2023-05-09', productId: 19, quantity: 0, revenue: 0 },
  { date: '2023-05-09', productId: 11, quantity: 2, revenue: 159.98 },

  // Weekly data for previous weeks (more variety)
  { date: '2023-04-24', productId: 2, quantity: 5, revenue: 249.95 },
  { date: '2023-04-24', productId: 5, quantity: 3, revenue: 269.97 },
  { date: '2023-04-24', productId: 12, quantity: 2, revenue: 90.00 },
  { date: '2023-04-17', productId: 10, quantity: 2, revenue: 240.00 },
  { date: '2023-04-17', productId: 14, quantity: 1, revenue: 599.99 },
  { date: '2023-04-17', productId: 17, quantity: 3, revenue: 75.00 },

  // Monthly data for previous months
  { date: '2023-04-01', productId: 6, quantity: 4, revenue: 799.96 },
  { date: '2023-04-01', productId: 8, quantity: 2, revenue: 599.98 },
  { date: '2023-04-01', productId: 20, quantity: 5, revenue: 499.95 },
  { date: '2023-03-01', productId: 3, quantity: 8, revenue: 240.00 },
  { date: '2023-03-01', productId: 9, quantity: 12, revenue: 71.88 },
  { date: '2023-03-01', productId: 11, quantity: 10, revenue: 799.90 },
  { date: '2023-03-01', productId: 16, quantity: 7, revenue: 140.00 },

  // Yearly data for some products
  { date: '2022-01-01', productId: 14, quantity: 50, revenue: 29999.50 },
  { date: '2022-01-01', productId: 20, quantity: 40, revenue: 3999.60 },
  { date: '2022-01-01', productId: 5, quantity: 30, revenue: 2699.70 },
  { date: '2022-01-01', productId: 3, quantity: 25, revenue: 750.00 },
];

// Inventory changes over time (extended)
export const inventoryHistory = [
  { date: '2023-04-01', productId: 1, stock: 5 },
  { date: '2023-04-15', productId: 1, stock: 3 },
  { date: '2023-05-01', productId: 1, stock: 0 },
  { date: '2023-04-01', productId: 2, stock: 10 },
  { date: '2023-04-20', productId: 2, stock: 5 },
  { date: '2023-05-01', productId: 2, stock: 3 },

  { date: '2023-04-01', productId: 11, stock: 25 },
  { date: '2023-04-20', productId: 11, stock: 20 },
  { date: '2023-05-01', productId: 11, stock: 15 },

  { date: '2023-03-01', productId: 14, stock: 10 },
  { date: '2023-04-01', productId: 14, stock: 8 },
  { date: '2023-05-01', productId: 14, stock: 4 },

  { date: '2023-04-01', productId: 20, stock: 15 },
  { date: '2023-05-01', productId: 20, stock: 11 },

  { date: '2023-04-15', productId: 19, stock: 3 },
  { date: '2023-05-01', productId: 19, stock: 0 },
];

// Get unique categories
export const getCategories = () => {
  return [...new Set(products.map(product => product.category))];
};

// Calculate total revenue
export const getTotalRevenue = () => {
  return salesData.reduce((total, item) => total + item.revenue, 0);
};

// Calculate revenue by category
export const getRevenueByCategory = () => {
  const revenueByCategory = {};
  
  // Initialize categories with zero revenue
  getCategories().forEach(category => {
    revenueByCategory[category] = 0;
  });
  
  // Calculate revenue for each category
  salesData.forEach(sale => {
    const product = products.find(p => p.id === sale.productId);
    if (product) {
      revenueByCategory[product.category] += sale.revenue;
    }
  });
  
  return revenueByCategory;
};

// Group sales by date
export const getSalesByDate = () => {
  const salesByDate = {};
  
  salesData.forEach(sale => {
    if (!salesByDate[sale.date]) {
      salesByDate[sale.date] = 0;
    }
    salesByDate[sale.date] += sale.revenue;
  });
  
  return salesByDate;
};

// Get daily sales for last 7 days
export const getDailySales = () => {
  const dailySales = getSalesByDate();
  // Sort by date and get last 7 days
  const sortedDates = Object.keys(dailySales).sort();
  const last7Days = sortedDates.slice(-7);
  
  return {
    labels: last7Days,
    data: last7Days.map(date => dailySales[date] || 0)
  };
};

// Get sales by category for filtering
export const getSalesByCategory = (category = null) => {
  if (!category) {
    return salesData;
  }
  
  return salesData.filter(sale => {
    const product = products.find(p => p.id === sale.productId);
    return product && product.category === category;
  });
};

// Get inventory status counts
export const getInventoryStatusCounts = () => {
  const counts = {
    'in stock': 0,
    'low stock': 0,
    'out of stock': 0
  };
  
  products.forEach(product => {
    counts[product.status]++;
  });
  
  return counts;
};

// Get top selling products
export const getTopSellingProducts = (limit = 5) => {
  const productSales = {};
  
  // Calculate total sales for each product
  salesData.forEach(sale => {
    if (!productSales[sale.productId]) {
      productSales[sale.productId] = {
        id: sale.productId,
        totalQuantity: 0,
        totalRevenue: 0
      };
    }
    productSales[sale.productId].totalQuantity += sale.quantity;
    productSales[sale.productId].totalRevenue += sale.revenue;
  });
  
  // Convert to array and sort by revenue
  const sortedProducts = Object.values(productSales)
    .map(item => {
      const product = products.find(p => p.id === item.id);
      return {
        ...item,
        name: product ? product.name : `Product ${item.id}`,
        category: product ? product.category : 'Unknown'
      };
    })
    .sort((a, b) => b.totalRevenue - a.totalRevenue);
  
  return sortedProducts.slice(0, limit);
};