<script setup>
import {
  DollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  Boxes,
  AlertTriangle,
  XCircle,
} from 'lucide-vue-next'

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

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(value);
};
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    
    <!-- Total Revenue -->
    <div class="bg-neutral-700 p-4 rounded-lg shadow-md">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-sm text-white font-medium">Total Revenue</p>
          <p class="mt-1 text-2xl font-bold text-white">{{ formatCurrency(totalRevenue) }}</p>
        </div>
        <div class="p-2 bg-primary-100 rounded-lg">
          <DollarSign class="w-6 h-6 text-primary-500" />
        </div>
      </div>
      <div class="mt-4 text-sm text-white flex items-center">
        <span class="flex items-center text-green-400">
          <TrendingUp class="w-4 h-4 mr-1" /> 8.2%
        </span>
        <span class="ml-2">vs last month</span>
      </div>
    </div>

    <!-- Total Products -->
    <div class="bg-neutral-700 p-4 rounded-lg shadow-md">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-sm text-white font-medium">Total Products</p>
          <p class="mt-1 text-2xl font-bold text-white">{{ totalProducts }}</p>
        </div>
        <div class="p-2 bg-secondary-100 rounded-lg">
          <Boxes class="w-6 h-6 text-secondary-500" />
        </div>
      </div>
      <div class="mt-4 grid grid-cols-3 gap-2">
        <div class="text-center px-2 py-1 rounded bg-green-200">
          <p class="text-xs font-medium text-green-800">In Stock</p>
          <p class="text-sm font-semibold text-green-600">{{ inventoryStatus['in stock'] }}</p>
        </div>
        <div class="text-center px-2 py-1 rounded bg-yellow-200">
          <p class="text-xs font-medium text-yellow-800">Low</p>
          <p class="text-sm font-semibold text-yellow-600">{{ inventoryStatus['low stock'] }}</p>
        </div>
        <div class="text-center px-2 py-1 rounded bg-red-200">
          <p class="text-xs font-medium text-red-800">Out</p>
          <p class="text-sm font-semibold text-red-600">{{ inventoryStatus['out of stock'] }}</p>
        </div>
      </div>
    </div>

    <!-- Units Sold -->
    <div class="bg-neutral-700 p-4 rounded-lg shadow-md">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-sm text-white font-medium">Units Sold</p>
          <p class="mt-1 text-2xl font-bold text-white">{{ totalSales }}</p>
        </div>
        <div class="p-2 bg-accent-100 rounded-lg">
          <ShoppingCart class="w-6 h-6 text-accent-500" />
        </div>
      </div>
      <div class="mt-4 text-sm text-white flex items-center">
        <span class="flex items-center text-green-400">
          <TrendingUp class="w-4 h-4 mr-1" /> 12.5%
        </span>
        <span class="ml-2">vs last month</span>
      </div>
    </div>

    <!-- Avg. Order Value -->
    <div class="bg-neutral-700 p-4 rounded-lg shadow-md">
      <div class="flex justify-between items-start">
        <div>
          <p class="text-sm text-white font-medium">Avg. Order Value</p>
          <p class="mt-1 text-2xl font-bold text-white">
            {{ formatCurrency(totalRevenue / (totalSales || 1)) }}
          </p>
        </div>
        <div class="p-2 bg-green-100 rounded-lg">
          <Package class="w-6 h-6 text-green-500" />
        </div>
      </div>
      <div class="mt-4 text-sm text-white flex items-center">
        <span class="flex items-center text-red-400">
          <TrendingDown class="w-4 h-4 mr-1" /> 3.1%
        </span>
        <span class="ml-2">vs last month</span>
      </div>
    </div>

  </div>
</template>
