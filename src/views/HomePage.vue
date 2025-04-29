<template>
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
</template>

<script>
import StatisticsCard from "@/components/UI/StatisticsCard.vue";

export default {
  name: "HomePage",
  components: {
    StatisticsCard,
  },
  data() {
    return {
      stats: [
        {
          iconClass: "fas fa-user-friends",
          statName: "Students In Counselling",
          value: "75",
          iconColor: "#28c76f",
          iconContainerColor: "rgba(40, 199, 111, 0.1)",
        },
        {
          iconClass: "fas fa-ban",
          statName: "No Shows",
          value: "5%",
          iconColor: "#ff6f91",
          iconContainerColor: "rgba(255, 111, 145, 0.1)",
        },
        {
          iconClass: "fas fa-clock",
          statName: "Waitlist",
          value: "3",
          iconColor: "#ea5455",
          iconContainerColor: "rgba(234, 84, 85, 0.1)",
        },
        {
          iconClass: "fas fa-chair",
          statName: "Available Slots",
          value: "9",
          iconColor: "#00cfe8",
          iconContainerColor: "rgba(0, 207, 232, 0.1)",
        },
        {
          iconClass: "fas fa-user-clock",
          statName: "Average Wait Time",
          value: "6 days",
          iconColor: "#7367f0",
          iconContainerColor: "rgba(115, 103, 240, 0.1)",
        },
        {
          iconClass: "fas fa-hand-paper",
          statName: "Total Students Who Accessed Counselling",
          value: "130",
          iconColor: "#ff9f43",
          iconContainerColor: "rgba(255, 159, 67, 0.1)",
        },
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
      ],
    };
  },
};
</script>

<style>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}

@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 900px) {
  .graph-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
