<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const mobileNavOpen = ref(false)
const mobileDropdownOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()

function toggleMobileDropdown() {
  mobileDropdownOpen.value = !mobileDropdownOpen.value
}

function closeMobileNav() {
  mobileNavOpen.value = false
  mobileDropdownOpen.value = false
}

const isActive = (path) => {
  if (path === '/') return route.path === path
  return route.path.startsWith(path)
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header sticky top-0 left-0 w-full z-50 shadow-lg" :class="{ scrolled: isScrolled }">
    <div class="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <RouterLink to="/" class="logo flex items-center gap-2">
        <i class="bi bi-camera text-[28px]" :style="{ color: 'var(--accent-color)' }"></i>
        <h1 class="text-[32px] font-normal tracking-wide" :style="{ color: 'var(--heading-color)', fontFamily: 'var(--heading-font)' }">MartinWithA</h1>
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="navmenu flex items-center gap-6 uppercase text-sm" :style="{ fontFamily: 'var(--nav-font)' }">
        <RouterLink to="/" class="px-[15px] py-[18px] text-[14px] font-normal tracking-[1px] transition-colors duration-300" :class="{ 'active': isActive('/') }" :style="{ color: 'var(--nav-color)' }">Home</RouterLink>
        <RouterLink to="/about" class="px-[15px] py-[18px] text-[14px] font-normal tracking-[1px] transition-colors duration-300" :class="{ 'active': isActive('/about') }" :style="{ color: 'var(--nav-color)' }">About</RouterLink>
        <div class="dropdown relative group">
          <RouterLink to="/gallery" class="px-[15px] py-[18px] text-[14px] font-normal tracking-[1px] transition-colors duration-300 flex items-center gap-1" :class="{ 'active': isActive('/gallery') }" :style="{ color: 'var(--nav-color)' }">
            Gallery
            <i class="bi bi-chevron-down text-[12px] ml-[5px]"></i>
          </RouterLink>
          <ul class="dropdown-menu absolute top-[100%] left-[14px] mt-0 bg-[var(--nav-dropdown-background-color)] border border-[#4a4a4a] rounded-[4px] py-[10px] min-w-[200px] opacity-0 invisible transition-all duration-300 z-50 group-hover:opacity-100 group-hover:visible group-hover:top-[100%]">
            <li><RouterLink to="/gallery/people" class="block px-[20px] py-[10px] text-[15px] transition-colors duration-300" :style="{ color: 'var(--nav-dropdown-color)' }" @mouseover="$event.target.style.color = 'var(--nav-dropdown-hover-color)'" @mouseout="$event.target.style.color = 'var(--nav-dropdown-color)'">People</RouterLink></li>
            <li><RouterLink to="/gallery/animals" class="block px-[20px] py-[10px] text-[15px] transition-colors duration-300" :style="{ color: 'var(--nav-dropdown-color)' }" @mouseover="$event.target.style.color = 'var(--nav-dropdown-hover-color)'" @mouseout="$event.target.style.color = 'var(--nav-dropdown-color)'">Animals</RouterLink></li>
            <li><RouterLink to="/gallery/architecture" class="block px-[20px] py-[10px] text-[15px] transition-colors duration-300" :style="{ color: 'var(--nav-dropdown-color)' }" @mouseover="$event.target.style.color = 'var(--nav-dropdown-hover-color)'" @mouseout="$event.target.style.color = 'var(--nav-dropdown-color)'">Architecture</RouterLink></li>
            <li><RouterLink to="/gallery/videos" class="block px-[20px] py-[10px] text-[15px] transition-colors duration-300" :style="{ color: 'var(--nav-dropdown-color)' }" @mouseover="$event.target.style.color = 'var(--nav-dropdown-hover-color)'" @mouseout="$event.target.style.color = 'var(--nav-dropdown-color)'">Videos</RouterLink></li>
          </ul>
        </div>
        <RouterLink to="/capstone" class="px-[15px] py-[18px] text-[14px] font-normal tracking-[1px] transition-colors duration-300" :class="{ 'active': isActive('/capstone') }" :style="{ color: 'var(--nav-color)' }">capstone</RouterLink>
      </nav>

      <!-- Social Icons -->
      <div class="header-social-links flex gap-4 text-[16px] items-center pr-[15px]">
        <a href="#" class="transition-colors duration-300" :style="{ color: 'color-mix(in srgb, var(--default-color), transparent 40%)' }" @mouseover="$event.target.style.color = 'var(--accent-color)'" @mouseout="$event.target.style.color = 'color-mix(in srgb, var(--default-color), transparent 40%)'"><i class="bi bi-twitter-x"></i></a>
        <a href="#" class="transition-colors duration-300" :style="{ color: 'color-mix(in srgb, var(--default-color), transparent 40%)' }" @mouseover="$event.target.style.color = 'var(--accent-color)'" @mouseout="$event.target.style.color = 'color-mix(in srgb, var(--default-color), transparent 40%)'"><i class="bi bi-facebook"></i></a>
        <a href="#" class="transition-colors duration-300" :style="{ color: 'color-mix(in srgb, var(--default-color), transparent 40%)' }" @mouseover="$event.target.style.color = 'var(--accent-color)'" @mouseout="$event.target.style.color = 'color-mix(in srgb, var(--default-color), transparent 40%)'"><i class="bi bi-instagram"></i></a>
        <a href="#" class="transition-colors duration-300" :style="{ color: 'color-mix(in srgb, var(--default-color), transparent 40%)' }" @mouseover="$event.target.style.color = 'var(--accent-color)'" @mouseout="$event.target.style.color = 'color-mix(in srgb, var(--default-color), transparent 40%)'"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cardo&display=swap');

h1 {
  font-family: 'Cardo', var(--heading-font-family);
}

nav a {
  font-family: 'Cardo', var(--nav-font-family);
}

header {
  background-color: var(--background-color);
  color: var(--default-color);
  padding: 0 0;
  transition: all 0.5s ease;
  z-index: 50;
  border-bottom: 1px solid transparent;
}

.scrolled {
  border-bottom-color: color-mix(in srgb, var(--background-color) 90%, white 20%);
}

.logo {
  display: flex;
  align-items: center;
  line-height: 1;
}

.logo img {
  max-height: 36px;
  margin-right: 8px;
}

.logo h1 {
  font-family: var(--heading-font-family);
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  color: var(--heading-color);
}

.logo i {
  font-size: 28px;
  margin-right: 6px;
}

.nZ-social-links {
  display: flex;
  align-items: center;
  padding-right: 15px;
}

.header-social-links a {
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  padding-left: 6px;
  display: inline-block;
  transition: 0.3s;
  font-size: 16px;
}

.header-social-links a:hover {
  color: var(--accent-color);
}

.header-social-links a i {
  line-height: 0;
}

nav a {
  color: var(--nav-color);
  font-family: var(--nav-font-family);
  transition: color 0.3s;
}

nav a.active {
  color: var(--nav-hover-color) !important;
}

nav a:hover {
  color: var(--nav-hover-color);
}

nav .dropdown-menu a {
  color: var(--nav-dropdown-color);
}

nav .dropdown-menu a:hover {
  color: var(--nav-dropdown-hover-color);
  background-color: #333333;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .logo h1 {
    font-size: 26px;
  }

  .logo i {
    font-size: 20px;
  }

  .header-social-links a {
    font-size: 16px;
  }
}
</style>