<template>
  <h2>Themes</h2>
  <div class="stats-grid">
    <StatisticsCard
      v-for="theme in themes"
      :key="theme.label"
      :icon-class="theme.iconClass"
      :stat-name="theme.label"
      :value="theme.value"
      :icon-color="theme.iconColor"
      :icon-container-color="theme.iconContainerColor"
    />
  </div>
  <div class="graph-container">
    <GraphCard title="Themes">
      <ThemesChart :themes="themes" />
    </GraphCard>
  </div>
</template>

<script>
import GraphCard from "@/components/UI/GraphCard.vue";
import StatisticsCard from "@/components/UI/StatisticsCard.vue";
import ThemesChart from "@/components/Graphs/ThemesChart.vue";

export default {
  name: "ThemesPage",
  components: {
    GraphCard,
    StatisticsCard,
    ThemesChart,
  },
  data() {
    return {
      themes: [
        {
          label: "Anxiety",
          value: 20,
          iconClass: "fas fa-brain",
          iconColor: "#556ee6",
          iconContainerColor: "rgba(85, 110, 230, 0.1)",
        },
        {
          label: "Disordered Eating",
          value: 2,
          iconClass: "fas fa-utensils",
          iconColor: "#f46a6a",
          iconContainerColor: "rgba(244, 106, 106, 0.1)",
        },
        {
          label: "Neurodiversity",
          value: 18,
          iconClass: "fas fa-dna",
          iconColor: "#34c38f",
          iconContainerColor: "rgba(52, 195, 143, 0.1)",
        },
        {
          label: "Suspected Neurodiversity",
          value: 6,
          iconClass: "fas fa-question-circle",
          iconColor: "#50a5f1",
          iconContainerColor: "rgba(80, 165, 241, 0.1)",
        },
        {
          label: "Academic Support",
          value: 12,
          iconClass: "fas fa-book",
          iconColor: "#f1b44c",
          iconContainerColor: "rgba(241, 180, 76, 0.1)",
        },
        {
          label: "Interpersonal Dynamics",
          value: 6,
          iconClass: "fas fa-users",
          iconColor: "#343a40",
          iconContainerColor: "rgba(52, 58, 64, 0.1)",
        },
        {
          label: "Intrapersonal",
          value: 6,
          iconClass: "fas fa-user",
          iconColor: "#556ee6",
          iconContainerColor: "rgba(85, 110, 230, 0.1)",
        },
        {
          label: "Grief & Loss",
          value: 7,
          iconClass: "fas fa-heart-broken",
          iconColor: "#f46a6a",
          iconContainerColor: "rgba(244, 106, 106, 0.1)",
        },
        {
          label: "Trauma",
          value: 15,
          iconClass: "fas fa-band-aid",
          iconColor: "#34c38f",
          iconContainerColor: "rgba(52, 195, 143, 0.1)",
        },
        {
          label: "Emotional Regulation",
          value: 10,
          iconClass: "fas fa-balance-scale",
          iconColor: "#50a5f1",
          iconContainerColor: "rgba(80, 165, 241, 0.1)",
        },
        {
          label: "Low Mood",
          value: 8,
          iconClass: "fas fa-meh",
          iconColor: "#f1b44c",
          iconContainerColor: "rgba(241, 180, 76, 0.1)",
        },
        {
          label: "Risk Taking Behaviours",
          value: 12,
          iconClass: "fas fa-exclamation-triangle",
          iconColor: "#f46a6a",
          iconContainerColor: "rgba(244, 106, 106, 0.1)",
        },
        {
          label: "Sleep",
          value: 18,
          iconClass: "fas fa-bed",
          iconColor: "#556ee6",
          iconContainerColor: "rgba(85, 110, 230, 0.1)",
        },
        {
          label: "School Transitions",
          value: 9,
          iconClass: "fas fa-school",
          iconColor: "#343a40",
          iconContainerColor: "rgba(52, 58, 64, 0.1)",
        },
        {
          label: "School",
          value: 5,
          iconClass: "fas fa-chalkboard-teacher",
          iconColor: "#50a5f1",
          iconContainerColor: "rgba(80, 165, 241, 0.1)",
        },
      ],
    };
  },
};
</script>

<style scoped>
.stats-grid {
  grid-template-columns: repeat(5, 1fr);
}

@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
