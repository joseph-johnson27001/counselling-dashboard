import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomePage.vue";
import Themes from "@/views/ThemesPage.vue";
import Expenses from "@/views/ExpensesPage.vue";
import ClientInfo from "@/views/ClientInformationPage.vue";
import Feedback from "@/views/FeedbackPage.vue";
import Comments from "@/views/CommentsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/themes",
    name: "Themes",
    component: Themes,
  },
  {
    path: "/expenses",
    name: "Expenses",
    component: Expenses,
  },
  {
    path: "/client-info",
    name: "ClientInfo",
    component: ClientInfo,
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: Feedback,
  },
  {
    path: "/comments",
    name: "Comments",
    component: Comments,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
