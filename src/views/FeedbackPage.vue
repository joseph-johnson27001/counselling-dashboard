<template>
  <div class="filter-container">
    <label for="counsellor-select">Select Counsellor:</label>
    <select id="counsellor-select" v-model="selectedCounsellor">
      <option
        v-for="(value, counsellor) in ratingMonthlyScores"
        :key="counsellor"
        :value="counsellor"
      >
        {{ counsellor }}
      </option>
    </select>
  </div>
  <div class="graph-container">
    <GraphCard title="Feedback">
      <FeedbackChart :ratings="filteredRatings" :labels="monthlyLabels" />
    </GraphCard>
  </div>
</template>

<script>
import FeedbackChart from "@/components/Graphs/FeedbackChart.vue";
import GraphCard from "@/components/UI/GraphCard.vue";

export default {
  name: "FeedbackPage",
  components: {
    FeedbackChart,
    GraphCard,
  },
  data() {
    return {
      selectedCounsellor: "All Counsellors",
      ratingMonthlyScores: {
        "Rebecca McDonnell": [
          9.0, 8.8, 8.6, 9.2, 8.8, 8.6, 9.0, 9.2, 8.8, 8.6, 9.0, 8.8,
        ],
        "Elly Messo": [
          8.6, 8.8, 9.0, 8.6, 8.8, 9.0, 8.6, 8.8, 8.6, 9.0, 8.8, 8.6,
        ],
        "Lorena Halpin-Doyle": [
          8.4, 8.6, 8.8, 8.4, 8.6, 8.8, 8.4, 8.6, 8.8, 8.4, 8.6, 8.8,
        ],
        "Joanne Barnuevo": [
          9.8, 10.0, 9.8, 10.0, 9.8, 10.0, 9.8, 10.0, 9.8, 10.0, 9.8, 10.0,
        ],
        "All Counsellors": [
          8.4, 8.5, 8.4, 8.4, 8.5, 8.5, 8.4, 8.5, 8.4, 8.4, 8.5, 8.5,
        ],
      },
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
    };
  },
  computed: {
    filteredRatings() {
      return this.ratingMonthlyScores[this.selectedCounsellor] || [];
    },
  },
};
</script>
