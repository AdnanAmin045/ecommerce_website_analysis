<script setup>
import InventoryAlert from '../layout/InventoryAlert.vue';
import InventaryCard from '../layout/InventoryCard.vue';
import InvertoryTable from '../layout/InvertoryTable.vue';
import { ArrowDownToLine } from 'lucide-vue-next';

</script>

<template>
    <div class="p-10 flex flex-col space-y-5">
        <div class="flex justify-between items-center">
            <h4 class="text-2xl text-white font-bold">Inventory Management</h4>
            <button class="px-3 py-2 border border-gray-400 flex items-center gap-3 rounded-md hover:bg-neutral-700">
                <ArrowDownToLine class="w-4 h-4 text-white" />
                <span class="text-md text-white"> Export</span>
            </button>
        </div>
        <InventaryCard />
        <InventoryAlert />
        <InvertoryTable />

    </div>
</template>