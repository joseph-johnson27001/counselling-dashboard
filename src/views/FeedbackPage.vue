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
    <div>
      <GraphCard title="Feedback (Weekly)">
        <FeedbackChart
          :ratings="filteredWeeklyRatings"
          :labels="weeklyLabels"
        />
      </GraphCard>
    </div>
    <div>
      <GraphCard title="Feedback (Monthly)">
        <FeedbackChart
          :ratings="filteredMonthlyRatings"
          :labels="monthlyLabels"
        />
      </GraphCard>
    </div>
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
        "All Counsellors": [
          8.4, 8.5, 8.4, 8.4, 8.5, 8.5, 8.4, 8.5, 8.4, 8.4, 8.5, 8.5,
        ],
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
          9.8, 10.0, 9.8, 10.0, 9.8, 10.0, 9.8, 10.0, 9.8, 10.0, 9.8, 9.5,
        ],
      },
      ratingWeeklyScores: {
        "All Counsellors": [
          8.0, 8.5, 8.8, 9.0, 8.5, 8.8, 9.0, 9.2, 9.5, 9.7, 9.9, 10.0,
        ],
        "Rebecca McDonnell": [
          8.4, 8.5, 8.6, 8.7, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 9.0, 9.1,
        ],
        "Elly Messo": [
          8.2, 8.3, 8.4, 8.2, 8.3, 8.4, 8.5, 8.3, 8.4, 8.3, 8.2, 8.1,
        ],
        "Lorena Halpin-Doyle": [
          7.8, 8.0, 8.1, 8.2, 7.9, 8.0, 8.1, 8.2, 8.1, 7.9, 7.8, 8.2,
        ],
        "Joanne Barnuevo": [
          9.5, 9.6, 9.7, 9.8, 9.7, 9.6, 9.5, 9.6, 9.7, 9.8, 9.9, 10.0,
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
    };
  },
  computed: {
    filteredMonthlyRatings() {
      return this.ratingMonthlyScores[this.selectedCounsellor] || [];
    },
    filteredWeeklyRatings() {
      return this.ratingWeeklyScores[this.selectedCounsellor] || [];
    },
  },
};
</script>
