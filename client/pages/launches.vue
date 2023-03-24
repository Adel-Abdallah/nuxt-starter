<template>
    <div>
        <v-container>
            <h1>Launches</h1>
            <v-row>
                <v-col v-for="launch in launches" :key="launch.id">
                    <v-card class="card">
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
import { GET_LAUNCHES } from '@/graphql/queries'

interface LaunchSite {
    site_name_long: string
}

interface Rocket {
    rocket_name: string
}

interface Launch {
    id: string
    mission_name: string
    launch_date_local: string
    launch_site: LaunchSite
    rocket: Rocket
    details?: string
}

const { data } = useAsyncQuery<{
    launches: Launch[]
}>(GET_LAUNCHES)

console.log(data)
console.log(`GET_LAUNCHES`, GET_LAUNCHES)
const launches = computed(() => data.value?.launches ?? [])
console.log(`launches`, launches)
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
