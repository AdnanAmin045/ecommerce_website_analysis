<!-- MobileSidebar.vue -->
<script setup>
import { X, Home, Boxes, FilePlus } from 'lucide-vue-next'
defineProps(['isOpen'])
defineEmits(['close'])
</script>

<template>
    <!-- Overlay for mobile -->
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" @click.self="$emit('close')"></div>

    <!-- Sidebar -->
    <div :class="[
        'fixed top-0 left-0 w-64 h-full bg-neutral-800 z-50 transition-transform duration-300 md:hidden',
        isOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
        <div class="flex justify-between items-center p-4">
            <h1 class="text-white text-lg">Menu</h1>
            <button @click="$emit('close')" class="text-white">
                <X class="w-6 h-6" />
            </button>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-col gap-2 pt-4 px-2">
            <router-link to="/" class="text-white hover:bg-neutral-600 rounded-md w-full" active-class="bg-neutral-700">
                <div class="flex items-center space-x-2 p-3">
                    <Home class="w-5 h-5" />
                    <span>Dashboard</span>
                </div>
            </router-link>

            <router-link to="/inventory" class="text-white hover:bg-neutral-600 rounded-md w-full"
                active-class="bg-neutral-700">
                <div class="flex items-center space-x-2 p-3">
                    <Boxes class="w-5 h-5" />
                    <span>Inventory</span>
                </div>
            </router-link>

            <router-link to="/registerProduct" class="text-white hover:bg-neutral-600 rounded-md w-full"
                active-class="bg-neutral-700">
                <div class="flex items-center space-x-2 p-3">
                    <FilePlus class="w-5 h-5" />
                    <span>Product Registration</span>
                </div>
            </router-link>
        </nav>
    </div>
</template>
