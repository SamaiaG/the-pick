<template>
  <div class="container">
    <div class="form-floating mb-3">
      <input 
        type="text" 
        class="form-control" 
        id="floatingInput" 
        placeholder="name" 
        v-model="formData.name" 
        :class="{ 'is-invalid': formErrors.name }" 
        required
      >
      <label for="floatingInput">What is your name?</label>
      <div v-if="formErrors.name" class="invalid-feedback">Please enter your name.</div>
    </div>

    <div class="cards mb-3 d-flex justify-content-between align-items-center">
      <p>How many cards do you need?</p>
      <div class="card-number d-flex">
        <button 
          v-for="option in cardOptions" 
          :key="option"
          class="btn btn-outline-primary" 
          :class="{ 'btn-active': formData.cardNumber === option, 'is-invalid': formErrors.cardNumber }"
          @click="setActive(option)"
        >
          {{ option }} cards
        </button>
      </div>
      <div v-if="formErrors.cardNumber" class="invalid-feedback d-block">Please select the number of cards.</div>
    </div>
    
    <div class="option-cards d-flex wrap justify-content-center mb-3">
      <OptionCard 
        class="card1" 
        imageSrc="cards/card1.jpg" 
        altText="card1" 
        title="1" 
        @click="openOverlay(1)" 
      />
      <OptionCard 
        class="card2" 
        imageSrc="cards/card2.jpg" 
        altText="card2" 
        title="2" 
        @click="openOverlay(2)" 
      />
      <OptionCard 
        class="card3" 
        imageSrc="cards/card3.jpg" 
        altText="card3" 
        title="3" 
        v-if="formData.cardNumber === 3" 
        @click="openOverlay(3)" 
      />
    </div>
    
    <p class="mb-3 align-self-start">Now that you've completed the cards, it's time for the choice to be made!</p>
    
 <!--    <div class="deciding-user mb-5 d-flex justify-content-between align-items-center">
      <p>Who will pick the card and make the choice?</p>
      <div class="users d-flex">
        <button 
          v-for="user in userOptions" 
          :key="user"
          class="btn btn-outline-primary" 
          :class="{ 'btn-active': formData.decidingUser === user }"
          @click="setActiveUser(user)"
        >
          {{ user }}
        </button>
      </div>
    </div> 
    
    <div class="se-chooses" v-if="formData.decidingUser === 'SOMEONE ELSE'">
      <div class="form-floating mb-3">
        <input 
          type="text" 
          class="form-control" 
          id="decidingUserName" 
          placeholder="name@example.com" 
          v-model="formData.decidingUserName" 
          :class="{ 'is-invalid': formErrors.decidingUserName }"
          required
        >
        <label for="decidingUserName">Now enter the name of the person who will pick the card!</label>
        <div v-if="formErrors.decidingUserName" class="invalid-feedback">Please enter the name of the person.</div>
      </div>
      
      <div class="form-floating mb-3">
        <input 
          type="email" 
          class="form-control" 
          id="userEmail" 
          placeholder="name@example.com" 
          v-model="formData.userEmail" 
          :class="{ 'is-invalid': formErrors.userEmail }"
          required
        >
        <label for="decidingUserEmail">And your email, to see the picked card content.</label>
        <div v-if="formErrors.userEmail" class="invalid-feedback">Please enter a valid email address.</div>
      </div>
    </div>
    -->
    
    <BaseButton @click="openConfirmAction" class="make-choice">Make the choice</BaseButton>
    <p v-if="generatedLink">Share this link:</p>
  </div>

  <BaseOverlay v-if="isOptionOverlayVisible" @close="closeOverlay">
    <OptionOverlay 
      :fields="cardFields[activeCard]" 
      :cardIndex="activeCard" 
      @save="saveCardFields" 
      @close="closeOverlay"
    />
  </BaseOverlay>
  
  <ConfirmAction v-if="isConfirmActionVisible" @close="closeOverlay" @makeChoice="handleMakeChoice">
    <BaseButton @click="handleMakeChoice" class="make-choice">Yes I am</BaseButton>
    <BaseButton @click="closeOverlay" class="make-choice">No, I want to make some changes</BaseButton>
  </ConfirmAction>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import OptionCard from './OptionCard.vue';
