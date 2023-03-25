<template>
    <v-card class="mx-auto" max-width="500" color="red lighten-1" dark>
        <v-card-title class="headline text-center">
            {{ error ? error.message : 'Oops, something went wrong' }}
        </v-card-title>
        <v-card-text class="text-center">
            <v-btn color="white" @click="$emit('retry')">Retry</v-btn>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        error: {
            type: Error,
            default: null,
        },
    },
    emits: ['retry'],
})
</script>

<style scoped>
.error-alert {
    padding: 10px;
    background-color: red;
    color: white;
}
</style>
