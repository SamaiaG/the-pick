<template>
    <div class="footer">
        <div class="container">
            <div class="left-part">
                <img src="../assets/logo.png" alt="logo" class="logo2">
                <p>For those who are unsure and need some help.</p>
            </div>
            <p class="copyright">© Copyright PickPerfect</p>
            <div class="right-part">
                <div class="contact-methods">
                    <a href="https://www.linkedin.com/in/samaia-gahramanov-569343232/">
                        <img src="../assets/linkedin_icon.svg" alt="contact" class="contact_link">
                    </a>
                    <a class="gmail" href="mailto:samaiagahramanov@gmail.com">
                        <img src="../assets/gmail_icon.svg" alt="contact" class="contact_link">
                    </a>
                    <BaseButton class="contact-button">
                        <RouterLink to="/" class="h-link" @click="contactOverlay">Contact</RouterLink>
                    </BaseButton>
                </div>
            </div>
        </div>
        <BaseOverlay v-if="isContactOverlayVisible"  @close="closeOverlay">
            <ContactComponent class="contact-component" />
        </BaseOverlay>
    </div>
</template>

<script setup>
import BaseOverlay from './BaseOverlay.vue'
import BaseButton from './BaseButton.vue'
import ContactComponent from '../views/ContactComponent.vue'
import { ref } from 'vue'

const isContactOverlayVisible = ref(false)

const contactOverlay = () => {
  isContactOverlayVisible.value = true
}

const closeOverlay = () => {
  isContactOverlayVisible.value = false
}
</script>

<style scoped> 
.footer{
    width: 100%;
    background-color: black;
    font-size: 1.3vmin;
    padding: 4vmin 16vmin

}
.right-part{
    display: flex;
    flex-direction: column;
    align-items: end;
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
    margin: 0;
    color: white
}
.contact_link{
    width: 3vmin;
    height: 3vmin;
    cursor: pointer;
}
.contact-methods{
    margin-top: 1vmin;
    display: flex;
    gap: 2vmin;
    align-items: center
}
.contact-button{
    border: 1px solid white!important;
    color: white;
    background-color: transparent;
    padding: 0.5vmin 2vmin;
    font-size: 1.3vmin;
}
.contact-button:hover{
    background-color: white;
}
.contact-button:hover .h-link{
    color: black;
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
            align-items: center;
        }
        .copyright{
            order: 3;
        }
        .logo2{
    width: 22vmin;
    padding-bottom: 12px;
}
.contact_link{
    width: 30px;
    height: 30px;
}
.contact-button{
    padding: auto;
    font-size: 16px;
    height: 30px;
}
    
    }
</style>