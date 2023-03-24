<template>
    <div :key="$route.path">
        <v-container>
            <h1>Launches</h1>
            <v-select
                v-model="selectedYear"
                :items="years"
                label="Filter by Year"
                @change="filterLaunchesByYear"
            />
            <v-row>
                <v-col v-for="launch in filteredLaunches" :key="launch.id">
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
import useLaunches from '@/stores/useLaunches'
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
console.log(launches)
console.log(filterByYear)
console.log(years)

const selectedYear = ref<number | null>(null)
console.log(selectedYear)

const filterLaunchesByYear = () => {
    console.log(filterLaunchesByYear)
    filterByYear(selectedYear.value)
}

const filteredLaunches = computed(() => {
    console.log(filteredLaunches)
    if (selectedYear.value !== null) {
        return launches.value.filter((launch: Launch) => {
            const launchYear = new Date(launch.launch_date_local).getFullYear()
            return launchYear === selectedYear.value
        })
    } else {
        // If selectedYear is null, return all launches
        console.log(launches.value)
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
