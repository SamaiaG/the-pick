<template>
  <div class="option">
    <BaseOverlay>
      <div class="option-overlay">
        <div class="what-to sec">
          <span> What to..? </span>
          <div class="grid-container">
            <div class="field-nr">
              <img @click="addField('what')" src="../assets/add_icon.svg" alt="add" class="add add-what">
              <img @click="removeField('what')" src="../assets/remove_icon.svg" alt="remove" class="add add-what">
            </div>
            <div class="input-fields">
              <div v-for="(field, index) in localFields.what" :key="'what-' + index" class="form-floating">
                <input v-model="localFields.what[index]" type="text" class="form-control idea" :id="'whatInput' + index" placeholder="option">
              </div>
            </div>
          </div>
        </div>
        <div class="second-row">
          <div class="where sec">
            <span> Where..? </span>
            <div class="grid-container">
              <div class="field-nr">
                <img @click="addField('where')" src="../assets/add_icon.svg" alt="add" class="add add-where">
                <img @click="removeField('where')" src="../assets/remove_icon.svg" alt="remove" class="add add-where">
              </div>
              <div class="input-fields">
                <div v-for="(field, index) in localFields.where" :key="'where-' + index" class="form-floating">
                  <input v-model="localFields.where[index]" type="text" class="form-control idea" :id="'whereInput' + index" placeholder="option">
                </div>
              </div>
            </div>
          </div>
          <div class="more sec">
            <span> ... </span>
            <div class="grid-container">
              <div class="field-nr">
                <img @click="addField('more')" src="../assets/add_icon.svg" alt="add" class="add add-more">
                <img @click="removeField('more')" src="../assets/remove_icon.svg" alt="remove" class="add add-more">
            </div>
              <div class="input-fields">
                <div v-for="(field, index) in localFields.more" :key="'more-' + index" class="form-floating">
                  <input v-model="localFields.more[index]" type="text" class="form-control idea" :id="'moreInput' + index" placeholder="option">
                </div>
              </div>
            </div>
          </div>
        </div>
        <BaseButton class="save" @click="saveFields">Save this Card</BaseButton>
      </div>
    </BaseOverlay>
  </div>
  </template>
  

<script setup>
import BaseOverlay from '../components/BaseOverlay.vue'
import BaseButton from '../components/BaseButton.vue'
import { ref, reactive, defineEmits } from 'vue'

const props = defineProps(['fields', 'cardIndex'])
const localFields = reactive(JSON.parse(JSON.stringify(props.fields)))

const addField = (section) => {
  if (localFields[section].length < 3) {
    localFields[section].push('');
  }
}
const removeField = (section) => {
  if (localFields[section].length > 1) {
    localFields[section].pop();
  }
}

const emit = defineEmits(['save', 'close'])


const saveFields = () => {
  if (localFields.what.some(field => !field) || 
      localFields.where.some(field => !field) || 
      localFields.more.some(field => !field)) {
    alert("Please fill in all fields before saving.");
    return;
  }
  emit('save', { cardIndex: props.cardIndex, fields: localFields });
  emit('close');
}
</script>

<style scoped>
.option-overlay{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4vmin;
}
.second-row{
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 5vmin;
}

.sec{
    width: 100%;
   height: 20vmin;
   background-color: white;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   position: relative;
}

span{
    font-weight: 600;
    font-size: 5vmin;
    color: #1742183a;
    position: absolute;
    opacity: 0.5;
}
.form-control{
    height: calc(2rem + calc(var(--bs-border-width)*2));
    min-height: calc(2.5rem + calc(var(--bs-border-width) * 2));
    border: 0.1vmin solid;
    border-color:transparent transparent #174218 transparent;
    width: 100%;
    font-size: 2vmin;
    padding:  1vmin;
    margin-bottom: 1vmin;
    background-color: transparent;
}
.save{
    border: 0.4vmin solid #174218;
    color: #174218;
}
.save:hover{
    background-color: #174218;
    color: white;
    cursor: pointer;
}
.grid-container {
    display: grid;
    width: 80%;
    grid-template-columns: 10% 90%;
    align-items: center;
    gap: 1vmin;
}

.field-nr{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vmin
}

</style>