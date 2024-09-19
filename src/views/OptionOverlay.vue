<template>
  <div class="option">
      <div class="option-overlay">
        <div class="sec">
          <div class="input-fields">
            <!-- Text input fields -->
              <input v-model="localFields.what[cardIndex]" type="text" class="form-control idea" :id="'whatInput' + cardIndex" placeholder="option">
          </div>

          <!-- Image upload option -->
          <div class="image-upload">
            <label for="imageUpload">Upload an Image:</label>
            <input type="file" id="imageUpload" @change="onImageUpload" accept="image/*" />
            <p v-if="imageName">Selected Image: {{ imageName }}</p>
            <img v-if="imagePreview" :src="imagePreview" alt="Image preview" class="image-preview"/>
          </div>
        </div>

        <BaseButton class="save" @click="saveFields">Save this Card</BaseButton>
      </div>
  </div>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue'
import { ref, reactive, defineEmits } from 'vue'

// Props and emits
const props = defineProps(['fields', 'cardIndex'])
const localFields = reactive(JSON.parse(JSON.stringify(props.fields)))
const emit = defineEmits(['save', 'close'])

// Image-related reactive variables
const imageFile = ref(null)
const imageName = ref('')
const imagePreview = ref('')

// Handle image upload
const onImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    imageFile.value = file
    imageName.value = file.name
    imagePreview.value = URL.createObjectURL(file)
  }
}

// Save fields with validation for both text input and image
const saveFields = () => {
  const textFieldsEmpty = localFields.what.every(field => !field)


  const dataToSave = {
    cardIndex: props.cardIndex,
    fields: localFields,
    image: imageFile.value ? imageFile.value : null,
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
  border: 0.1vmin solid;
  border-color: #174218;
  width: 100%;
  font-size: 2vmin;
  padding: 1vmin;
  margin-bottom: 1vmin;
  background-color: #f9f9f9; /* Set visible background color */
}

.image-upload {
  margin-top: 2vmin;
  text-align: center;
}

.image-preview {
  margin-top: 1vmin;
  max-width: 100%;
  max-height: 15vmin;
  object-fit: cover;
}

.save {
  border: 0.4vmin solid #174218;
  color: #174218;
}

.save:hover {
  background-color: #174218;
  color: white;
  cursor: pointer;
}
</style>
