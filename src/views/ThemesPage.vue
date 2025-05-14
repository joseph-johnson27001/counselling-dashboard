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

  <!-- FILTER AREA -->
  <div class="filters">
    <div class="filter-controls">
      <input type="text" v-model="filters.name" placeholder="Search by name" />

      <select v-model="filters.yearGroup">
        <option value="">All Year Groups</option>
        <option v-for="year in yearGroups" :key="year" :value="year">
          {{ year }}
        </option>
      </select>

      <select v-model="filters.gender">
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <div class="theme-checkboxes">
        <div class="checkbox-grid">
          <label
            v-for="theme in themes"
            :key="theme.label"
            class="checkbox-item"
          >
            <input
              type="checkbox"
              :value="theme.label"
              v-model="filters.selectedThemes"
            />
            {{ theme.label }}
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="student-table-container">
    <div class="table-wrapper">
      <table class="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Year Group</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Themes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in filteredStudents" :key="student.name">
            <td class="student-name">{{ student.name }}</td>
            <td>{{ student.yearGroup }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.age }}</td>
            <td>
              <ul class="theme-list">
                <li v-for="theme in getStudentThemes(student)" :key="theme">
                  {{ theme }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
      // FILTER DATA
      yearGroups: [7, 8, 9, 10, 11, 12, 13],
      filters: {
        name: "",
        yearGroup: "",
        gender: "",
        age: null,
        selectedThemes: [],
      },
      students: [
        {
          name: "Alice",
          yearGroup: 10,
          gender: "Female",
          age: 15,
          themes: {
            Anxiety: true,
            Trauma: true,
            Sleep: false,
          },
        },
        {
          name: "Bob",
          yearGroup: 11,
          gender: "Male",
          age: 16,
          themes: {
            Sleep: true,
            LowMood: true,
            Anxiety: false,
          },
        },
        {
          name: "Charlie",
          yearGroup: 12,
          gender: "Other",
          age: 17,
          themes: {
            Anxiety: true,
            Neurodiversity: true,
            "Academic Support": true,
          },
        },
        {
          name: "Daisy",
          yearGroup: 9,
          gender: "Female",
          age: 14,
          themes: {
            "Disordered Eating": true,
            Trauma: true,
          },
        },
        {
          name: "Ethan",
          yearGroup: 13,
          gender: "Male",
          age: 18,
          themes: {
            "Risk Taking Behaviours": true,
            "Emotional Regulation": true,
            Anxiety: false,
          },
        },
        {
          name: "Fiona",
          yearGroup: 10,
          gender: "Female",
          age: 15,
          themes: {
            "Grief & Loss": true,
            Sleep: true,
            Trauma: false,
          },
        },
        {
          name: "George",
          yearGroup: 11,
          gender: "Male",
          age: 16,
          themes: {
            Anxiety: true,
            Intrapersonal: true,
            "School Transitions": true,
          },
        },
        {
          name: "Hannah",
          yearGroup: 9,
          gender: "Female",
          age: 14,
          themes: {
            Neurodiversity: true,
            "Low Mood": true,
          },
        },
        {
          name: "Isaac",
          yearGroup: 12,
          gender: "Male",
          age: 17,
          themes: {
            School: true,
            "Academic Support": true,
            Sleep: false,
          },
        },
        {
          name: "Jasmine",
          yearGroup: 11,
          gender: "Female",
          age: 16,
          themes: {
            "Interpersonal Dynamics": true,
            Intrapersonal: true,
            Anxiety: true,
          },
        },
        {
          name: "Kai",
          yearGroup: 10,
          gender: "Other",
          age: 15,
          themes: {
            "Suspected Neurodiversity": true,
            "Emotional Regulation": true,
          },
        },
        {
          name: "Lily",
          yearGroup: 13,
          gender: "Female",
          age: 18,
          themes: {
            Trauma: true,
            "Grief & Loss": true,
            Anxiety: true,
          },
        },
        {
          name: "Mason",
          yearGroup: 9,
          gender: "Male",
          age: 14,
          themes: {
            "Disordered Eating": true,
            "Risk Taking Behaviours": true,
            Sleep: true,
          },
        },
        {
          name: "Nina",
          yearGroup: 12,
          gender: "Female",
          age: 17,
          themes: {
            "Academic Support": true,
            School: true,
            "Low Mood": false,
          },
        },
      ],
    };
  },
  computed: {
    filteredStudents() {
      return this.students.filter((student) => {
        const matchesName = student.name
          .toLowerCase()
          .includes(this.filters.name.toLowerCase());

        const matchesYear =
          !this.filters.yearGroup ||
          student.yearGroup == this.filters.yearGroup;

        const matchesGender =
          !this.filters.gender || student.gender === this.filters.gender;

        const matchesAge =
          !this.filters.age || student.age === this.filters.age;

        const matchesThemes =
          this.filters.selectedThemes.length === 0 ||
          this.filters.selectedThemes.every((theme) => student.themes[theme]);

        return (
          matchesName &&
          matchesYear &&
          matchesGender &&
          matchesAge &&
          matchesThemes
        );
      });
    },
  },
  methods: {
    getStudentThemes(student) {
      return Object.entries(student.themes)
        .filter(([val]) => val)
        .map(([key]) => key);
    },
  },
};
</script>

<style scoped>
.stats-grid {
  grid-template-columns: repeat(5, 1fr);
}

.filters {
  margin-top: 2rem;
}

input {
  padding: 15px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
}

.filter-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.theme-checkboxes {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.theme-checkboxes h3 {
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.checkbox-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.5rem;
}

.checkbox-grid input {
  width: auto;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #444;
}

.student-table-container {
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px 20px 20px 20px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
  font-family: "Assistant", sans-serif;
  box-sizing: border-box;
  margin-top: 2rem;
}

.table-wrapper {
  overflow-x: auto;
}

.student-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.student-table th,
.student-table td {
  padding: 12px;
  text-align: left;
  font-size: 15px;
  color: #333;
}

.student-table th {
  background-color: #4a86e8;
  color: white;
  font-weight: 600;
}

.student-table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

.student-table tbody tr:nth-child(even) {
  background-color: #ffffff;
}

.student-table tbody tr:hover {
  background-color: #e0f7fa;
}

.student-name {
  color: #00796b;
  font-weight: 500;
}

.theme-list {
  padding-left: 16px;
  margin: 0;
}

@media (max-width: 800px) {
  .student-table th,
  .student-table td {
    font-size: 12px;
    padding: 8px;
  }

  .student-table-container {
    padding: 10px;
  }
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
