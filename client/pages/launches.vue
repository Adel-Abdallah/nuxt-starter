<template>
    <div :key="$route.path">
        <v-container>
            <v-row v-if="isLoading">
                <div style="position: relative">
                    <h1>Loading...</h1>
                </div>
            </v-row>
            <v-row>
                <v-col>
                    <h1>Launches</h1>
                </v-col>
                <v-col></v-col>
                <v-col>
                    <v-btn-toggle v-model="sortDirection" mandatory>
                        <v-btn @click="sortAscending">Ascending</v-btn>
                        <v-btn @click="sortDescending">Descending</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-row>
            <v-row v-if="launches.length === 0">
                <div style="position: relative">
                    <h3>No launches found.</h3>
                </div>
            </v-row>
            <v-row v-if="launches.length > 0">
                <v-col v-for="launch in launches" :key="launch.id">
                    <v-card class="card">
                        <v-card-actions>
                            <v-btn @click="addToFavorites(launch)">Add to Favorites</v-btn>
                        </v-card-actions>
                        <v-card-title v-if="launch.mission_name">{{ launch.mission_name }}</v-card-title>
                        <v-card-subtitle v-if="launch.launch_date_local">
                            Launch Date: {{ launch.launch_date_local }}
                        </v-card-subtitle>
                        <v-card-text>
                            <template v-if="launch.launch_site">
                                Launch Site: {{ launch.launch_site.site_name_long }}
                                <br />
                            </template>
                            <template v-if="launch.rocket">
                                Rocket Name: {{ launch.rocket.rocket_name }}
                                <br />
                            </template>
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
const { isLoading, launches, sortAscending, sortDescending } = useLaunches()
const favoritesStore = useFavoritesStore()
const sortDirection = ref<'ascending' | 'descending'>('ascending')

const addToFavorites = (launch: any) => {
    favoritesStore.addRocket(launch)
    console.log(`Adding ${launch} to favorites`)
}
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
