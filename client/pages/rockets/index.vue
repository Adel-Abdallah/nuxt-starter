<template>
    <div>
        <h1>Rockets</h1>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div v-for="rocket in rockets" :key="rocket.id">
                <nuxt-link :to="`/rockets/${rocket.id}`">
                    <div class="card">
                        <h2>{{ rocket.name }}</h2>
                        <p>{{ rocket.description }}</p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { gql } from 'graphql-tag'
const { id } = 'useRoute().params'

const GET_ROCKETS = gql`
    query GetRockets {
        rockets {
            id
            name
            description
        }
    }
`

const { data } = useAsyncQuery<{
    rockets: {
        id?: String
        name?: String
        description?: String
    }
}>(GET_ROCKETS, {})
console.log('data', data)
const rockets = data.value?.rockets || []
console.log('rockets', rockets)
</script>
