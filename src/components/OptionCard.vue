<template>
   <div class="card-button">
        <label :for="id" class="card" @click="selectCard">
            <img :src="imageSrc" class="card-img-top" :alt="altText">
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
            </div>
        </label>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const props = defineProps({
  id: String,
  imageSrc: String,
  altText: String,
  title: String
})

const emit = defineEmits(['cardSelected'])
const selectCard = () => {
  emit('cardSelected', props.title)
}
</script>

<style scoped>
.card-button{
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  }

.card{
  border: none;
  overflow: hidden;
  justify-content: center;
  align-items: end;
  cursor: pointer;
  width: 100%;
  height: 80%;
  border-radius: var(--bs-border-radius);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

}

.card-body{
    position: absolute;
    background-color: rgb(0, 0, 0, 0.5);
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card:hover .card-body{
  width: 100%;
  background-color: rgb(0, 0, 0, 0.6);
  transition: 0.5s;

}
.card-title{
    font-size: 10vmin;
    text-shadow: 0 0 1vmin white;
}
.card-img-top{
    width: 100%;
    height: 100%;
    object-fit: cover;
}


</style>

