<template>
  <CommentsTable :comments="comments" />
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
    };
  },
};
</script>
