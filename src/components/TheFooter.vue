<template>
    <div class="footer">
        <div class="container">
        <div class="left-part">
            <img src="../assets/logo.png" alt="logo" class="logo2">
            <p>For those who are unsure and need some help.</p>
        </div>
        <p class="copyright">© Copyright PickPerfect</p>
        <div class="right-part">
            <nav class="nav">
                <RouterLink to="/" class="h-link"  @click="findMoreOverlay" >About</RouterLink>
                <RouterLink to="/" class="h-link" @click="contactOverlay">Contact</RouterLink>
                <RouterLink to="/" class="h-link"  @click="shareOutsideOverlay">SHARE</RouterLink>
            </nav>
        </div>
    </div>
  
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
.footer{
    width: 100%;
    background-color: black;
    color: white;
    font-size: 1.3vmin;
}
.right-part{
    display: flex;
    align-self: flex-start;
}
.nav{
    gap:2vmin
}
.h-link:hover{
    text-decoration: underline;
}
.container{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 40px 0 20px;
}

.logo2{
    width: 10vmin;
    padding-bottom: 1vmin;
}

</style>