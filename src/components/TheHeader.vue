<template>
  <div>
    <div class="h-container">
      <RouterLink to="/" class="h-link"> <img src="../assets/logo.png" alt="logo" id="logo"></RouterLink>
      <BaseButton class="contact-button">
        <RouterLink to="/" class="h-link" @click="contactOverlay">Contact</RouterLink>
      </BaseButton>
      <div class="hamburger" :class="{ 'is-open': isHamOpen }" @click="toggleHam"></div>
    </div>
    <HamburgerMenu class="hamburger-menu" v-if="isHamOpen" :closeHam="toggleHam" />
    <BaseOverlay v-if="isContactOverlayVisible"  @close="closeOverlay">
      <ContactComponent class="contact-component" />
    </BaseOverlay>
  </div>
</template>

<script setup>
import ContactComponent from '../views/ContactComponent.vue'
import HamburgerMenu from '../components/HamburgerMenu.vue'
import BaseOverlay from './BaseOverlay.vue'
import BaseButton from './BaseButton.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const isContactOverlayVisible = ref(false)

const contactOverlay = () => {
  isContactOverlayVisible.value = true
}

const closeOverlay = () => {
  isContactOverlayVisible.value = false
}
const isHamOpen = ref(false);

function toggleHam() {
  isHamOpen.value = !isHamOpen.value

  if (isHamOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
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
    width: calc(100vw - 25px);
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

.contact-button{
    border: 1px solid white!important;
    padding: 1vmin 3vmin!important;
    margin: 1.5vmin!important;
    background-color: transparent!important;
}
.contact-button:hover{
    background-color: #174218!important;
}
.hamburger {
  display: none;
  background-image: url('../assets/bars-solid.svg');
  background-size: cover;
  background-position: center;
  width: 5vmin;
  height: 5vmin;
  margin: 2vmin;
}

.hamburger.is-open{
  background-image: url('../assets/xmark-solid.svg');
}
.hamburger-menu{
  position: fixed;
  top: 53px;
  right: 0;
  z-index: 9999;
}

@media (max-width: 1024px) {
  .h-container{
    padding: 0 8vmin;
  }
}
@media (max-width: 768px) {
  .h-container{
    padding: 0 4vmin;
    width: 100vw;
  }
  .hamburger{
    display: block;
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-top:12px;
  }
  .contact-button{
    display: none;
  }

  }
</style>