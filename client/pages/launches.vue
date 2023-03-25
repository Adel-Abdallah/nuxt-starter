<template>
    <div :key="$route.path">
        <v-container>
            <v-row v-if="isLoading">
                <div style="position: relative">
                    <h1>Loading...</h1>
                </div>
            </v-row>
            <h1>Launches</h1>
            <v-select
                v-model="selectedYear"
                :items="years"
                label="Filter by Year"
                @change="filterLaunchesByYear"
            />
            <v-row v-if="launchesByYear.length > 0">
                <v-col v-for="launch in launchesByYear" :key="launch.id">
                    <v-card class="card">
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
interface Launch {
    id: string
    mission_name: string
    launch_date_local: string
    launch_site: {
        site_name_long: string
    }
    rocket: {
        rocket_name: string
    }
    details?: string
}

const { launches, filterByYear, years } = useLaunches()
const selectedYear = ref<number | null>(null)
const isLoading = ref(false)

const filterLaunchesByYear = () => {
    isLoading.value = true // set loading state to true
    filterByYear(selectedYear.value) // make the API call
    isLoading.value = false // set loading state back to false
}

const launchesByYear = computed(() => {
    if (selectedYear.value !== null) {
        return launches.value.filter((launch: Launch) => {
            const launchYear = new Date(launch.launch_date_local).getFullYear()
            return launchYear === selectedYear.value
        })
    } else {
        // If selectedYear is null, return all launches
        return launches.value
    }
})
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
