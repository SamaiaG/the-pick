<template>
    <div class="find-more">
        <h4 class="title">This tool has the purpose to make your life easier by helping you to FINALLY decide.</h4>
        <p class="description">This is how it works:</p>
        <ol class="steps">
            <li class="step">You select your problem type.</li>
            <li class="step">You go directly to the cards. You select the number of cards you need, depending on how much options do you have, and proceed to completing them.</li>
            <li class="step">After completing the cards and answering the questions, it is time for the choice to be made. Do you want to make the pick by yourself? The choose ME and click the big button. The cards will be shuffled and then you can pick a card you want.</li>
            <li class="step">Do you want someone to pick a card for you? Then click on SOMEONE ELSE, enter your Email and choose a way to share your cards.</li>
            <li class="step">After you have shared the cards, the person you have chosen will pick one, and the options from the picked card will land on your email.</li>
        </ol>
        <h3 class="end">Voila! The decision was made, no way back now!</h3>
    </div>
</template>

<style scoped>
.find-more{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vmin;
}
.step{
    font-size: 1.8vmin;
}
.title, .end{
    font-size: 2.5vmin;
}
.description{
    font-size: 2vmin;
}

@media (max-width: 768px) {
    .title, .end{
        font-size: 16px;
    }
    .step{
    font-size: 12px;
}
.description{
    font-size: 14px;
}
.find-more{
    gap: 1vmin
}
}
</style>