<template>
    <div style="position: relative">
        <NuxtLoadingIndicator
            :color="'blue'"
            :height="10"
            :duration="1000"
            :throttle="100"
            style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto"
        />
        <NuxtPage />
    </div>
</template>
