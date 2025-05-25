<script setup>
import { ref, onMounted } from 'vue';
import { Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js';
import { getInventoryStatusCounts } from '../sampleData/data';

ChartJS.register(
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const chartData = ref({
  labels: ['In Stock', 'Low Stock', 'Out of Stock'],
  datasets: [
    {
      backgroundColor: [
        'rgba(16, 185, 129, 0.8)', 
        'rgba(245, 158, 11, 0.8)', 
        'rgba(239, 68, 68, 0.8)',  
      ],
      borderColor: [
        'rgba(16, 185, 129, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(239, 68, 68, 1)',
      ],
      borderWidth: 1,
      data: [0, 0, 0]
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
        color: 'white' 
      }
    },
    tooltip: {
      bodyColor: 'white', 
      titleColor: 'white',
    }
  }
});

const prepareChartData = () => {
  const statusCounts = getInventoryStatusCounts();
  
  chartData.value = {
    labels: ['In Stock', 'Low Stock', 'Out of Stock'],
    datasets: [
      {
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
        data: [
          statusCounts['in stock'],
          statusCounts['low stock'],
          statusCounts['out of stock']
        ]
      }
    ]
  };
};

onMounted(() => {
  prepareChartData();
});
</script>

<template>
  <div class="h-64">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>
