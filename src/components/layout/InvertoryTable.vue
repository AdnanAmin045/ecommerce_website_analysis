<script setup>
import { ref, computed } from 'vue'
import { products as originalProducts } from '../sampleData/useSampleData'

const searchQuery = ref('')
const selectedCategory = ref('')
const selectedStatus = ref('')
const products = ref([...originalProducts])

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesName = product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value
      ? product.category === selectedCategory.value
      : true
    const matchesStatus = selectedStatus.value
      ? product.status === selectedStatus.value
      : true
    return matchesName && matchesCategory && matchesStatus
  })
})

function editProduct(product) {
  alert(`Edit product: ${product.name}`)
}

function deleteProduct(id) {
  if (confirm('Are you sure you want to delete this product?')) {
    products.value = products.value.filter(p => p.id !== id)
  }
}
</script>

<template>
  <div class="p-4 md:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">
    <!-- Filters -->
    <div class="flex flex-col md:flex-row md:items-center gap-4 mb-6">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search the Product..."
        class="px-3 py-2 w-full md:w-1/2 border border-gray-400 focus:border-primary-400 focus:outline-none rounded-md bg-neutral-700 text-white"
      />
      <select
        v-model="selectedCategory"
        class="px-3 py-2 w-full md:w-1/3 border border-gray-400 focus:border-primary-400 focus:outline-none rounded-md bg-neutral-700 text-white"
      >
        <option value="">All Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Toys & Games">Toys & Games</option>
      </select>
      <select
        v-model="selectedStatus"
        class="px-3 py-2 w-full md:w-1/3 border border-gray-400 focus:border-primary-400 focus:outline-none rounded-md bg-neutral-700 text-white"
      >
        <option value="">All Status</option>
        <option value="in stock">In Stock</option>
        <option value="low stock">Low Stock</option>
        <option value="out of stock">Out of Stock</option>
      </select>
    </div>

    <!-- Product Table Wrapper for horizontal scroll -->
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm text-left text-gray-800 dark:text-gray-200">
        <thead class="bg-gray-100 dark:bg-gray-800 text-xs uppercase text-gray-700 dark:text-gray-300">
          <tr>
            <th class="px-4 py-3 whitespace-nowrap">#</th>
            <th class="px-4 py-3 whitespace-nowrap">Name</th>
            <th class="px-4 py-3 whitespace-nowrap">Category</th>
            <th class="px-4 py-3 whitespace-nowrap">Price</th>
            <th class="px-4 py-3 whitespace-nowrap">Stock</th>
            <th class="px-4 py-3 whitespace-nowrap">Status</th>
            <th class="px-4 py-3 text-center whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <TransitionGroup tag="tbody" name="fade" class="divide-y dark:divide-gray-700">
          <tr
            v-for="(product, index) in filteredProducts"
            :key="product.id"
            class="hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <td class="px-4 py-2 whitespace-nowrap">{{ index + 1 }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ product.name }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ product.category }}</td>
            <td class="px-4 py-2 whitespace-nowrap">${{ product.price.toFixed(2) }}</td>
            <td class="px-4 py-2 whitespace-nowrap">{{ product.stock }}</td>
            <td class="px-4 py-2 whitespace-nowrap">
              <span
                class="px-2 py-1 rounded text-xs font-medium"
                :class="{
                  'bg-green-100 text-green-800': product.status === 'in stock',
                  'bg-yellow-100 text-yellow-800': product.status === 'low stock',
                  'bg-red-100 text-red-800': product.status === 'out of stock',
                }"
              >
                {{ product.status }}
              </span>
            </td>
            <td class="px-4 py-2 whitespace-nowrap flex items-center justify-center gap-2">
              <button @click="editProduct(product)" class="text-blue-600 hover:text-blue-800 text-sm">
                Edit
              </button>
              <button @click="deleteProduct(product.id)" class="text-red-600 hover:text-red-800 text-sm">
                Delete
              </button>
            </td>
          </tr>
        </TransitionGroup>
        <tbody v-if="filteredProducts.length === 0">
          <tr>
            <td colspan="7" class="px-4 py-4 text-center text-gray-500 dark:text-gray-400 whitespace-nowrap">
              No products found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
