<template>
    <div>
        <v-container>
            <h1>Rockets</h1>
            <v-row>
                <v-col v-for="rocket in rockets" :key="rocket.id" cols="12" md="6" lg="4">
                    <nuxt-link :to="`/rockets/${rocket.id}`">
                        <v-card class="ma-2 card">
                            <v-card-title>{{ rocket.name }}</v-card-title>
                            <v-card-text>{{ rocket.description }}</v-card-text>
                        </v-card>
                    </nuxt-link>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>
import { GET_ROCKETS } from '@/graphql/queries'

const { data } = useAsyncQuery<{
    rockets: {
        id: string
        name: string
        description: string
    }[]
}>(GET_ROCKETS)

const rockets = computed(() => data.value?.rockets ?? [])
console.log('rockets', rockets)
</script>

<style scoped>
a {
    text-decoration: none;
}
.card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 10px;
    min-height: 250px;
    padding: 20px;
}

.card:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
}
</style>
