<template>
    <div class="contact-component">
    <BaseOverlay>
        <div class="contact">
        <h4 class="contact-title mb-5">Contact me</h4>
    <div class="contact-component">
        <form>
            <div class="name">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="firstname"  required>
                    <label for="floatingInput">First Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="lastname"  required>
                    <label for="floatingInput">Last Name</label>
                </div>
            </div>
            <div class="email form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="email"  required>
                <label for="floatingInput">Email</label>
            </div>
            <div class="message form-group mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message" required></textarea>
            </div>
            <BaseButton type="submit" class="submit-btn">Send</BaseButton>

         </form>
        <div class="right-part">
            <img src="../assets/contact.jpg" alt="contact" class="contact_img">
        </div>
    </div>
     <div class="other-methods mt-5">
            <a href="https://github.com/Abdulrhman-Elkady">
                <img src="../assets/linkedin_icon.svg" alt="contact" class="contact_link">
            </a>
            <a class="gmail" href="mailto:Abdulrhman-Elkady?subject=Hello">
                <img src="../assets/gmail_icon.svg" alt="contact" class="contact_link">
            </a>
            
        </div>
    </div>
     </BaseOverlay>
    </div>
 </template>
 
 <script setup>
 import { ref } from 'vue';
 import BaseOverlay from '../components/BaseOverlay.vue'
 import BaseButton from '@/components/BaseButton.vue';
 
 const firstName = ref('');
 const lastName = ref('');
 const email = ref('');
 const message = ref('');
 
 const sendEmail = async () => {
   try {
     const response = await fetch('http://localhost:3000/send-email', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         firstName: firstName.value,
         lastName: lastName.value,
         email: email.value,
         message: message.value,
       }),
     });
     
     if (response.ok) {
      alert('Email sent successfully!');
      // Clear form fields
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      message.value = '';
    } else {
      alert('Failed to send email. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
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
 .contact-link{
    width: 50px;
    height: 50px;
    cursor: pointer;
 }
 
 </style>