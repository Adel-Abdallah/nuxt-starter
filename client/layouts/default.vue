<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-toolbar-title>
                <nuxt-link to="/" class="nav-link">SpaceX</nuxt-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
            <nuxt-link to="/rockets" class="nav-link">Rockets</nuxt-link>
            <nuxt-link to="/launches" class="nav-link">Launches</nuxt-link>
        </v-app-bar>
        <div class="main">
            <v-main>
                <ErrorAlert v-if="error" :error="error" />
                <div v-if="!error && isLoading">
                    <Loading />
                </div>
                <slot />
            </v-main>
        </div>

        <v-footer app>
            <v-card flat tile>
                <v-card-text>&copy; 2023 My App</v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import Loading from '~~/client/layouts/Loading.vue'
import ErrorAlert from '~~/client/layouts/ErrorAlert.vue'
export default {
    name: 'DefaultLayout',
    components: {
        Loading,
        ErrorAlert,
    },
    props: {
        isLoading: {
            type: Boolean,
            required: true,
            default: false,
        },
        error: {
            type: [Error, String],
            default: null,
        },
    },
}
</script>

<style scoped>
.main {
    padding-top: 64px;
}
.nav {
    display: flex;
    justify-content: space-between;
    background-color: #333;
    padding: 10px;
}

.nav-link {
    color: white;
    text-decoration: none;
    margin-right: 10px;
}

.nav-link:hover {
    color: #ccc;
}
</style>
