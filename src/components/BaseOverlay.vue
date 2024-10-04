<template>
    <div class="overlay" @click="handleBackgroundClick">
        <div class="overlay-c" @click.stop>
            <img src="../assets/Close_MD.svg" alt="logo" class="close-icon" @click="emit('close')">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['close'])
function handleBackgroundClick() {
    emit('close')
}
</script>

<style scoped>
    .overlay{
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(4px);
        border-radius: 10px;
        overflow: auto;
    }

    .overlay-c{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        padding: 5vmin;
        background-color: white;
        box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow:hidden;
        min-height: 20vmin;
    }
    .close-icon{
        position: absolute;
        top: 2vmin;
        right: 2vmin;
        width: 3vmin;
        cursor: pointer;
    }
    
    @media (max-width: 768px) {
        .overlay-c{
            width: 90%;
        }
    }
</style>
