<script setup>
import { DollarSign, ShoppingCart, Boxes, AlertTriangle } from 'lucide-vue-next'

const statInfo = [
    {
        heading: "Total Revenue",
        amount: "$232423",
        percentage: "+12.5%",
        icon: DollarSign,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
    },
    {
        heading: "Total Orders",
        amount: "5",
        percentage: "+8.2%",
        icon: ShoppingCart,
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
    },
    {
        heading: "Total Products",
        amount: "12",
        percentage: "+5.3%",
        icon: Boxes,
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600"
    },
    {
        heading: "Low Stock Items",
        amount: "3",
        percentage: "+3.2%",
        icon: AlertTriangle,
        iconBg: "bg-red-100",
        iconColor: "text-red-600"
    }
]
</script>



<template>
  <div class="grid grid-cols-4 gap-4">
    <div
      v-for="(stat, index) in statInfo"
      :key="index"
      class="flex items-center justify-between px-4 py-6 bg-neutral-700 rounded-lg"
    >
      <!-- Info Text -->
      <div>
        <h1 class="text-sm text-neutral-300">{{ stat.heading }}</h1>
        <p class="text-xl font-bold text-white">{{ stat.amount }}</p>
        <p class="text-sm text-neutral-400">
          <span class="font-bold text-secondary-400">{{ stat.percentage }}</span> from last period
        </p>
      </div>

       <!-- Icon box with dynamic background and text color -->
      <div
        class="w-10 h-10 rounded-md flex items-center justify-center self-start"
        :class="stat.iconBg"
      >
        <component :is="stat.icon" class="w-6 h-6" :class="stat.iconColor" />
      </div>

    </div>
  </div>
</template>
