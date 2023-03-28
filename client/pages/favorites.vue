<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <h1 class="text-h4">Favorites</h1>
                    </v-card-title>
                    <v-card-text>
                        <div v-if="favoriteLaunches.length === 0">
                            <p>No rockets favorited yet!</p>
                        </div>
                        <div v-else>
                            <v-list>
                                <v-card
                                    v-for="launch in favoriteLaunches"
                                    :key="launch.id"
                                    class="launch-card"
                                >
                                    <v-card-text>
                                        <v-list-item-content>
                                            <v-list-item-title class="text-h5">
                                                {{ launch.name }}
                                            </v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-btn class="delete-btn" @click="removeFromFavorites(launch)">
                                                Delete from Favorites
                                            </v-btn>
                                        </v-list-item-action>
                                    </v-card-text>
                                </v-card>
                            </v-list>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { useFavoritesStore } from '@/stores/useFavorites'

interface Launch {
    id: string
    name: string
    // other properties
}

export default defineComponent({
    name: 'Favorites',
    setup() {
        const favoritesStore = useFavoritesStore()

        const favoriteLaunches = computed(() => {
            return favoritesStore.launches
        })

        const removeFromFavorites = (launch: Launch) => {
            console.log('Removing Launch:', launch)
            favoritesStore.removeLaunch(launch)
        }

        return {
            favoriteLaunches,
            removeFromFavorites,
        }
    },
})
</script>

<style>
.rocket-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.delete-btn {
    border: 1px solid red;
    background-color: white;
    color: red;
}
</style>
