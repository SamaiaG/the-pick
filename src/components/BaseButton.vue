<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
    button{
        padding: 1.4vmin 3.4vmin;
        background-color: white;
        border-radius: 0.8vmin;
        border: 0.4vmin solid #174218;
        color: #174218;
        font-size: 1.8vmin;
        font-family: Raleway, sans-serif;
        font-weight: 600;
        cursor: pointer;
    }
    button:hover {
        background-color: #174218;
        color: white;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        button{
            font-size: 16px;
        }
    }
</style>