import BaseButton from './BaseButton.vue';
import BaseOverlay from './BaseOverlay.vue';
import OptionOverlay from '../views/OptionOverlay.vue';
import ConfirmAction from '../components/ConfirmAction.vue';

import { useFormStore } from '@/stores/useFormStore';

const router = useRouter();
const formStore = useFormStore();
const formData = ref(formStore.formData);

// Validation state
const formErrors = ref({});

// Card and user options
const cardOptions = [2, 3];
const userOptions = ['ME', 'SOMEONE ELSE'];

// Reactive references
const activeCard = ref(null);
const isOptionOverlayVisible = ref(false);
const isConfirmActionVisible = ref(false);

const cardFields = ref([{ what: [] }, { what: []}, { what: []}]);

const generatedLink = ref('');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Event handlers
const updateDecisionType = (event) => {
  formData.value.decisionType = event.target.value;
};

const setActive = (option) => {
  formData.value.cardNumber = option;
};

const setActiveUser = (user) => {
  formData.value.decidingUser = user;
};

const openOverlay = (cardIndex) => {
  activeCard.value = cardIndex - 1;
  isOptionOverlayVisible.value = true;
};

const openConfirmAction = () => {
  if (validateForm()) {
    isConfirmActionVisible.value = true;
  }
};

const closeOverlay = () => {
  isOptionOverlayVisible.value = false;
  isConfirmActionVisible.value = false;
};

const saveCardFields = (data) => {
  const { cardIndex, fields } = data;
  cardFields.value[cardIndex] = fields;
};

const shuffleCards = () => {
  const shuffledCards = [...cardFields.value];
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }
  return shuffledCards;
};

// Form validation function
const validateForm = () => {
  formErrors.value = {};

  // Validate name
  if (!formData.value.name) {
    formErrors.value.name = true;
  }


  // Validate "someone else" fields
  if (formData.value.decidingUser === 'SOMEONE ELSE') {
    if (!formData.value.decidingUserName) {
      formErrors.value.decidingUserName = true;
    }
    if (!formData.value.userEmail || !emailRegex.test(formData.value.userEmail)) {
      formErrors.value.userEmail = true;
    }
  }

  return Object.keys(formErrors.value).length === 0;
};

const handleMakeChoice = () => {
  const shuffledCardsFields = shuffleCards();

  formStore.setFormData({
    ...formData.value,
    cardFields: shuffledCardsFields,
  });

  // Navigate to the next component
  router.push({ name: 'receive' });
};
</script>


<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-floating, .if-party, .se-chooses{
  width: 100%;
}

.deciding-user, .cards{
  width: 100%;
}
.option-cards{
  gap: 3vmin
}

.users, .card-number{
  gap: 5vmin
}
.btn, .form-control, .form-select {
  border: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: var(--primary-color);
  padding: 1rem;
}
.btn:hover{
  background-color: var(--secondary-color);
  color: white;
  transition: 0.5s;
}
.btn-active {
  background-color: var(--secondary-color);
  color: white;
}
label, .form-select{
  font-size: 1.7vmin;
}
.option{
  font-size: 12px;
}
.make-choice{
  background-color: transparent;
  color: #174218;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: 2vmin!important;
}
.make-choice:hover{
  background-color: #174218;
  color: white;
  cursor: pointer;
}
@media (max-width: 768px) {
.btn{
  padding: 0.6vmin 3vmin;
  font-size: 16px;
}
.users, .card-number{
  gap: 5vmin
}

.card-button{
  width: 100%;
  height: 20vh;
}
.cards, .deciding-user{
  flex-direction: column !important;
  gap: 2vmin
}
p{
  margin-bottom: 1vmin;
  font-size: 20px;
  text-align: center;
}
.make-choice{
  font-size: 18px!important;
}
label, .form-select{
  font-size: 12px;
}
}
</style>