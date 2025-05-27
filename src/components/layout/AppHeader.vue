<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Menu, Search, Bell, ChevronDown } from 'lucide-vue-next'
import SideMenu from '../layout/AppResponsiveSideBar.vue'

const isMobile = ref(false)
const showSideMenu = ref(false)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 640
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
})

const showNotifications = ref(false)
const showUserMenu = ref(false)

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
  showUserMenu.value = false
}
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
  showNotifications.value = false
}
</script>

<template>
  <div class="flex flex-wrap items-center justify-between w-full sm:px-4 sm:py-3">
    <!-- Left Section -->
    <div class="flex items-center gap-4">
      <h2 class="text-xl hidden sm:flex font-bold text-primary-400 whitespace-nowrap">Ecommerce Website</h2>
      <Menu class="w-6 h-6 sm:hidden text-gray-400 cursor-pointer" @click="showSideMenu = true" />
      <!-- Search Input -->
      <div class="relative hidden sm:block">
        <input type="text" placeholder="Search..."
          class="pl-10 pr-4 py-1.5 w-64 border border-gray-600 focus:border-primary-400 focus:outline-none rounded-md bg-neutral-700 text-white" />
        <Search class="w-5 h-5 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" />
      </div>
    </div>

    <!-- Right Section -->
    <div class="flex items-center gap-4 relative mt-2 md:mt-0">
      <div
        class="p-2 rounded-full cursor-pointer w-10 h-10 hover:bg-neutral-600 flex items-center justify-center relative"
        @click="toggleNotifications">
        <Bell class="w-6 h-6 text-gray-400" />
        <div class="h-2 w-2 rounded-full bg-red-500 absolute top-0 right-0"></div>

        <!-- Notification Dropdown -->
        <div v-show="showNotifications" :class="[
          'absolute bg-white dark:bg-neutral-800 shadow-lg rounded-lg py-2 z-50',
          isMobile ? 'left-1/2 top-full transform -translate-x-1/2 mt-2 w-[90vw]' : 'right-0 top-12 w-80'
        ]">
          <div class="px-4 py-2 border-b border-gray-200 dark:border-neutral-700">
            <h6 class="font-semibold">Notifications</h6>
          </div>
          <div class="max-h-72 overflow-y-auto">
            <div class="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 border-l-4 border-primary-500">
              <p class="text-sm font-medium">Low inventory alert</p>
              <p class="text-xs text-neutral-500 dark:text-neutral-400">Product "Wireless Headphones" is running low.
              </p>
              <p class="text-xs text-neutral-400 mt-1">2 minutes ago</p>
            </div>
            <div class="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-700">
              <p class="text-sm font-medium">Sales milestone reached</p>
              <p class="text-xs text-neutral-500 dark:text-neutral-400">Monthly sales target has been achieved!</p>
              <p class="text-xs text-neutral-400 mt-1">1 hour ago</p>
            </div>
            <div class="px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-700">
              <p class="text-sm font-medium">New order received</p>
              <p class="text-xs text-neutral-500 dark:text-neutral-400">Order #12345 has been placed.</p>
              <p class="text-xs text-neutral-400 mt-1">3 hours ago</p>
            </div>
          </div>
          <div class="px-4 py-2 border-t border-gray-200 dark:border-neutral-700">
            <a href="#" class="text-sm text-primary-500 hover:text-primary-600">View all notifications</a>
          </div>
        </div>

      </div>

      <!-- User Menu -->
      <div class="relative">
        <div class="flex items-center gap-2 cursor-pointer" @click="toggleUserMenu">
          <div class="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
            AA
          </div>
          <span class="hidden md:block text-sm text-white font-medium">Adnan Amin</span>
          <ChevronDown class="w-5 h-5 text-gray-400 hidden md:block" />
        </div>

        <!-- User Dropdown -->
        <div v-show="showUserMenu"
          class="absolute right-0 top-12 w-48 bg-white dark:bg-neutral-800 shadow-lg rounded-lg py-1 z-50">
          <a href="#" class="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700">Profile</a>
          <a href="#" class="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700">Settings</a>
          <div class="border-t border-gray-200 dark:border-neutral-700 my-1"></div>
          <a href="#" class="block px-4 py-2 text-sm text-red-500 hover:bg-neutral-100 dark:hover:bg-neutral-700">Sign
            out</a>
        </div>
      </div>
    </div>
  </div>

  <SideMenu v-if="isMobile" :isOpen="showSideMenu" @close="showSideMenu = false" />
</template>
