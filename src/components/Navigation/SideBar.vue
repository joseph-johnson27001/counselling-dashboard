<template>
  <div :class="['sidebar', { collapsed }]">
    <div class="sidebar-title">
      <h1 v-if="!collapsed">Counsellors</h1>
      <i class="fas fa-bars" @click="toggleCollapse"></i>
    </div>
    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{
          active: activeItem === item.name,
          'logout-item': item.name === 'logout',
        }"
        @click="navigate(item)"
      >
        <i :class="item.icon"></i>
        <span v-if="!collapsed">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      activeItem: null, // initially null
      collapsed: false,
      menuItems: [
        { name: "home", label: "Home", icon: "far fa-file", link: "/" },
        {
          name: "themes",
          label: "Themes",
          icon: "far fa-image",
          link: "/themes",
        },
        {
          name: "expenses",
          label: "Expenses",
          icon: "far fa-credit-card",
          link: "/expenses",
        },
        {
          name: "clientInfo",
          label: "Client Information",
          icon: "far fa-address-book",
          link: "/client-info",
        },
        {
          name: "feedback",
          label: "Feedback",
          icon: "far fa-comments",
          link: "/feedback",
        },
        {
          name: "comments",
          label: "Comments",
          icon: "far fa-comment-dots",
          link: "/comments",
        },
      ],
    };
  },
  created() {
    this.setActiveFromRoute();
  },
  watch: {
    "$route.path"() {
      this.setActiveFromRoute();
    },
  },
  methods: {
    navigate(item) {
      this.activeItem = item.name;
      this.$router.push(item.link);
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
    setActiveFromRoute() {
      const currentPath = this.$route.path;
      const foundItem = this.menuItems.find(
        (item) => item.link === currentPath
      );
      if (foundItem) {
        this.activeItem = foundItem.name;
      } else {
        this.activeItem = "home";
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 260px;
  background-color: rgb(255, 255, 255);
  color: rgba(47, 43, 61, 0.9);
  min-height: 100%;
  max-height: 100vh;
  padding-top: 20px;
  position: relative;
  z-index: 10;
  font-size: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
  overflow-y: scroll;
  scrollbar-width: none;
  flex-shrink: 0;
  font-family: "Inter", sans-serif;
}

.sidebar.collapsed {
  width: 80px;
  padding-top: 30px;
}

.sidebar-title {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-title h1 {
  font-family: "Unica One", sans-serif;
  font-weight: 400;
  margin: 0;
  color: #0b508b;
}

.sidebar-title i {
  cursor: pointer;
  font-size: 22px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.sidebar ul li {
  padding: 15px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin: 4px 7px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.sidebar ul li.logout-item {
  margin-top: auto;
  transition: color 0.3s ease;
}

.sidebar ul li:hover {
  background-color: #f0f0f1;
}

.sidebar ul li.logout-item:hover i {
  color: #ff4d4f;
}

.sidebar ul li.active {
  background: linear-gradient(
    270deg,
    rgba(115, 103, 240, 0.7),
    rgb(115, 103, 240)
  );
  color: white;
}

.sidebar ul li i {
  margin-right: 10px;
  margin-left: 5px;
  color: rgba(47, 43, 61, 0.9);
  font-size: 16px;
}

.sidebar ul li.active i {
  color: white;
}

.sidebar.collapsed ul li,
.sidebar.collapsed .sidebar-title {
  justify-content: center;
}

.sidebar.collapsed ul li i {
  margin: 0;
  padding: 10px;
  font-size: 18px;
}

@media (max-width: 699px) {
  .sidebar,
  .sidebar.collapsed {
    display: none;
  }
}
</style>
