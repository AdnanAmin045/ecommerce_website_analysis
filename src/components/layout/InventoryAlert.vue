<script setup>
import { AlertTriangle } from 'lucide-vue-next';
</script>

<template>
  <div class="flex items-start gap-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-5 rounded-md shadow-sm">
    <div class="mt-1">
      <AlertTriangle class="w-6 h-6 text-yellow-600" />
    </div>

    <div>
      <h2 class="text-lg font-semibold">Low Stock Alert</h2>
      <p class="mt-1 text-sm text-yellow-700">
        The following items are running low and need restocking:
      </p>
      <ol class="mt-2 list-decimal list-inside space-y-1 text-sm text-yellow-800">
        <li>
          Premium Skincare Set - 0 units left 
          <span class="text-red-700 font-semibold">(Out of stock!)</span>
        </li>
        <li>
          Wireless Gaming Headset - 0 units left 
          <span class="text-red-700 font-semibold">(Out of stock!)</span>
        </li>
        <li>
          Stainless Steel Cookware Set - 7 units left
        </li>
        <li>
          And 2 more items...
        </li>
      </ol>
    </div>
  </div>
</template>
