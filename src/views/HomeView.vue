<template>
  <div class="home">
  <TheSection class="hero-section">
    <div class="hero">
      <div>
        <h1 class="hero-title">PickPerfect</h1>
        <p class="hero-p">For those who are unsure and need some help.</p>
      </div>
      <div class="hero-buttons">
        <BaseButton class="find" @click="findMoreOverlay">Find more about how it works</BaseButton>
      </div>  
    </div>
    <ArrowComponent @scrollToSection="scrollToSecondSection" />  
  </TheSection>
  <TheSection class="second-section" ref="secondSection">
      <ChoiceForm />
  </TheSection>

<BaseOverlay v-if="isFindMoreVisible"  @close="closeOverlay">
  <FindMore class="find-more" />
</BaseOverlay>
</div>
</template>

<script setup>
import { ref } from 'vue'
import TheSection from '../components/TheSection.vue'
import BaseButton from '../components/BaseButton.vue'
import BaseOverlay from '@/components/BaseOverlay.vue'
import ChoiceForm from '../components/ChoiceForm.vue'
import FindMore from './FindMore.vue'
import ShareOutside from './ShareOutside.vue'
import ArrowComponent from '@/components/ArrowComponent.vue'

const isFindMoreVisible = ref(false)
const isShareOutsideVisible = ref(false)

const secondSection = ref(null)

const findMoreOverlay = () => {
  isFindMoreVisible.value = true
}

const shareOutsideOverlay = () => {
  isShareOutsideVisible.value = true
}

const closeOverlay = () => {
  isFindMoreVisible.value = false
  isShareOutsideVisible.value = false
}

const scrollToSecondSection = () => {
  const sectionElement = secondSection.value?.$el || secondSection.value 
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.error('Second section not found')
  }
}
</script>


<style scoped>
.hero-section{
    background-image: url(../assets/hero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center ;
}

.hero{
  display: flex;
  flex-direction: column;
  color: var(--color-text);
}
.hero-title{
  font-size: 9vmin;
  font-family: Rhodium Libre, sans-serif;
}
.hero-p{
  font-size: 2.5vmin;
}
.hero-buttons {
  display: flex;
  margin: 5vmin 0;
  gap: 3vmin
}
.find{
  background-color: var(--primary-blue);
  border: var(--primary-color) 0.3vmin solid;
  color: white
}
.find:hover{
  background-color: var(--primary-op);

}
.share{
  background-color: transparent!important;
  border: var(--secondary-color) 0.3vmin solid;
  color: var(--secondary-color)
}
.share:hover{
  background-color: var(--secondary-op)!important;
}
:deep(.second-section > .s-container){
  height: auto;
  padding: 8vmin 16vmin;
}

@media (max-width: 1024px) {
  :deep(.second-section > .s-container){
  padding:  8vmin 8vmin;
}
}
@media (max-width: 768px) {
  .hero-title, .hero-p{
    text-align: center;
  }
  .hero-title{
    font-size: 48px;
  }
  .hero-p{
    font-size: 16px;
    margin-bottom: 10vmin;
  }

  .hero-buttons {
    flex-direction: column;
    }
  :deep(.second-section > .s-container){
  padding:  16vmin 4vmin;
}
}

</style>
