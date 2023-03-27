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

export default function useLaunches() {
    const { error, data } = useAsyncQuery<{
        launches: Launch[]
    }>(GET_LAUNCHES)

    const launches = ref<Launch[]>([])
    const isLoading = ref(false)

    const selectedYear = ref<number | null>(null)

    const filteredLaunches = computed(() => {
        let filtered = launches.value

        if (selectedYear.value !== null) {
            filtered = filtered.filter((launch: Launch) => {
                const launchYear = new Date(launch.launch_date_local).getFullYear()
                return launchYear === selectedYear.value
            })
        }

        return filtered
    })

    const sortAscending = () => {
        filteredLaunches.value.sort((a, b) => {
            const dateA = new Date(a.launch_date_local)
            const dateB = new Date(b.launch_date_local)
            return dateA.getTime() - dateB.getTime()
        })
    }

    const sortDescending = () => {
        filteredLaunches.value.sort((a, b) => {
            const dateA = new Date(a.launch_date_local)
            const dateB = new Date(b.launch_date_local)
            return dateB.getTime() - dateA.getTime()
        })
    }

    const filterByYear = (year: number | null) => {
        selectedYear.value = year
    }

    const years = computed(() => {
        const years = new Set<number>()
        data?.value?.launches.forEach((launch: Launch) => {
            years.add(new Date(launch.launch_date_local).getFullYear())
        })
        return Array.from(years).sort()
    })

    watch(
        () => data.value?.launches,
        (newLaunches: Launch[] | undefined) => {
            launches.value = newLaunches ?? []
        },
        { immediate: true },
    )

    watch(
        [data, error],
        () => {
            isLoading.value = false
        },
        { immediate: true },
    )

    if (error.value) {
        console.error('Error fetching launches:', error.value)
    }

    return {
        error,
        isLoading,
        launches,
        filterByYear,
        years,
        filteredLaunches,
        sortAscending,
        sortDescending,
    }
}
