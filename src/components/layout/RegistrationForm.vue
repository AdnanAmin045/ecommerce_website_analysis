<script setup>
import { reactive, ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const initialValues = {
  productName: "",
  productPrice: null,
  productInitialStock: null,
  productDescription: "",
  productImage: null
}

const formValues = reactive({...initialValues})
const imagePreview = ref(null)

// handle Image upload

function handleImage(e) {
  const file = e.target.files[0]
  formValues.productImage = file
  imagePreview.value = URL.createObjectURL(file)
}

// handle reset 

function handleReset() {
  Object.assign(formValues, {...initialValues})
  imagePreview.value = null
}


// handle validation


function validation() {
  return !formValues.productName ||
    !formValues.productPrice ||
    !formValues.productInitialStock ||
    !formValues.productDescription ||
    !formValues.productImage
}


// handle toast messages

function successmessage(){
  toast.success("Data has been saved",{
    timeout:3000,
     toastClassName: 'my-custom-toast'
  })
}

function errormessage(){
  toast.error("Fill all the fields",{
    timeout:3000,
    toastClassName: 'my-custom-toast'
  })
}


// handle submit 


function handleSubmit(event){
  event.preventDefault()  
  if(validation()){
    errormessage()
  } else {
    successmessage()
    handleReset()
  }
}
</script>

<template>
  <div class="bg-neutral-700 p-5 rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-6 text-white">Basic Information</h2>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-6" @submit="handleSubmit">

      <!-- Product Name -->
      <div class="flex flex-col">
        <label for="productName" class="mb-1 text-white text-sm ml-1">Product Name *</label>
        <input type="text" v-model="formValues.productName" id="productName"
          class="border border-gray-400 focus:border-primary-400 focus:outline-none rounded-md p-2 bg-neutral-700 text-white"
          placeholder="Enter product name" />
      </div>

      <!-- Product Price -->
      <div class="flex flex-col">
        <label for="price" class="mb-1 text-white text-sm ml-1">Price *</label>
        <input type="number" v-model="formValues.productPrice" id="price"
          class="border border-gray-400 focus:border-primary-400 focus:outline-none rounded-md p-2 bg-neutral-700 text-white"
          placeholder="Enter price" />
      </div>

      <!-- Initial Stock -->
      <div class="flex flex-col">
        <label for="stock" class="mb-1 text-white text-sm ml-1">Initial Stock *</label>
        <input type="number" id="stock" v-model="formValues.productInitialStock"
          class="border border-gray-400 focus:border-primary-400 focus:outline-none rounded-md p-2 bg-neutral-700 text-white"
          placeholder="Enter stock quantity" />
      </div>

      <!-- Product Description -->
      <div class="flex flex-col md:col-span-2">
        <label for="description" class="mb-1 text-white text-sm ml-1">Product Description *</label>
        <textarea id="description" rows="4" v-model="formValues.productDescription"
          class="border border-gray-400 focus:border-primary-400 focus:outline-none rounded-md p-2 bg-neutral-700 text-white"
          placeholder="Enter product description"></textarea>
      </div>

      <!-- Product Image -->
      <h2 class="text-2xl font-semibold text-white md:col-span-2">Product Image</h2>

      <div class="flex flex-col md:flex-row gap-6 md:col-span-2">
        <!-- Preview Box -->
        <div v-if="formValues.productImage"
          class="w-64 h-40 border-2 border-dashed border-gray-400 rounded-md bg-neutral-700 flex items-center justify-center">
          <img :src="imagePreview" alt="Preview"
            class="w-full h-full object-cover rounded-md" />
        </div>

        <!-- Upload Box -->
        <label for="productImage"
          class="flex flex-col items-center justify-center w-64 h-40 border-2 border-dashed border-gray-400 rounded-md cursor-pointer bg-neutral-700 hover:border-primary-500 transition duration-200">
          <svg class="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
          </svg>
          <span class="text-sm text-gray-400">Click to upload image</span>
          <input id="productImage" type="file" accept="image/*" class="hidden" @change="handleImage" />
        </label>
      </div>

      <p class="text-gray-400 text-sm md:col-span-2 mt-2">
        Upload up to 5 images. Supported formats: JPG, PNG, GIF. Max size: 5MB each.
      </p>

      <!-- Submit & Reset Buttons -->
      <div class="md:col-span-2 flex justify-end gap-4">
        <button type="reset" @click="handleReset"
          class="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300">
          Reset
        </button>
        <button type="submit"
          class="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600 transition duration-300">
          Submit Product
        </button>
      </div>
    </form>
  </div>
</template>
<style>
.my-custom-toast {
  width: 300px !important;
  height: 40px !important;
}
</style>