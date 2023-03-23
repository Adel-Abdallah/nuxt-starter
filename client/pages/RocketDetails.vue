<template>
    <div>
        <v-container>
            <v-row>
                <v-col v-for="launch in launches" :key="launch.id">
                    <v-card>
                        <v-card-title>Description</v-card-title>
                        <v-card-subtitle>First flight date</v-card-subtitle>
                        <v-card-text>
                            Height
                            <br />
                            Rocket Name: {{ launch.rocket.rocket_name }}
                            <br />
                        </v-card-text>
                        <v-card-text>Diameter</v-card-text>
                        <v-card-text>Mass</v-card-text>
                        <v-card-text>Number of stages</v-card-text>
                    </v-card>
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>
import { gql } from 'graphql-tag'

const GET_LAUNCHES = gql`
    query GetLaunches {
        launches {
            id
            rocket {
                rocket_name
            }
        }
    }
`

const { data } = useAsyncQuery<{
    launches: {
        id: Number
        rocket: {
            rocket_name: String
        }
    }
}>(GET_LAUNCHES)
const launches = computed(() => data.value?.launches ?? [])
console.log(`launches`, launches)
</script>
