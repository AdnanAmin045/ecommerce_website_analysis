<!-- DesktopSidebar.vue -->
<script setup>
import { Home, Boxes, FilePlus } from 'lucide-vue-next'
</script>

<template>
  <aside class="hidden md:block w-64 h-full bg-neutral-800 border-r border-gray-600">
    <nav class="flex flex-col gap-2 pt-4 px-2">
      <router-link
        to="/"
        class="text-white hover:bg-neutral-600 rounded-md w-full"
        active-class="bg-neutral-700"
      >
        <div class="flex items-center space-x-2 p-3">
          <Home class="w-5 h-5" />
          <span>Dashboard</span>
        </div>
      </router-link>

      <router-link
        to="/inventory"
        class="text-white hover:bg-neutral-600 rounded-md w-full"
        active-class="bg-neutral-700"
      >
        <div class="flex items-center space-x-2 p-3">
          <Boxes class="w-5 h-5" />
          <span>Inventory</span>
        </div>
      </router-link>

      <router-link
        to="/registerProduct"
        class="text-white hover:bg-neutral-600 rounded-md w-full"
        active-class="bg-neutral-700"
      >
        <div class="flex items-center space-x-2 p-3">
          <FilePlus class="w-5 h-5" />
          <span>Product Registration</span>
        </div>
      </router-link>
    </nav>
  </aside>
</template>
