<template>
    <div class="contact">
        <div class="contact">
        <h4 class="contact-title mb-5">Contact me</h4>
    <div class="contact-component">
        <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="name">
                <div class="form-floating mb-3">
                    <input v-model="firstname" type="text" class="form-control" id="floatingInput" placeholder="firstname"  required>
                    <label for="floatingInput">First Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="lastname" type="text" class="form-control" id="floatingInput" placeholder="lastname"  required>
                    <label for="floatingInput">Last Name</label>
                </div>
            </div>
            <div class="email form-floating mb-3">
                <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="email"  required>
                <label for="floatingInput">Email</label>
            </div>
            <div class="message form-group mb-3">
                <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message" required></textarea>
            </div>
            <BaseButton type="submit" class="submit-btn" :disabled="isSubmitting">{{isSubmitting ? 'sending...' : 'send message'}}</BaseButton>

         </form>
        <div class="right-part">
            <img src="../assets/contact.jpg" alt="contact" class="contact_img">
        </div>
    </div>
     <div class="other-methods mt-5">
            <a href="https://www.linkedin.com/in/samaia-gahramanov-569343232/">
                <img src="../assets/linkedin_icon.svg" alt="contact" class="contact_link">
            </a>
            <a class="gmail" href="mailto:samaiagahramanov@gmail.com">
                <img src="../assets/gmail_icon.svg" alt="contact" class="contact_link">
            </a>
            
        </div>
    </div>
    </div>
 </template>
 
 <script setup>
 import { ref } from 'vue';
 import emailjs from 'emailjs-com';
 
 import BaseButton from '@/components/BaseButton.vue';
 import BaseOverlay from '@/components/BaseOverlay.vue';
 
 const firstname = ref('');
 const lastname = ref('');
 const email = ref('');
 const message = ref('');
 
 const isSubmitting = ref(false);
 const submitError = ref('');
 
 const serviceID = 'service_7klxz2l';
   const templateID = 'template_bu3mrbg';
   const userID = 'gZN89EuNcBtTr07K4';
 
 const handleSubmit = async () => {
   if (!validateForm()) return;
 
   isSubmitting.value = true;
 
   try {
     const formData = {
   from_name: firstname.value + ' ' + lastname.value,
   from_email: email.value, 
   message_html: message.value 
 };
 
     const response = await emailjs.send(serviceID, templateID, formData, userID);
 
     if (response.status === 200) {
       alert('Message sent successfully!');
     } else {
       submitError.value = 'Failed to send the message. Please try again later.';
     }
   } catch (error) {
     submitError.value = 'Error occurred. Please try again later.';
   } finally {
     isSubmitting.value = false;
   }
 };
 
 const validateForm = () => {
   if (!firstname.value || !email.value || !message.value) {
     submitError.value = 'All fields are required.';
     return false;
   }
   return true;
 };
 </script>
 
 <style scoped>
 form {
     display: flex;
     flex-direction: column;
 }

 .contact-title{
     text-align: center;
 }
 .find-more{
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 2rem;
 }
 .contact-component{
    display: flex;
    width: 100%;
    justify-content: space-around;
    gap: 1vmin;
    
 }
 .contact_img{
     width: 100%;
     object-fit:cover;
     height: 31vmin;
     border-radius: 1vmin;
 }
.right-part{
    display: flex;
    width: 30%;}
 .name {
    display: flex;
    gap: 1rem;
 }
 .submit-btn{
    color:#174218!important;
    border: 0.2vmin solid #174218;
    background-color: white;
 }
 .submit-btn:hover{
    background-color: #174218;
    color: white!important;
 }
 .other-methods{
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
 }
 .contact_link{
    width: 5vmin;
    height: 5vmin;
    cursor: pointer;
 }

 @media (max-width: 1024px) {
  .right-part{
    display: none;
  }
  .contact_link{
    width: 40px;
    height: 40px;
  }
 }
 
 </style>