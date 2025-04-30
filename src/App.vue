<template>
  <div id="app">
    <SideBar />
    <div class="main-content">
      <MobileTopNav />
      <router-view class="views" />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/Navigation/SideBar.vue";
import MobileTopNav from "./components/Navigation/MobileTopNav.vue";

export default {
  name: "App",
  components: {
    SideBar,
    MobileTopNav,
  },
};
</script>

<style>
body {
  margin: 0px !important;
  scrollbar-width: none;
  font-family: "Assistant", sans-serif;
  overflow-y: hidden;
}

::-webkit-scrollbar {
  display: none;
}

h2 {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #0b508b;
  margin-top: 0px;
  margin-bottom: 15px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}

.graph-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

select {
  margin-left: 10px;
  padding: 10px 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-family: "Assistant", sans-serif;
  font-size: 14px;
  outline: none;
}

.filter-container {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.chart-container {
  width: 100%;
  height: 300px;
}

canvas {
  width: 100% !important;
  height: 100% !important;
}

@media (max-width: 1200px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 1200px) {
  .graph-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .filter-container {
    flex-direction: column;
    width: 100%;
  }

  select {
    width: 100%;
    margin-top: 5px;
    margin-left: 0px;
  }
}
</style>

<style scoped>
#app {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  background-color: #f6f5f8;
  padding: 20px;
  height: 100dvh;
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>
