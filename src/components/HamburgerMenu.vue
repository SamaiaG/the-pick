<template>
    <div class="hamburger-menu">
        <RouterLink to="/" class="h-link" @click="contactOverlay">Contact</RouterLink>
    </div>
    <div>
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
    display: flex;
    flex-direction: column;
    background-color: rgb(3, 2, 4); 
    box-shadow: rgba(17, 12, 46, 0.45) 0px 48px 100px 0px;
    width: calc(100vw - 25px);
    height: 100vh;
}
.h-link{
    text-decoration: none;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    padding: 1.5vmin;
    font-size: 18px;
    cursor: pointer;
    padding: 14px 5vmin;
    text-align: center;
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