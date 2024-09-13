<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
    button{
        padding: 1.4vmin 3.4vmin;
        border: none;
        border-radius: 0.8vmin;
        background-color: transparent;
        color: var(--color-text);
        font-size: 1.8vmin;
        font-family: Raleway, sans-serif;
        cursor: pointer;
        font-weight: 600;
    }
    @media (max-width: 768px) {
        button{
            font-size: 16px;
        }
    }
</style>