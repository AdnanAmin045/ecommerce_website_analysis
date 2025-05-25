<script setup>
import { ref } from 'vue';
import { getCategories } from '../sampleData/data';
import StatCards from '../layout/StatCard.vue';
import RevenueChart from '../Charts/RevenueChart.vue';
import CategoryRevenueChart from '../Charts/CategoryRevenueChart.vue';
import InventoryStatusChart from '../Charts/InventoryStatusChart.vue';
import TopSellingProducts from '../layout/TopSellingProducts.vue';

const categories = getCategories();
const selectedCategory = ref('All');

const handleCategoryChange = (category) => {
  selectedCategory.value = category;
};

const activeTimeRange = ref('daily');
const timeRanges = ['daily', 'weekly', 'monthly'];

const setTimeRange = (range) => {
  activeTimeRange.value = range;
};
</script>

<template>
  <div class="min-h-screen bg-neutral-800 p-10 text-white transition-all duration-300">
    
    <main class="dashboard-container pb-20">
      <!-- Stats Cards -->
      <StatCards :selected-category="selectedCategory" />

      <!-- Category Filter -->
      <div class="mb-6 flex flex-wrap items-center gap-2">
        <span class="text-sm font-medium text-white">Filter by Category:</span>
        <div class="flex flex-wrap gap-2">
          <button 
            @click="handleCategoryChange('All')" 
            class="px-3 py-1 text-sm rounded-full transition-all"
            :class="selectedCategory === 'All' ? 
              'bg-primary-500 text-white' : 
              'bg-neutral-700 text-white hover:bg-primary-600'"
          >
            All
          </button>
          <button 
            v-for="category in categories" 
            :key="category"
            @click="handleCategoryChange(category)" 
            class="px-3 py-1 text-sm rounded-full transition-all"
            :class="selectedCategory === category ? 
              'bg-primary-500 text-white' : 
              'bg-neutral-700 text-white hover:bg-primary-600'"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div class="bg-neutral-700 rounded-xl p-4 shadow">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">Revenue Trends</h3>
            <div class="flex space-x-2">
              <button 
                v-for="range in timeRanges" 
                :key="range"
                @click="setTimeRange(range)"
                class="px-2 py-1 text-xs rounded transition-all"
                :class="activeTimeRange === range ? 
                  'bg-primary-500 text-white' : 
                  'bg-neutral-600 text-white hover:bg-primary-600'"
              >
                {{ range.charAt(0).toUpperCase() + range.slice(1) }}
              </button>
            </div>
          </div>
          <RevenueChart :time-range="activeTimeRange" :category="selectedCategory === 'All' ? null : selectedCategory" />
        </div>

        <div class="bg-neutral-700 rounded-xl p-4 shadow">
          <h3 class="text-lg font-semibold mb-4">Revenue by Category</h3>
          <CategoryRevenueChart :selected-category="selectedCategory === 'All' ? null : selectedCategory" />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-neutral-700 rounded-xl p-4 shadow">
          <h3 class="text-lg font-semibold mb-4">Inventory Status</h3>
          <InventoryStatusChart />
        </div>

        <div class="bg-neutral-700 rounded-xl p-4 shadow lg:col-span-2">
          <h3 class="text-lg font-semibold mb-4">Top Selling Products</h3>
          <TopSellingProducts :selected-category="selectedCategory === 'All' ? null : selectedCategory" />
        </div>
      </div>
    </main>

  </div>
</template>
