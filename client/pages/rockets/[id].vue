<template>
    <div>
        <v-container>
            <v-row>
                <v-col v-if="loading" cols="12">
                    <v-card>
                        <v-card-text>Loading...</v-card-text>
                    </v-card>
                </v-col>
                <v-col v-else-if="error" cols="12">
                    <v-card>
                        <v-card-text>{{ error.message }}</v-card-text>
                    </v-card>
                </v-col>
                <v-col v-else cols="12">
                    <v-card>
                        <v-card-title>{{ rocket.name }}</v-card-title>
                        <v-card-subtitle>First Flight: {{ rocket.first_flight }}</v-card-subtitle>
                        <v-card-subtitle>{{ rocket.description }}</v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>
import { gql } from 'graphql-tag'
const route = useRoute()
const rocketId = route.params.id

interface Height {
    feet: number
    meters: number
}

interface Diameter {
    feet: number
    meters: number
}

interface Mass {
    kg: number
    lb: number
}

interface Rocket {
    id: string
    name: string
    description: string
    first_flight: string
    height: Height
    diameter: Diameter
    mass: Mass
    stages: number
}

interface data {
    rocket: Rocket
}

const GET_ROCKET_DETAILS = gql`
    query GetRocketDetails($rocketId: ID!) {
        rocket(id: $rocketId) {
            id
            name
            description
            first_flight
            height {
                feet
                meters
            }
            diameter {
                feet
                meters
            }
            mass {
                kg
                lb
            }
            stages
        }
    }
`

const { data, error } = useAsyncQuery<{
    rocket: {
        id: string
        name: string
        description: string
        first_flight: string
        height: {
            feet: number
            meters: number
        }
        diameter: {
            feet: number
            meters: number
        }
        mass: {
            kg: number
            lb: number
        }
        stages: number
    }
}>(GET_ROCKET_DETAILS, { rocketId })

const rocket = computed(() => data.value?.rocket ?? [])
</script>
