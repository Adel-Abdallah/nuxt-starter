<template>
    <v-card class="my-5">
        <v-card-title>
            <slot name="title"></slot>
        </v-card-title>
        <v-card-subtitle>
            <slot name="subtitle"></slot>
        </v-card-subtitle>
        <v-card-text>
            <slot name="content"></slot>
        </v-card-text>
        <v-card-actions>
            <slot name="footer"></slot>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'LaunchCard',
}
</script>
