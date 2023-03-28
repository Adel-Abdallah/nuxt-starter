import { defineStore } from 'pinia'

interface Launches {
    id: string
    name: string
    // other properties
}

export const useFavoritesStore = defineStore({
    id: 'favorites',
    state: () => ({
        launches: [] as Launches[],
    }),
    actions: {
        addRocket(launch: Launches) {
            this.launches.push(launch)
        },
        removeLaunch(launch: Launches) {
            const index = this.launches.findIndex((r) => r.id === launch.id)
            if (index !== -1) {
                this.launches.splice(index, 1)
            }
        },
    },
})
