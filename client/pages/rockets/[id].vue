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
                    <v-card class="card">
                        <v-card-title>{{ rocket.name }}</v-card-title>
                        <v-card-subtitle>{{ rocket.description }}</v-card-subtitle>
                        <v-card-subtitle>First Flight: {{ rocket.first_flight }}</v-card-subtitle>
                        <v-card-subtitle>Height by meters {{ rocket.height.meters }}</v-card-subtitle>
                        <v-card-subtitle>Diameter{{ rocket.diameter.feet }}</v-card-subtitle>
                        <v-card-subtitle>KG : {{ rocket.mass.kg }}</v-card-subtitle>
                        <v-card-subtitle>LB : {{ rocket.mass.lb }}</v-card-subtitle>
                        <v-card-subtitle>Stages : {{ rocket.stages }}</v-card-subtitle>
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
<style scoped>
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
