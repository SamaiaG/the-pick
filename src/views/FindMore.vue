<template>
    <div class="find-more">
        <h4 class="title">Make Your Decision with Ease!</h4>

        <ul class="steps">
            <li class="step"><span class="step-nr">Step 1:</span> Enter Your Name</li>
            <li class="step"><span class="step-nr">Step 2:</span>  Create Your Cards</li>
            <ul>
                <li class="substep">Go to the card section. Choose the number of cards based on the options you have and fill them out. </li>
            </ul>
            <li class="step"><span class="step-nr">Step 3:</span>  Make Your Choice</li>
            <ul>
                <li class="substep">Once your cards are complete, it’s time to decide! Click the "Make the choice" button. The cards will shuffle, and you will go to another page, where you can select your card. </li>  
                <!-- <li class="picking-option">Pick Yourself </li>
                <ul>
                    <li class="substep">If you’d like to choose on your own, click the "Choose Me" button. The cards will shuffle, and you can select your favorite card.</li>
                </ul>
               <li class="picking-option">or Let Someone Else Decide</li>
                <ul>
                    <li class="substep">If you prefer someone else to pick for you, click on "Someone Else." Enter their email address and share your cards with them.
                        The chosen person will select a card, and you'll receive the options from the selected card in your email. </li>
                </ul> -->
            </ul>
        </ul>

        <h3 class="end">And that's it! <br> Your decision is made—no turning back!</h3>
    </div>
</template>

<style scoped>
.find-more{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vmin;
    letter-spacing: 1px;
}
.step, .substep{
    font-size: 1.8vmin;
    list-style-type: none;
    color: var(--primary-blue)
}
.step{
    font-size: 1.8vmin;
    font-style: italic;
}
.substep{
    font-weight: 300;
    font-size: 1.8vmin;
}
.picking-option{
    font-size: 1.8vmin;
    font-weight: 500;
    text-decoration: underline;
    color: #174218
}
.title, .end{
    font-size: 2.5vmin;
    text-align: center;
}
.description{
    font-size: 2vmin;
}
.step-nr{
    font-weight: 700;
}

@media (max-width: 768px) {
    .title, .end{
        font-size: 16px;
    }
    .step{
    font-size: 14px;
}
.description{
    font-size: 14px;
}
.find-more{
    gap: 1vmin
}
.substep{
    font-size: 12px;
}
.picking-option{
    font-size: 14px;
}
}
</style>