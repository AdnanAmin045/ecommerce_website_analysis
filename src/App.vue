<script setup>
import { ref } from 'vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppSideBar from './components/layout/AppSideBar.vue'

// Sidebar open state for mobile
const isSidebarOpen = ref(false)

// Handle sidebar close from AppSideBar component
const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>

<template>
  <header class="min-h-screen">

    <!-- Header -->
    <nav class="h-14 sm:h-16 flex items-center p-5 w-full bg-neutral-700 border-b-2 border-gray-600">
      <AppHeader />
    </nav>

    <!-- Main Content -->
    <main class="w-full flex h-full bg-neutral-700">

      <!-- Sidebar for Desktop -->
      <div class="hidden md:block md:w-[25%] lg:w-[18%]">
        <AppSideBar />
      </div>

      <!-- Sidebar for Mobile -->
      <AppSideBar v-if="isSidebarOpen" :isOpen="isSidebarOpen" @close="closeSidebar" class="md:hidden" />

      <!-- Content Area -->
      <div class="w-full md:flex-1 bg-neutral-800">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </header>
</template>
