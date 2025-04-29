<template>
  <div class="comments-table-container">
    <div class="table-wrapper">
      <table class="comments-table">
        <thead>
          <tr>
            <th>Comment</th>
            <th>Counsellor</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(comment, index) in comments" :key="index">
            <td class="comment-text">{{ comment.text }}</td>
            <td class="counsellor-name">{{ comment.counsellor }}</td>
            <td class="date">{{ comment.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentsTable",
  props: {
    comments: {
      type: Array,
      required: true,
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
  font-size: 15px;
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
    font-size: 12px;
    padding: 8px;
  }

  .comments-table-container {
    padding: 10px;
  }
}
</style>
