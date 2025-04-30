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

  <div class="filter-container">
    <label for="counsellor-select">Select Counsellor:</label>
    <select id="counsellor-select" v-model="selectedCounsellor">
      <option
        v-for="(value, counsellor) in totalClientsMonthly"
        :key="counsellor"
        :value="counsellor"
      >
        {{ counsellor }}
      </option>
    </select>
  </div>

  <div class="graph-container">
    <div>
      <GraphCard title="Total Clients (Weekly)">
        <TotalClientsChart
          :counts="filteredWeeklyClientCounts"
          :labels="weeklyLabels"
        />
      </GraphCard>
    </div>
    <div>
      <GraphCard title="Total Clients (Monthly)">
        <TotalClientsChart
          :counts="filteredMonthlyClientCounts"
          :labels="monthlyLabels"
        />
      </GraphCard>
    </div>
  </div>
</template>

<script>
import StatisticsCard from "@/components/UI/StatisticsCard.vue";
import GraphCard from "@/components/UI/GraphCard.vue";
import TotalClientsChart from "@/components/Graphs/TotalClientsGraph.vue";

export default {
  name: "HomePage",
  components: {
    StatisticsCard,
    GraphCard,
    TotalClientsChart,
  },
  data() {
    return {
      selectedCounsellor: "All Counsellors",
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
      monthlyLabels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      weeklyLabels: [
        "05/02",
        "12/02",
        "19/02",
        "26/02",
        "04/03",
        "11/03",
        "18/03",
        "25/03",
        "01/04",
        "08/04",
        "15/04",
        "22/04",
      ],
      totalClientsMonthly: {
        "All Counsellors": [
          120, 130, 135, 140, 150, 155, 160, 165, 170, 180, 185, 190,
        ],
        "Rebecca McDonnell": [30, 32, 34, 36, 38, 39, 40, 41, 42, 44, 45, 46],
        "Elly Messo": [25, 26, 27, 28, 29, 30, 31, 32, 32, 33, 34, 35],
        "Lorena Halpin-Doyle": [20, 21, 23, 24, 25, 26, 27, 28, 28, 29, 30, 31],
        "Joanne Barnuevo": [45, 48, 51, 52, 53, 54, 56, 58, 60, 64, 66, 68],
      },
      totalClientsWeekly: {
        "All Counsellors": [30, 32, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45],
        "Rebecca McDonnell": [8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11],
        "Elly Messo": [7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9],
        "Lorena Halpin-Doyle": [5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7],
        "Joanne Barnuevo": [10, 11, 12, 13, 13, 14, 15, 15, 14, 15, 16, 17],
      },
    };
  },
  computed: {
    filteredMonthlyClientCounts() {
      return this.totalClientsMonthly[this.selectedCounsellor] || [];
    },
    filteredWeeklyClientCounts() {
      return this.totalClientsWeekly[this.selectedCounsellor] || [];
    },
  },
};
</script>
