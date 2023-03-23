<template>
    <div>
        <v-container>
            <v-row>
                <v-col v-for="launch in launches" :key="launch.id">
                    <v-card>
                        <v-card-title>{{ launch.mission_name }}</v-card-title>
                        <v-card-subtitle>Launch Date: {{ launch.launch_date_local }}</v-card-subtitle>
                        <v-card-text>
                            Launch Site: {{ launch.launch_site }}
                            <br />
                            Rocket Name: {{ launch.rocket.rocket_name }}
                            <br />
                            <span v-if="launch.details">Details: {{ launch.details }}</span>
                        </v-card-text>
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
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
            rocket {
                rocket_name
            }
            details
        }
    }
`

const { data } = useAsyncQuery<{
    launches: {
        id: Number
        mission_name: String
        launch_date_local: String
        rocket: {
            rocket_name: String
        }
    }
}>(GET_LAUNCHES)
console.log(data)
console.log(`GET_LAUNCHES`, GET_LAUNCHES)
const launches = computed(() => data.value?.launches ?? [])
console.log(`launches`, launches)
</script>
