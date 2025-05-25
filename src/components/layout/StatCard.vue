<script setup>
import { computed } from 'vue';
import { 
  getTotalRevenue, 
  getRevenueByCategory, 
  getInventoryStatusCounts,
  getSalesByCategory,
  products
} from '../sampleData/data';

const props = defineProps({
  selectedCategory: {
    type: String,
    default: 'All'
  }
});

const totalRevenue = computed(() => {
  if (props.selectedCategory === 'All') {
    return getTotalRevenue();
  } else {
    const revenueByCategory = getRevenueByCategory();
    return revenueByCategory[props.selectedCategory] || 0;
  }
});

const totalProducts = computed(() => {
  if (props.selectedCategory === 'All') {
    return products.length;
  } else {
    return products.filter(product => product.category === props.selectedCategory).length;
  }
});

const inventoryStatus = computed(() => {
  const counts = getInventoryStatusCounts();
  if (props.selectedCategory === 'All') {
    return counts;
  } else {
    const filteredProducts = products.filter(product => product.category === props.selectedCategory);
    const filteredCounts = {
      'in stock': 0,
      'low stock': 0,
      'out of stock': 0
    };
    
    filteredProducts.forEach(product => {
      filteredCounts[product.status]++;
    });
    
    return filteredCounts;
  }
});

const totalSales = computed(() => {
  const sales = props.selectedCategory === 'All' 
    ? getSalesByCategory() 
    : getSalesByCategory(props.selectedCategory);
  
  return sales.reduce((total, sale) => total + sale.quantity, 0);
});

// Format currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(value);
};
</script>

<template>
  <div class="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <!-- Total Revenue -->
    <div class="stat-card bg-neutral-700 p-3 rounded-lg">
      <div class="flex items-start justify-between">
        <div>
          <p class="text-sm font-medium text-white">Total Revenue</p>
          <p class="mt-1 text-2xl font-bold text-white dark:text-white">{{ formatCurrency(totalRevenue) }}</p>
        </div>
        <div class="p-2 bg-primary-100 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      <div class="mt-4 flex items-center text-sm">
        <span class="flex items-center text-success">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          8.2%
        </span>
        <span class="ml-2 text-white">vs last month</span>
      </div>
    </div>
    
    <!-- Total Products -->
    <div class="stat-card bg-neutral-700 p-3 rounded-lg">
      <div class="flex items-start justify-between">
        <div>
          <p class="text-sm font-medium text-white">Total Products</p>
          <p class="mt-1 text-2xl font-bold text-whit">{{ totalProducts }}</p>
        </div>
        <div class="p-2 bg-secondary-100 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      </div>
      <div class="mt-4 grid grid-cols-3 gap-2">
        <div class="text-center px-2 py-1 rounded-lg bg-success">
          <p class="text-xs font-medium text-success-800 dark:text-success-300">In Stock</p>
          <p class="text-sm font-semibold text-success-600">{{ inventoryStatus['in stock'] }}</p>
        </div>
        <div class="text-center px-2 py-1 rounded-lg bg-warning dark:bg-warning-900/30">
          <p class="text-xs font-medium text-warning-800 dark:text-warning-300">Low</p>
          <p class="text-sm font-semibold text-warning-600">{{ inventoryStatus['low stock'] }}</p>
        </div>
        <div class="text-center px-2 py-1 rounded-lg bg-error dark:bg-danger-900/30">
          <p class="text-xs font-medium text-danger-800 dark:text-danger-300">Out</p>
          <p class="text-sm font-semibold text-danger-600">{{ inventoryStatus['out of stock'] }}</p>
        </div>
      </div>
    </div>
    
    <!-- Total Sales -->
    <div class="stat-card bg-neutral-700 p-3 rounded-lg">
      <div class="flex items-start justify-between">
        <div>
          <p class="text-sm font-medium text-white ">Units Sold</p>
          <p class="mt-1 text-2xl font-bold text-white">{{ totalSales }}</p>
        </div>
        <div class="p-2 bg-accent-100  rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
      </div>
      <div class="mt-4 flex items-center text-sm">
        <span class="flex items-center text-success">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          12.5%
        </span>
        <span class="ml-2 text-white">vs last month</span>
      </div>
    </div>
    
    <!-- Average Order Value -->
    <div class="stat-card bg-neutral-700 p-3 rounded-lg">
      <div class="flex items-start justify-between">
        <div>
          <p class="text-sm font-medium text-white">Avg. Order Value</p>
          <p class="mt-1 text-2xl font-bold text-white dark:text-white">{{ formatCurrency(totalRevenue / (totalSales || 1)) }}</p>
        </div>
        <div class="p-2 bg-success-100 dark:bg-success-900/30 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      </div>
      <div class="mt-4 flex items-center text-sm">
        <span class="flex items-center text-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
          </svg>
          3.1%
        </span>
        <span class="ml-2 text-white">vs last month</span>
      </div>
    </div>
  </div>
</template>