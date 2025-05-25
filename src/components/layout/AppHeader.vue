<script setup>
import { Menu, Search, Bell, ChevronDown } from 'lucide-vue-next'

</script>

<template>
  <div class="flex items-center justify-between w-full">
    <div class="flex items-center gap-8">
      <h2 class="text-xl font-bold text-primary-400">Ecommerce Website</h2>
      <Menu class="w-6 h-6 text-gray-500" />

      <!-- Search Input with Icon -->

      <div class="relative">
        <input type="text" placeholder="Search...."
          class="pl-10 pr-4 py-1.5 w-64 border border-gray-400 focus:border-primary-400 focus:outline-none rounded-md bg-neutral-700 text-white" />
        <Search class="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" />
      </div>
    </div>

    <div class="flex items-center gap-8 cursor-pointer">
      <!-- Notification -->
      <div class="p-2 rounded-full w-10 h-10 hover:bg-neutral-600">
        <div class="relative flex items-center justify-center">
          <Bell class="w-6 h-6 text-gray-500 font-bold" />
          <div class="h-2 w-2 rounded-full bg-red-500 absolute top-0 left-1/2 "></div>
        </div>
      </div>


      <!-- Profile -->

      <div class="flex items-center gap-3 justify-center">
        <h1 class="text-md font-bold text-white">Adnan Amin</h1>
        <ChevronDown class="w-6 h-6 text-gray-500 font-bold " />
      </div>
    </div>
  </div>
</template>
