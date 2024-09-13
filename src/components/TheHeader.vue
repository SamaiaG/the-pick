<template>
    <header>
      <div class="h-container">
        <RouterLink to="/" class="h-link"> <img src="../assets/logo.png" alt="logo" id="logo"></RouterLink>
        <nav class="nav">
          <RouterLink to="/" class="h-link"  @click="findMoreOverlay" >About</RouterLink>
          <RouterLink to="/" class="h-link" @click="contactOverlay">Contact</RouterLink>
          <RouterLink to="/" class="h-link"  @click="shareOutsideOverlay">Share it now</RouterLink>
        </nav>
        <div class="hamburger" :class="{ 'is-open': isHamOpen }" @click="toggleHam"></div>
      </div>
      <HamburgerMenu class="hamburger-menu" v-if="isHamOpen" :closeHam="toggleHam" />

</header>
</template>

<script setup>
import FindMore from '../views/FindMore.vue'
import ContactComponent from '../views/ContactComponent.vue'
import ShareOutside from '../views/ShareOutside.vue'
import HamburgerMenu from '../components/HamburgerMenu.vue'
import BaseOverlay from './BaseOverlay.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isFindMoreVisible = ref(false)
const isShareOutsideVisible = ref(false)
const isContactOverlayVisible = ref(false)

const findMoreOverlay = () => {
  isFindMoreVisible.value = true
}

const shareOutsideOverlay = () => {
  isShareOutsideVisible.value = true
}
const contactOverlay = () => {
  isContactOverlayVisible.value = true
}

const closeOverlay = () => {
  isFindMoreVisible.value = false
  isShareOutsideVisible.value = false
  isContactOverlayVisible.value = false
}
const isHamOpen = ref(false);

function toggleHam() {
  isHamOpen.value = !isHamOpen.value
}

function handleClickOutside(event) {
  const menu = document.querySelector('.hamburger-menu');
  if (menu && !menu.contains(event.target) && event.target.closest('.hamburger') === null) {
    toggleHam();
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>


<style scoped>
.h-container{
    display: flex;
    width: calc(100vw - 4vmin);
    justify-content: space-between;
    padding: 0 16vmin;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
}
#logo{
    margin-top: 2px;
}
.nav {
    display: flex;
    align-items: stretch;
}

.h-link {
    padding: 2vmin;
    text-decoration: none;
  color: white;
  transition: 0.4s;
  font-family: Raleway, sans-serif;
}

.h-link:hover{
    background-color: var(--primary-op);
}

.hamburger {
  display: none;
  background-image: url('../assets/bars-solid.svg');
  background-size: cover;
  background-position: center;
  width: 5vmin;
  height: 5vmin;
  margin-right:1vmin;
  margin: 2vmin;
}

.hamburger.is-open{
  background-image: url('../assets/xmark-solid.svg');
}
.hamburger-menu{
  position: fixed;
  top: 9vmin;
  right: 0;
}


@media (max-width: 1024px) {
  .h-container{
    padding: 0 8vmin;
  }
}
@media (max-width: 768px) {
  .h-container{
    padding: 0 4vmin;
  }
  .hamburger{
    display: block;
    cursor: pointer;
  }
  .nav{
    display: none;
  }

  }
</style>