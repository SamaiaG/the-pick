<template>
    <div class="footer">
        <div class="container">
        <div class="left-part">
            <img src="../assets/logo.png" alt="logo" class="logo2">
            <p>For those who are unsure and need some help.</p>
        </div>
        <p class="copyright">© Copyright PickPerfect</p>
        <div class="right-part">
            <p>Share it with your friends</p>
            <ShareOutside class="share-outside"/>
        </div>
    </div>

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
    padding: 4vmin 16vmin

}
.right-part{
    display: flex;
    flex-direction: column;
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
}

.logo2{
    width: 10vmin;
    padding-bottom: 1vmin;
}
p{
    margin: 0
}
.share-outside{
    margin-top: 1vmin
}
@media (max-width: 1024px) {
        .footer{
            padding: 4vmin 8vmin;
            font-size: 12px;
        }
    }
    @media (max-width: 768px) {
        .footer{
            padding: 4vmin 4vmin;
        }
        .container{
            flex-direction: column;
            align-items: center;
            gap: 4vmin
        }
        .nav{
            flex-direction: column;
            align-items: center;
        }
        .left-part{
            text-align: center;
        }
        .right-part{
            align-self: center;
            gap: 3vmin
        }
        .copyright{
            order: 3;
        }
        .logo2{
    width: 22vmin;
    padding-bottom: 12px;
}
    
    }
</style>