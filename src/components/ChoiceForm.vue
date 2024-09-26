<template>
  <div class="container" @submit.prevent="generateLink">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" placeholder="name" v-model="formData.name" required>
      <label for="floatingInput">What is your name?</label>
    </div>
    <select class="form-select decision-type mb-3" aria-label="Default select example" @change="updateDecisionType($event)" v-model="formData.decisionType" required>
      <option value="" disabled selected>What are you not sure with?</option>
      <option value="1">I have to make a personal decision.</option>
      <option value="2">It's someone's birthday (or other party).</option>
      <option value="3">To be or not to be?!</option>
    </select>
    <div class="if-party" v-if="formData.decisionType === '2'">
      <select class="form-select party-person mb-3" aria-label="Default select example" @change="updateDecisionType($event)" v-model="formData.specialPerson" required>
        <option value="" disabled selected>Who is this special person for you?</option>
        <option value="1" class="option">Wife/Husband</option>
        <option value="2" class="option">A friend</option>
        <option value="3" class="option">A work buddy</option>
        <option value="4" class="option">Someone else</option>
      </select>
      <div class="form-floating person-name mb-3">
        <input type="text" class="form-control" id="personNameInput" placeholder="Person's name" v-model="formData.personName" required>
        <label for="personNameInput">What is her/his name?</label>
      </div>
    </div>
    <div class="cards mb-3 d-flex justify-content-between align-items-center">
      <p>How many cards do you need?</p>
      <div class="card-number d-flex">
        <button 
          v-for="option in cardOptions" 
          :key="option"
          class="btn btn-outline-primary" 
          :class="{ 'btn-active': formData.cardNumber === option }"
          @click="setActive(option)"
        >
          {{ option }} cards
        </button>
      </div>
    </div>
    <div class="option-cards d-flex wrap justify-content-center">
      <OptionCard class="card1" imageSrc="cards/card1.jpg" altText="card1" title="1" @click="openOverlay(1)" />
      <OptionCard class="card2" imageSrc="cards/card2.jpg" altText="card2" title="2" @click="openOverlay(2)" />
      <OptionCard class="card3" imageSrc="cards/card3.jpg" altText="card3" title="3" v-if="formData.cardNumber === 3" @click="openOverlay(3)" />
    </div>
    <p class="mb-3 align-self-start">Now that you've completed the cards, it's time for the choice to be made!</p>
    <div class="deciding-user mb-5 d-flex justify-content-between align-items-center">
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
        <input type="plaintext" class="form-control" id="decidingUserEmail" placeholder="name@example.com" v-model="formData.decidingUserName" required>
        <label for="decidingUserName">Now enter the name of the person who will pick the card!</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="decidingUserEmail" placeholder="name@example.com" v-model="formData.decidingUserEmail" required>
        <label for="decidingUserEmail">And your email, to see the picked card content.</label>
      </div>
    </div>
    <BaseButton @click="openConfirmAction" class="make-choice">Make the choice</BaseButton>
    <p v-if="generatedLink">Share this link: <a :href="generatedLink">{{ generatedLink }}</a></p>
  </div>

<BaseOverlay v-if="isOptionOverlayVisible"  @close="closeOverlay"  >
  <OptionOverlay 
  :fields="cardFields[activeCard]" 
  :cardIndex="activeCard" 
  @save="saveCardFields"
   @close="closeOverlay"
/></BaseOverlay>

  <ConfirmAction v-if="isConfirmActionVisible" @close="closeOverlay" @makeChoice="handleMakeChoice">
    <BaseButton @click="handleMakeChoice" class="make-choice">Yes I am</BaseButton>
    <BaseButton @click="closeOverlay" class="make-choice">No, I want to make some changes</BaseButton>
  </ConfirmAction>
</template>

<script setup>
import { ref } from 'vue';
import OptionCard from './OptionCard.vue';
import BaseButton from './BaseButton.vue';
import BaseOverlay from './BaseOverlay.vue';
import OptionOverlay from '../views/OptionOverlay.vue';
import ConfirmAction from '../components/ConfirmAction.vue';

// Card and user options
const cardOptions = [2, 3];
const userOptions = ['ME', 'SOMEONE ELSE'];

// Reactive references
const activeCard = ref(null);
const isOptionOverlayVisible = ref(false);
const isConfirmActionVisible = ref(false);

const cardFields = ref([{ what: [], image: null }, { what: [], image: null }, { what: [], image: null }]);

const formData = ref({
  name: '',
  decisionType: '',
  specialPerson: '',
  personName: '',
  cardNumber: 2,
  cardOptions: cardFields.value,
  decidingUser: 'ME',
  decidingUserName: '',
  decidingUserEmail: ''
});
const generatedLink = ref('');

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
  console.log("Opening overlay for card:", cardIndex);
  activeCard.value = cardIndex - 1;
  isOptionOverlayVisible.value = true;
};
const openConfirmAction = () => {
  isConfirmActionVisible.value = true;
};

const closeOverlay = () => {
  console.log("Closing overlay");
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

const handleMakeChoice = () => {
  const shuffleCardsFields = shuffleCards(); // Shuffle the card fields

  const shuffledFormData = {
    ...formData.value,
    cardFields: shuffleCardsFields // Include the shuffled card fields
  };

  // Serialize the form data and encode it for the URL
  const serializedData = encodeURIComponent(JSON.stringify(shuffledFormData));
  const baseUrl = import.meta.env.BASE_URL;
  
  // Create a URL with the serialized data as a query parameter
  const link = `${baseUrl}receive?data=${serializedData}`;

  // Redirect to the receive component with the form data in the URL
  window.location.href = link;
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
  font-size: 3vmin;
}
.users, .card-number{
  gap: 5vmin
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
p{
  margin-bottom: 0;
  font-size: 18px;
  text-align: center;
}
.make-choice{
  font-size: 12px!important;
}
label, .form-select{
  font-size: 2.5vmin;
}
}
</style>