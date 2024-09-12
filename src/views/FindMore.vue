<template>
    <div class="find-component">
   <BaseOverlay>
    <div class="find-more">
        <h4>This tool has the purpose to make your life easier by helping you to FINALLY decide.</h4>
        <p>This is how it works:</p>
        <ol>
            <li>You select your problem type.</li>
            <li>You go directly to the cards. You select the number of cards you need, depending on how much options do you have, and proceed to completing them.</li>
            <li>After completing the cards and answering the questions, it is time for the choice to be made. Do you want to make the pick by yourself? The choose ME and click the big button. The cards will be shuffled and then you can pick a card you want.</li>
            <li>Do you want someone to pick a card for you? Then click on SOMEONE ELSE, enter your Email and choose a way to share your cards.</li>
            <li>After you have shared the cards, the person you have chosen will pick one, and the options from the picked card will land on your email.</li>
        </ol>
        <h3>Voila! The decision was made, no way back now!</h3>
    </div>
    </BaseOverlay>
</div>
    
</template>

<script setup>
import BaseOverlay from '../components/BaseOverlay.vue'
</script>

<style scoped>
.find-more{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
</style>