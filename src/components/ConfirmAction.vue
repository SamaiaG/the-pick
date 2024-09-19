<script setup>
import BaseOverlay from '../components/BaseOverlay.vue'
</script>

<template>
    <div class="confirm">
    <BaseOverlay>
        <div class="confirm-action">
            <h3 class="title">Are you sure you are ready for the final decision?</h3>
            <div class="buttons">
                <slot></slot>
            </div>
        </div>
    </BaseOverlay>
</div>
</template>

<style scoped> 
.confirm-action{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.title{
    text-align: center;
    font-size: 3vmin;
    color: #174218
}
.buttons{
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}
:deep(.close-icon){
    display: none;
}
</style>