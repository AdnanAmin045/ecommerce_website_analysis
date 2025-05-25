<script setup>
import { AlertTriangle } from 'lucide-vue-next';
</script>

<template>
    <div class="bg-red-50 rounded-md border-l-6 border-warning">
        <dl>
            <dt>
                <AlertTriangle />
                <h1>Low Stock Alert</h1>
            </dt>
            <dd>
                <h1>The following items are running low and need restocking:</h1>
                <ol>
                    <li>Premium Skincare Set - 0 units left <span>(Out of stock!)</span> </li>
                    <li>Wireless Gaming Headset - 0 units left <span>(Out of stock!)</span> </li>
                    <li>Stainless Steel Cookware Set - 7 units left</li>
                    <li>And 2 more items...</li>
                </ol>
            </dd>
        </dl>
    </div>
</template>