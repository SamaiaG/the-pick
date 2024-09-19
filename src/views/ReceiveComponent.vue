<template>
  <div >
  <TheSection class="receive-section">  
    <div class="hero-receive">
      <div v-if="formData">
        <div v-if="formData.decidingUser === 'ME'">
          <h1 class="hero-title">Hey {{ formData.name }}</h1>
          <p class="hero-p">It's time to make the choice!</p>
        </div>
        <div v-else>
          <h1 class="hero-title">Hey {{ formData.decidingUserName }}</h1>
          <p class="hero-p">You've been chosen to be the pick-buddy.</p>
          <p class="hero-p">Your friend has to make an important decision and they are extremely unsure.</p>
          <p class="hero-p">Would you like to help them make the choice?</p>
        </div>
      </div>
    </div>
    <ArrowComponent @scrollToSection="scrollToSecondSection" />
  </TheSection>

  <TheSection class="second-section" v-show="isSecondSectionVisible" ref="secondSection">
    <div v-if="formData">
      <p v-if="formData.decidingUser === 'ME'" class="received-p">
        Below you see {{ formData.cardNumber }} cards you completed with different options.<br>
        All you have to do is to select the one you like and submit your choice.
      </p>
      <p v-else class="received-p">
        Below you see {{ formData.cardNumber }} cards your friend completed with different options.<br>
        All you have to do is to select the one you like and submit your choice.
      </p>
    </div>
    
    <div class="option-cards d-flex wrap justify-content-center">
      <OptionCard class="card1" imageSrc="cards/card1.jpg" altText="card1" title="1" @cardSelected="handleCardSelection"/>
      <OptionCard class="card2" imageSrc="cards/card2.jpg" altText="card2" title="2" @cardSelected="handleCardSelection" />
      <OptionCard v-if="formData && formData.cardNumber >= 3" class="card3" imageSrc="cards/card3.jpg" altText="card3" title="3" @cardSelected="handleCardSelection" />
    </div>
    
    <p v-if="selectedCard" class="received-p">You've selected the <span class="cn">card number {{selectedCard}}</span>! Good choice!</p>
    
    <div v-if="formData"> 
      <p v-if="formData.decidingUser === 'ME'" class="received-p">After confirming, you will see what stays inside this card.</p>
      <p v-else class="received-p">After confirming, your friend will now receive all the content from the card you picked and this is it.</p>
    </div>
    
    <BaseButton class="confirm" @click="openConfirmAction">Confirm your choice</BaseButton>
  </TheSection>

  <BaseOverlay v-show="isSelectedVisible" @close="closeOverlay">
    <h3 class="reveal-title">Congrats, you've made your choice!</h3>

    <div v-if="selectedCard && cardFields[selectedCard - 1]" class="card-reveal">
      <div v-for="(category, key) in cardFields[selectedCard - 1]" :key="key">
        <h4 class="reveal-category">{{ capitalize(key) }}..?</h4>
        <ul class="reveal-list">
          <li v-for="(item, index) in category" :key="index" class="reveal-item">{{ item }}</li>
        </ul>
      </div>
      <div v-if="cardFields[selectedCard - 1].image" class="image-container">
    <img :src="cardFields[selectedCard - 1].image" alt="Uploaded Image" class="uploaded-image"/>
  </div>
    </div>

    <h4 class="end-message">Thank you for using this tool. I hope I could make your life a little bit easier! </h4>

  </BaseOverlay>
  <ConfirmAction v-if="isConfirmActionVisible" @close="closeOverlay">
    <BaseButton @click="selectedVisible" class="confirm">Yes I am</BaseButton>
    <BaseButton @click="closeConfirmChoice" class="confirm">No, I want to make some changes</BaseButton>
  </ConfirmAction>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TheSection from '@/components/TheSection.vue';
import OptionCard from '@/components/OptionCard.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseOverlay from '@/components/BaseOverlay.vue';
import ConfirmAction from '@/components/ConfirmAction.vue';
import ArrowComponent from '@/components/ArrowComponent.vue';

