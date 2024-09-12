<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
    button{
        padding: 1.5vmin 3.5vmin;
        border: none;
        border-radius: 0.8vmin;
        background-color: var(--color-primary);
        color: var(--color-text);
        font-size: 2vmin;
        font-family: Raleway, sans-serif;
        cursor: pointer;
        font-weight: 600;
    }
</style>