<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js';
import { getSalesByDate, getSalesByCategory } from '../sampleData/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  timeRange: {
    type: String,
    default: 'daily'
  },
  category: {
    type: String,
    default: null
  }
});

const salesByDate = getSalesByDate();
const sortedDates = Object.keys(salesByDate).sort();

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 2,
      tension: 0.4,
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
      data: []
    }
  ]
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(200, 200, 200, 0.1)'
      },
      ticks: {
        color: '#fff',
        callback: (value) => {
          return '$' + value;
        }
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#fff'
      }
    }
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          return 'Revenue: $' + context.parsed.y;
        }
      }
    },
    legend: {
      display: false
    }
  }
});

const prepareChartData = () => {
  let filteredSales = props.category 
    ? getSalesByCategory(props.category)
    : getSalesByCategory();
  
  const groupedSales = {};
  filteredSales.forEach(sale => {
    if (!groupedSales[sale.date]) {
      groupedSales[sale.date] = 0;
    }
    groupedSales[sale.date] += sale.revenue;
  });
  
  let dates = Object.keys(groupedSales).sort();
  
  if (props.timeRange === 'daily') {
    dates = dates.slice(-7);
  } else if (props.timeRange === 'weekly') {
    dates = dates.filter(date => date.includes('24') || date.includes('17'));
  } else if (props.timeRange === 'monthly') {
    dates = dates.filter(date => date.includes('-01'));
  }
  
  const formattedDates = dates.map(date => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}`;
  });
  
  chartData.value = {
    labels: formattedDates,
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
        data: dates.map(date => groupedSales[date] || 0)
      }
    ]
  };
};

watch(() => [props.timeRange, props.category], () => {
  prepareChartData();
}, { immediate: true });

onMounted(() => {
  prepareChartData();
});
</script>

<template>
  <div class="h-64">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>
