<template>
    <div class="hamburger-menu">
        <RouterLink to="/" class="h-link"  @click="findMoreOverlay" >About</RouterLink>
        <RouterLink to="/" class="h-link" @click="contactOverlay">Contact</RouterLink>
        <RouterLink to="/" class="h-link"  @click="shareOutsideOverlay">Share it now</RouterLink>
    </div>
    <div>
    <ShareOutside class="share-outside" v-show="isShareOutsideVisible"  @close="closeOverlay"/>
    <FindMore class="find-more" v-show="isFindMoreVisible"  @close="closeOverlay"/>
    <ContactComponent class="contact-component" v-show="isContactOverlayVisible"  @close="closeOverlay"/>
</div>
</template>

<script setup> 
const props = defineProps({
    closeHam: Function
})
</script>

<style scoped>
.hamburger-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: rgb(9 8 15); 
    box-shadow: rgba(17, 12, 46, 0.45) 0px 48px 100px 0px;
    width: 100%;
    top: 9vmin;
    left: 0;
}
.h-link{
    text-decoration: none;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    padding: 1.5vmin;
    font-size: 18px;
    cursor: pointer;
    padding: 14px 5vmin;
}
.h-link:hover{
    color: rgb(9 8 15);
    background-color: #ffffff;
    font-family: 'Raleway', sans-serif; 
}

@media (max-width: 768px) {
    .hamburger-menu {
        display: flex;
    }
}
</style>