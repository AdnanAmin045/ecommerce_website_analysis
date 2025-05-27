<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import AppSideBar from './components/layout/AppSideBar.vue';
</script>

<template>
  <header>


    <!-- Header -->

    <nav class="h-14 sm:h-16 flex items-center p-5 w-full bg-neutral-700  border-b-2 border-gray-600">
      <AppHeader />
    </nav>
    <main class="w-full flex justify-between h-full bg-neutral-700">

      <!-- Side Bar -->

      <div class="hidden md:block md:w-[18%]">
        <AppSideBar />
      </div>

      <!-- Right Content Area for Routes -->
      <div class="w-full md:w-[82%] bg-neutral-800">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>


    </main>
  </header>
</template>
