<template>
    <div class="loading">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
    </div>
</template>

<style>
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-bar {
    height: 12px;
    width: 4px;
    margin: 0 2px;
    background-color: #000;
    animation: loading 1s ease-in-out infinite;
}

@keyframes loading {
    0% {
        transform: scale(1);
    }
    20% {
        transform: scale(1, 2.5);
    }
    40% {
        transform: scale(1);
    }
}
</style>
