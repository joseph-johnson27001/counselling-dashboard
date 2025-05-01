import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomePage.vue";
import Themes from "@/views/ThemesPage.vue";
import Expenses from "@/views/ExpensesPage.vue";
import counsellorInfo from "@/views/CounsellorInformationPage.vue";
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
    path: "/counsellor-info",
    name: "counsellorInfo",
    component: counsellorInfo,
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

router.afterEach(() => {
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.scrollTop = 0;
  }
});

export default router;