const formData = ref(null);
const cardFields = ref([]);
const decisionTypeText = ref('');
const specialPersonText = ref('');
const selectedCard = ref('');
const isSelectedVisible = ref(false);
const isConfirmActionVisible = ref(false);
const isSecondSectionVisible = ref(true);

const decisionTypeOptions = {
  '1': 'I have to make a personal decision.',
  '2': "It's someone's birthday (or other party).",
  '3': 'To be or not to be?!'
};

const specialPersonOptions = {
  '1': 'Wife/Husband',
  '2': 'A friend',
  '3': 'A work buddy',
  '4': 'Someone else'
};

const secondSection = ref(null);

const handleCardSelection = (cardNumber) => {
  selectedCard.value = cardNumber;
};

const closeOverlay = () => {
  isSelectedVisible.value = false;
}
const openConfirmAction = () => {
  isConfirmActionVisible.value = true;
};
const closeConfirmChoice = () => {
  isConfirmActionVisible.value = false;
}
const selectedVisible = () => {
  closeConfirmChoice()
    isSelectedVisible.value = true;
    isSecondSectionVisible.value = false;
}

const capitalize = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const scrollToSecondSection = () => {
  const sectionElement = secondSection.value?.$el || secondSection.value // Access the actual DOM element
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.error('Second section not found')
  }
}

onMounted(() => {
  const dataParam = new URLSearchParams(window.location.search).get('data');
  
  if (dataParam) {
    try {
      const parsedData = JSON.parse(decodeURIComponent(dataParam));
      
      if (parsedData.cardFields) {
        cardFields.value = parsedData.cardFields;
        const { cardFields: _, ...restData } = parsedData;
        formData.value = restData;
      } else {
        formData.value = parsedData;
      }
    } catch (error) {
      console.error('Error parsing data:', error);
      formData.value = { cardNumber: 2 };
    }
  } else {
    formData.value = { cardNumber: 2 };
  }
});
</script>

  
<style scoped>
:deep(.second-section>.s-container){
  height: auto;
    padding: 8vmin 16vmin;
}
  .receive-section{
    background-image: url(../assets/hero2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center ;
    color:white
}

.hero-title{
  font-size: 9vmin;
  font-family: Rhodium Libre, sans-serif;
}
.hero-p{
  font-size: 2.5vmin;
}

.second-section :deep(.s-container) {
  height: fit-content !important;
  align-items: center !important;
}
.received-p {
  font-size: 2vmin;
  font-weight: 300;
  text-align: center;
  margin-bottom: 2.5vmin;
}
.confirm{
  background-color: transparent;
  color: #174218;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: 2vmin!important;
}
.confirm:hover{
  background-color: #174218;
  color: white;
  cursor: pointer;
}
.cn{
  color: #174218;
  text-decoration: underline;
}

.card-reveal {
  display: flex;
  justify-content: space-around;
  gap: 2vmin;
}
.reveal-list{
  list-style: none;
}
.reveal-item {
  border: 0.3vmin solid;
  border-color: transparent transparent transparent var(--secondary-color);
  padding-left: 1vmin;
  margin: 0.5vmin;
  font-size: 2vmin;
  font-weight: 500;
}
.reveal-category{
  color:#174218;
  font-weight: 400;
  margin: 1vmin 0;
}
.image-container {
  text-align: center;
  margin-top: 2vmin;
}

.uploaded-image {
  max-width: 100%;
  max-height: 300px; 
  object-fit: cover;
}
.end-message, .reveal-title{
  font-size: 2.5vmin;
  font-weight: 300;
  text-align: center;
  margin-bottom: 2.5vmin;
  }

  .end-message{
    margin-top: 2.5vmin;
  }
  .option-cards{
  gap: 3vmin
}

  @media (max-width: 768px) {
    .hero-receive{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .hero-title,.hero-p{
      text-align: center;
    }
    .confirm{
      font-size: 12px!important;
    }
    .option-cards {
  flex-direction: column;
  gap: 0
}
.card-button{
  width: 100%;
  height: 20vh;
}
.cards, .deciding-user{
  flex-direction: column !important;
  gap: 2vmin
}

  }
</style>
  