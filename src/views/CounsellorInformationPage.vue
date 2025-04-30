<template>
  <h2>Counsellor Information</h2>
  <div class="filter-container">
    <label for="counsellor-select">Select Counsellor:</label>
    <select id="counsellor-select" v-model="selectedCounsellor">
      <option
        v-for="counsellor in Object.keys(sessionHoursMonthly)"
        :key="counsellor"
        :value="counsellor"
      >
        {{ counsellor }}
      </option>
    </select>
  </div>

  <div class="graph-container">
    <div>
      <GraphCard title="Total Session Hours (Weekly)">
        <TotalSessionHoursChart
          :sessionHours="filteredWeeklySessionHours"
          :labels="weeklyLabels"
        />
      </GraphCard>
    </div>
    <div>
      <GraphCard title="Total Session Hours (Monthly)">
        <TotalSessionHoursChart
          :sessionHours="filteredMonthlySessionHours"
          :labels="monthlyLabels"
        />
      </GraphCard>
    </div>
  </div>
</template>

<script>
import GraphCard from "@/components/UI/GraphCard.vue";
import TotalSessionHoursChart from "@/components/Graphs/TotalSessionHoursGraph.vue";

export default {
  name: "CounsellorInformationPage",
  components: {
    GraphCard,
    TotalSessionHoursChart,
  },
  data() {
    return {
      selectedCounsellor: "All Counsellors",
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
      sessionHoursMonthly: {
        "All Counsellors": [
          200, 210, 220, 230, 240, 245, 250, 255, 260, 270, 275, 280,
        ],
        "Rebecca McDonnell": [50, 52, 54, 55, 56, 58, 60, 60, 62, 63, 64, 65],
        "Elly Messo": [40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 53, 54],
        "Lorena Halpin-Doyle": [30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
        "Joanne Barnuevo": [80, 85, 88, 90, 92, 94, 95, 97, 98, 100, 101, 102],
      },
      sessionHoursWeekly: {
        "All Counsellors": [50, 52, 54, 56, 57, 58, 59, 60, 62, 63, 64, 65],
        "Rebecca McDonnell": [12, 13, 13, 14, 14, 15, 15, 15, 16, 16, 17, 17],
        "Elly Messo": [10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13],
        "Lorena Halpin-Doyle": [7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10],
        "Joanne Barnuevo": [21, 22, 23, 23, 24, 25, 25, 25, 24, 25, 25, 25],
      },
    };
  },
  computed: {
    filteredMonthlySessionHours() {
      return this.sessionHoursMonthly[this.selectedCounsellor] || [];
    },
    filteredWeeklySessionHours() {
      return this.sessionHoursWeekly[this.selectedCounsellor] || [];
    },
  },
};
</script>
