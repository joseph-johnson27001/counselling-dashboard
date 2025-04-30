<template>
  <h2>Comments</h2>
  <div class="filter-container">
    <label for="counsellor-select">Select Counsellor:</label>
    <select v-model="selectedCounsellor" @change="filterComments">
      <option value="all">All Counsellors</option>
      <option
        v-for="(counsellor, index) in counsellors"
        :key="index"
        :value="counsellor"
      >
        {{ counsellor }}
      </option>
    </select>
  </div>
  <CommentsTable :comments="filteredComments" />
</template>

<script>
import CommentsTable from "@/components/Tables/CommentsTable.vue";

export default {
  name: "CommentsPage",
  components: {
    CommentsTable,
  },
  data() {
    return {
      comments: [
        {
          text: "Joanne always listens attentively and offers thoughtful insights.",
          counsellor: "Joanne Barnuevo",
          date: "05/04/2025",
        },
        {
          text: "Her calm and compassionate nature really put me at ease.",
          counsellor: "Joanne Barnuevo",
          date: "08/04/2025",
        },
        {
          text: "Rebecca made me feel heard and supported throughout.",
          counsellor: "Rebecca McDonnell",
          date: "06/04/2025",
        },
        {
          text: "She is incredibly understanding and gives great advice.",
          counsellor: "Rebecca McDonnell",
          date: "09/04/2025",
        },
        {
          text: "Elly has a warm and reassuring presence that helped me open up.",
          counsellor: "Elly Messo",
          date: "04/04/2025",
        },
        {
          text: "I felt truly respected and supported during my session with Elly.",
          counsellor: "Elly Messo",
          date: "10/04/2025",
        },
        {
          text: "Lorena was professional and kind — I felt very comfortable talking to her.",
          counsellor: "Lorena Halpin-Doyle",
          date: "03/04/2025",
        },
        {
          text: "She helped me see things from a new, more positive perspective.",
          counsellor: "Lorena Halpin-Doyle",
          date: "07/04/2025",
        },
      ],
      selectedCounsellor: "all",
    };
  },
  computed: {
    counsellors() {
      const counsellorList = this.comments.map((comment) => comment.counsellor);
      return [...new Set(counsellorList)];
    },
    filteredComments() {
      if (this.selectedCounsellor === "all") {
        return this.comments;
      } else {
        return this.comments.filter(
          (comment) => comment.counsellor === this.selectedCounsellor
        );
      }
    },
  },
};
</script>

<style scoped>
.comments-table-container {
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px 20px 20px 20px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
  font-family: "Assistant", sans-serif;
  box-sizing: border-box;
}

.table-wrapper {
  overflow-x: auto;
}

.comments-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.comments-table th,
.comments-table td {
  padding: 12px;
  text-align: left;

  color: #333;
}

.comments-table th {
  background-color: #4a86e8;
  color: white;
  font-weight: 600;
}

.comments-table tbody tr:nth-child(odd) {
  background-color: #f9f9f9;
}

.comments-table tbody tr:nth-child(even) {
  background-color: #ffffff;
}

.comments-table tbody tr:hover {
  background-color: #e0f7fa;
}

.comment-text {
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.counsellor-name {
  color: #00796b;
  font-weight: 500;
}

.date {
  color: #757575;
  font-style: italic;
}

@media (max-width: 800px) {
  .comments-table th,
  .comments-table td {
    padding: 8px;
  }

  .comments-table-container {
    padding: 10px;
  }
}
</style>
