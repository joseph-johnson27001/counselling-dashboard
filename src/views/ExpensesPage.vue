<template>
  <h2>Expenses</h2>
  <div class="stats-grid">
    <StatisticsCard
      v-for="stat in stats"
      :key="stat.statName"
      :icon-class="stat.iconClass"
      :stat-name="stat.statName"
      :value="stat.value"
      :icon-color="stat.iconColor"
      :icon-container-color="stat.iconContainerColor"
    />
  </div>
  <div class="graph-container">
    <GraphCard title="Expenses">
      <BudgetChart :total="budget.total" :categories="budget.categories" />
    </GraphCard>
  </div>
</template>

<script>
import StatisticsCard from "@/components/UI/StatisticsCard.vue";
import GraphCard from "@/components/UI/GraphCard.vue";
import BudgetChart from "@/components/Graphs/BudgetChart.vue";

export default {
  name: "HomePage",
  components: {
    StatisticsCard,
    GraphCard,
    BudgetChart,
  },
  data() {
    return {
      stats: [
        {
          iconClass: "fas fa-wallet",
          statName: "Total Budget",
          value: "฿80,000",
          iconColor: "#34c38f",
          iconContainerColor: "rgba(52, 195, 143, 0.1)",
        },
        {
          iconClass: "fas fa-piggy-bank",
          statName: "Budget Remaining",
          value: "฿25,000",
          iconColor: "#ffbc00",
          iconContainerColor: "rgba(255, 188, 0, 0.1)",
        },
        {
          iconClass: "fas fa-money-bill-wave",
          statName: "Total Spent",
          value: "฿46,600",
          iconColor: "#f46a6a",
          iconContainerColor: "rgba(244, 106, 106, 0.1)",
        },
        {
          iconClass: "fas fa-percentage",
          statName: "Spending Rate",
          value: "93%",
          iconColor: "#556ee6",
          iconContainerColor: "rgba(85, 110, 230, 0.1)",
        },
      ],
      budget: {
        total: 50000,
        categories: {
          "Furniture & Equipment": 12000,
          "Student Materials": 1600,
          "Training & Development": 60000,
          Miscellaneous: 3000,
          Remaining: 3400,
        },
      },
    };
  },
};
</script>
