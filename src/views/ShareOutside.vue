<template>
    <div class="share-outside">
        <h4>Share it with your friends!</h4>
        <div class="share-links">
            <ShareNetwork
            network="facebook"
            url="https://news.vuejs.org/issues/180"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
            description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
            quote="The hot reload is so fast it\'s near instant. - Evan You"
            hashtags="vuejs,vite"
            >
           <img src="../assets/facebook_icon.svg" alt="Share on Facebook" class="social-icon"/>   
            </ShareNetwork>
            <ShareNetwork
            network="twitter"
            url="https://news.vuejs.org/issues/180"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
            description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
            quote="The hot reload is so fast it\'s near instant. - Evan You"
            hashtags="vuejs,vite"
            >
            <img src="../assets/instagram_icon.svg" alt="Share on Facebook" class="social-icon"/>  
            <!-- have to custom this link -->
            </ShareNetwork>
            <ShareNetwork
            network="linkedin"
            url="https://news.vuejs.org/issues/180"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
            description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
            quote="The hot reload is so fast it\'s near instant. - Evan You"
            hashtags="vuejs,vite"
            >
            <img src="../assets/linkedin_icon.svg" alt="Share on Facebook" class="social-icon"/>   

            </ShareNetwork>
            <button class="copy-link" @click="copyLink">
                <img src="../assets/link.svg" alt="Copy Link" />
            </button>
        </div>
    </div>
</template>

<script setup>
import BaseOverlay from '../components/BaseOverlay.vue'
import {ref} from 'vue'

const copyDone = ref(false)

const copyLink = () => {
    const url = 'http://localhost:5173/'
    navigator.clipboard.writeText(url).then(() => {
        copyDone.value = true
        setTimeout(() => {
            copyDone.value = false
        }, 2000)
    }).catch(err => {
        console.error('Failed to copy: ', err)
    })

}
</script>

<style scoped>
.share-outside{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.share-links{
    display: flex;
    gap: 3vmin;
}
.copy-link{
    background-color: transparent;
    border: none;
    padding: 0;
}
</style>