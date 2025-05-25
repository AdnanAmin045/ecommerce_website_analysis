<script setup>
import { Home, Boxes, FilePlus } from 'lucide-vue-next'
</script>

<template>
    <nav class="flex flex-col gap-4 pt-10">
        <!-- Dashboard -->
        <router-link 
            to="/" 
            class="text-white hover:bg-neutral-600 w-full"
            active-class="bg-neutral-700"
            exact-active-class
        >
            <div class="flex items-center space-x-2 p-3">
                <Home class="w-5 h-5 text-white" />
                <span>Dashboard</span>
            </div>
        </router-link>

        <!-- Inventory -->
        <router-link 
            to="/inventory" 
            class="text-white hover:bg-neutral-600 w-full"
            active-class="bg-neutral-700"
        >
            <div class="flex items-center space-x-2 p-3">
                <Boxes class="w-5 h-5 text-white" />
                <span>Inventory</span>
            </div>
        </router-link>

        <!-- Product Registration -->
        <router-link 
            to="/registerProduct" 
            class="text-white hover:bg-neutral-600 w-full"
            active-class="bg-neutral-700"
        >
            <div class="flex items-center space-x-2 p-3">
                <FilePlus class="w-5 h-5 text-white" />
                <span>Product Registration</span>
            </div>
        </router-link>
    </nav>
</template>