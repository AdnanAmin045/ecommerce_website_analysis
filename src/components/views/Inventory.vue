<script setup>
import InventoryAlert from '../layout/InventoryAlert.vue';
import InventaryCard from '../layout/InventoryCard.vue';
import InvertoryTable from '../layout/InvertoryTable.vue';
import { ArrowDownToLine } from 'lucide-vue-next';

</script>
<template>
    <div class="p-5 sm:p-10 flex flex-col space-y-5">

        <!-- Header: Stack on xs, inline on sm+ -->
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
            <h4 class="text-2xl text-white font-bold">Inventory Management</h4>

            <button
                class="px-3 py-2 border border-gray-400 flex items-center gap-2 rounded-md hover:bg-neutral-700 text-white text-sm sm:text-md"
                type="button">
                <ArrowDownToLine class="w-4 h-4" />
                <span>Export</span>
            </button>
        </div>

        <InventaryCard />
        <InventoryAlert />
        <InvertoryTable />

    </div>
</template>