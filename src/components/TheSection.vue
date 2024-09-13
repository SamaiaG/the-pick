<template>
    <div class="section">
        <div class="s-container">
            <slot></slot>
        </div>
    </div>
</template>

<style >
    .section{
        background-color: white;
    }
    .s-container{
        padding: 0 16vmin;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 98vh;
        justify-content: space-around;
        }

    @media (max-width: 1024px) {
        .s-container{
            padding: 0 8vmin;
        }
    }
    @media (max-width: 768px) {
        .s-container{
            padding: 0 4vmin;
        }
    }
</style>
