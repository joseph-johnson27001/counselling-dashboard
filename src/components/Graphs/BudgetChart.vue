<template>
  <div class="chart-container">
    <canvas ref="budgetPieChart"></canvas>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  PieController,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { toRaw } from "vue";

ChartJS.register(PieController, ArcElement, Tooltip, Legend, Title);

export default {
  name: "BudgetPieChart",
  props: {
    total: {
      type: Number,
      required: true,
    },
    categories: {
      type: Object,
      required: true,
      validator: (val) =>
        Object.values(val).every((num) => typeof num === "number"),
    },
  },
  data() {
    return {
      chartInstance: null,
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(() => {
      this.renderChart();
      window.addEventListener("resize", this.handleResize);
    });
  },
  beforeUnmount() {
    this.isMounted = false;
    window.removeEventListener("resize", this.handleResize);
    this.destroyChart();
  },
  watch: {
    categories: "renderChart",
    total: "renderChart",
  },
  methods: {
    renderChart() {
      if (!this.isMounted || !this.$refs.budgetPieChart) return;

      this.destroyChart();

      const categoryEntries = Object.entries(toRaw(this.categories));
      const labels = categoryEntries.map(([key]) => key);
      const data = categoryEntries.map(([, value]) => value);

      const baseColors = [
        "255, 112, 67",
        "219, 68, 55",
        "3, 169, 244",
        "15, 157, 88",
        "171, 71, 188",
        "0, 172, 193",
        "94, 53, 177",
        "0, 150, 136",
        "255, 87, 34",
        "124, 179, 66",
        "101, 31, 255",
        "255, 202, 40",
        "233, 30, 99",
      ];

      const backgroundColors = baseColors
        .slice(0, labels.length)
        .map((rgb) => `rgba(${rgb}, 0.6)`);

      this.chartInstance = new ChartJS(this.$refs.budgetPieChart, {
        type: "pie",
        data: {
          labels,
          datasets: [
            {
              data,
              backgroundColor: backgroundColors,
              hoverOffset: 10,
              borderWidth: 2,
              borderColor: "#fff",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
              labels: {
                color: "#333",
              },
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) =>
                  `${tooltipItem.label}: ฿${tooltipItem.raw.toLocaleString()}`,
              },
            },
          },
        },
      });
    },

    destroyChart() {
      if (this.chartInstance) {
        toRaw(this.chartInstance).destroy();
        this.chartInstance = null;
      }
    },

    handleResize() {
      if (this.chartInstance) {
        requestAnimationFrame(() => this.chartInstance?.resize());
      }
    },
  },
};
</script>
