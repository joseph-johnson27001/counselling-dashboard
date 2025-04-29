<template>
  <nav class="mobile-nav">
    <div class="nav-container">
      <h1 class="app-name">Counselling</h1>

      <button class="hamburger" @click="toggleMenu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <div class="nav-links" :class="{ 'show-menu': menuOpen }">
      <router-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.link"
        @click="handleLinkClick"
        active-class="active-link"
      >
        <i :class="item.icon"></i> {{ item.label }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MobileTopNav",
  data() {
    return {
      menuOpen: false,
      menuItems: [
        { name: "home", label: "Home", icon: "fas fa-house", link: "/" },
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
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleLinkClick() {
      this.menuOpen = false;
    },
  },
};
</script>

<style scoped>
nav.mobile-nav {
  display: none;
  background-color: #fff;
  padding: 8px 15px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
  font-family: "Inter", sans-serif;
  position: relative;
  z-index: 1000;
  margin-bottom: 20px;
  border-radius: 5px;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-name {
  font-family: "Unica One", sans-serif;
  font-size: 1.5rem;
  color: #0b508b;
  margin: 0;
  font-weight: 500;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  border: none;
  background: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #006ba6;
  transition: 0.3s;
}

.hamburger span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-links {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 55px;
  right: 20px;
  background-color: #fff;
  padding: 12px;
  gap: 16px;
  width: 260px;
  max-width: 90%;
  box-sizing: border-box;
  border: 1px solid rgba(193, 191, 214, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.nav-links.show-menu {
  display: flex;
}

.nav-links a {
  text-decoration: none;
  font-weight: 400;
  color: #333;
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-links a i {
  font-size: 16px;
}

.active-link {
  color: #006ba6 !important;
  font-weight: 500;
  padding-bottom: 3px;
}

/* Responsive behavior */
@media (max-width: 699px) {
  nav.mobile-nav {
    display: block;
  }

  .hamburger {
    display: flex;
  }
}
</style>
