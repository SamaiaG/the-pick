<template>
  <div>
    <header>
        <div class="h-container">
       <RouterLink to="/" class="h-link"> <img src="../assets/logo.png" alt="logo" id="logo"></RouterLink>
       <nav class="nav">
        <RouterLink to="/" class="h-link"  @click="findMoreOverlay" >About</RouterLink>
        <RouterLink to="/" class="h-link" @click="contactOverlay">Contact</RouterLink>
        <RouterLink to="/" class="h-link"  @click="shareOutsideOverlay">Share it now</RouterLink>
      </nav>
    </div>
    </header>

    <ShareOutside class="share-outside" v-show="isShareOutsideVisible"  @close="closeOverlay"/>
    <FindMore class="find-more" v-show="isFindMoreVisible"  @close="closeOverlay"/>
    <ContactComponent class="contact-component" v-show="isContactOverlayVisible"  @close="closeOverlay"/>
  </div>
</template>

<script setup>
import FindMore from '../views/FindMore.vue'
import ContactComponent from '../views/ContactComponent.vue'
import ShareOutside from '../views/ShareOutside.vue'
import { ref } from 'vue'

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
</script>


<style scoped>
header {
    width: calc(100% - 20px);
    position: absolute;
    z-index: 22;
}

.h-container{
    display: flex;
    padding: 0 160px;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
}
#logo{
    margin-top: 2px;
}
.nav {
    display: flex;
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
</style>