<template>
  <div id="app">
    <SideBar />
    <div class="main-content"></div>
  </div>
</template>

<script>
import SideBar from "./components/Navigation/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style>
body {
  margin: 0px !important;
  scrollbar-width: none;
  font-family: "Inter", sans-serif;
  overflow-y: hidden;
}

::-webkit-scrollbar {
  display: none;
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
}

.content {
  padding: 20px;
  height: 100dvh;
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>
