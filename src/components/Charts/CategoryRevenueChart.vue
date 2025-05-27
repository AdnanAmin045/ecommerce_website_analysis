<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { Doughnut } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js';
import { getRevenueByCategory } from '../sampleData/data';

ChartJS.register(
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  selectedCategory: {
    type: String,
    default: null
  }
});

const chartData = ref({
  labels: [],
  datasets: [
    {
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)', // primary
        'rgba(20, 184, 166, 0.8)', // secondary
        'rgba(249, 115, 22, 0.8)', // accent
        'rgba(16, 185, 129, 0.8)', // success
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(20, 184, 166, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(16, 185, 129, 1)',
      ],
      borderWidth: 1,
      data: []
    }
  ]
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle',
        color: 'white' // white legend text
      }
    },
    tooltip: {
      bodyColor: 'white',  // white tooltip body
      titleColor: 'white', // white tooltip title
      callbacks: {
        label: (context) => {
          const label = context.label || '';
          const value = context.parsed || 0;
          return `${label}: $${value.toFixed(2)}`;
        }
      }
    }
  },
  cutout: '70%'
});

const revenueByCategory = computed(() => {
  const data = getRevenueByCategory();

  if (props.selectedCategory) {
    const filteredData = {};
    filteredData[props.selectedCategory] = data[props.selectedCategory];
    return filteredData;
  }

  return data;
});

const prepareChartData = () => {
  const data = revenueByCategory.value;
  const labels = Object.keys(data);
  const values = Object.values(data);

  chartData.value = {
    labels,
    datasets: [
      {
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)', // primary
          'rgba(20, 184, 166, 0.8)', // secondary
          'rgba(249, 115, 22, 0.8)', // accent
          'rgba(16, 185, 129, 0.8)', // success
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(20, 184, 166, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(16, 185, 129, 1)',
        ],
        borderWidth: 1,
        data: values
      }
    ]
  };
};

watch(() => props.selectedCategory, () => {
  prepareChartData();
});

onMounted(() => {
  prepareChartData();
});
</script>

<template>
  <div class="w-full max-w-md mx-auto aspect-square">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>
