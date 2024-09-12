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
        padding: 0 160px;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 98vmin;
        justify-content: space-around;
        margin-bottom: 4vmin;
        }
</style>
