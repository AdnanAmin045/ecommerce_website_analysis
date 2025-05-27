<script setup>
import { ShoppingCart, PackageCheck, AlertTriangle } from 'lucide-vue-next'
import {
  useSampleData
} from "../sampleData/useSampleData"

const {
  totalProducts,
  lowStockCount,
  outOfStockCount
} = useSampleData()

const statInfo = [
  {
    heading: "Total Orders",
    quantity: totalProducts,
    icon: ShoppingCart,
    iconBg: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    heading: "Low Stock Items",
    quantity: lowStockCount,
    icon: PackageCheck,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600"
  },
  {
    heading: "Out of Stock",
    quantity: outOfStockCount,
    icon: AlertTriangle,
    iconBg: "bg-red-100",
    iconColor: "text-red-600"
  }
]
</script>




<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(stat, index) in statInfo" :key="index"
      class="flex items-center justify-between px-4 py-6 bg-neutral-700 rounded-lg shadow-md">
      
      <!-- Info Text -->
      <div>
        <h1 class="text-sm text-neutral-300">{{ stat.heading }}</h1>
        <p class="text-xl font-bold text-white">{{ stat.quantity }}</p>
      </div>

      <!-- Icon box with dynamic background and text color -->
      <div class="w-10 h-10 rounded-md flex items-center justify-center self-start" :class="stat.iconBg">
        <component :is="stat.icon" class="w-6 h-6" :class="stat.iconColor" />
      </div>
      
    </div>
  </div>
</template>

