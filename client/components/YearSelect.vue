<template>
    <v-row>
        <v-col>
            <h1>Launches</h1>
        </v-col>
        <v-col>
            <v-select
                v-model="selectedYear"
                :items="years"
                label="Filter by Year"
                @change="filterByYear(selectedYear)"
            ></v-select>
        </v-col>
        <v-col>
            <v-btn-toggle v-model="sortDirection" mandatory>
                <v-btn @click="sortAscending">Ascending</v-btn>
                <v-btn @click="sortDescending">Descending</v-btn>
            </v-btn-toggle>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'YearSelect',
    props: {
        years: {
            type: Array,
            required: true,
        },
        selectedYear: {
            type: Number,
            required: true,
        },
    },
    computed: {
        value: {
            get() {
                return this.selectedYear
            },
            set(value) {
                this.$emit('year-selected', value)
            },
        },
    },
}
</script>
