<script setup>
import { computed } from 'vue';
import { getTopSellingProducts, products } from '../sampleData/data';

const props = defineProps({
  selectedCategory: {
    type: String,
    default: null
  }
});

const topProducts = computed(() => {
  const allTopProducts = getTopSellingProducts(5);
  
  if (!props.selectedCategory) {
    return allTopProducts;
  }
  
  return allTopProducts.filter(product => product.category === props.selectedCategory);
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
  <div class="overflow-hidden">
    <div v-if="topProducts.length === 0" class="flex items-center justify-center h-40">
      <p class="text-white">No data available for selected category</p>
    </div>
    
    <div v-else class="space-y-4">
      <div v-for="(product, index) in topProducts" :key="product.id" class="flex items-center">
        <div class="flex-shrink-0 w-10 text-center">
          <span class="font-bold text-white">#{{ index + 1 }}</span>
        </div>
        
        <div class="flex-1 ml-4">
          <div class="flex items-center justify-between mb-1">
            <span class="font-medium text-white">{{ product.name }}</span>
            <span class="font-medium text-white">{{ formatCurrency(product.totalRevenue) }}</span>
          </div>
          
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              class="h-2.5 rounded-full bg-primary-500" 
              :style="`width: ${Math.min(100, (product.totalRevenue / topProducts[0].totalRevenue) * 100)}%`"
            ></div>
          </div>
          
          <div class="flex items-center justify-between mt-1 text-xs text-white">
            <span>{{ product.category }}</span>
            <span>{{ product.totalQuantity }} units sold</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>