<template>
    <div class="share-outside">
        <div class="share-links">
            <ShareNetwork
            network="facebook"
            url="https://samaiag.github.io/the-pick/"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
            description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
            quote="The hot reload is so fast it\'s near instant. - Evan You"
            hashtags="thepick"
            >
           <img src="../assets/facebook_icon.svg" alt="Share on Facebook" class="social-icon"/>   
            </ShareNetwork>
            <ShareNetwork
            network="linkedin"
            url="https://samaiag.github.io/the-pick/"
            title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
            description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
            quote="The hot reload is so fast it\'s near instant. - Evan You"
            hashtags="thepick"
            >
            <img src="../assets/linkedin_icon.svg" alt="Share on Facebook" class="social-icon"/>   

            </ShareNetwork>
            <button class="copy-link" @click="copyLink">
                <img src="../assets/link.svg" alt="Copy Link" class="social-icon"  />
            </button>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const copyDone = ref(false)

const copyLink = () => {
    const url = 'https://samaiag.github.io/the-pick/'
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

.title{
    font-size: 2.5vmin;
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
.social-icon{
    width: 3vmin;
    height: 3vmin;
    cursor: pointer;
}

@media (max-width: 1024px) {
    .social-icon{
    width: 30px;
    height: 30px;
  }
}
</style>