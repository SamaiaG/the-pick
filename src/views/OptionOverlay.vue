<template>
      <div class="option-overlay">
        <h3 class="title">What is your option?</h3>
        <div class="sec">
          <div class="input-fields">
              <input v-model="localFields.what[cardIndex]" type="text" class="form-control idea" :id="'whatInput' + cardIndex" placeholder="Your idea here">
          </div>
        </div>

        <BaseButton class="save" @click="saveFields">Save this Card</BaseButton>
      </div>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import { ref, reactive, defineEmits } from 'vue'

// Props and emits
const props = defineProps(['fields', 'cardIndex'])
const localFields = reactive(JSON.parse(JSON.stringify(props.fields)))
const emit = defineEmits(['save', 'close'])

const saveFields = () => {
  
  const dataToSave = {
    cardIndex: props.cardIndex,
    fields: localFields,
  }

  emit('save', dataToSave)
  emit('close')
}
</script>

<style scoped>
.option-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vmin;
}

.title{
  font-size: 3vmin;
  color: #174218
}
.sec {
  width: 100%;
  height: auto;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 2vmin;
}

.input-fields {
  width: 100%;
  margin-bottom: 2vmin;
}

.form-floating {
  margin-bottom: 2vmin;
}

.form-control {
  height: calc(2rem + calc(var(--bs-border-width)*2));
  min-height: calc(2.5rem + calc(var(--bs-border-width) * 2));
  border:none;
  width: 100%;
  font-size: 2vmin;
  padding: 1vmin;
  margin-bottom: 1vmin;
  background-color: transparent; 
  text-align: center;
}

@media (max-width: 768px) {
  .form-control {
    font-size: 16px;
  }
  .title{
    font-size: 12px
  }
}
</style>
