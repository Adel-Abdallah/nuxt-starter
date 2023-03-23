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

        <v-main>
            <slot />
        </v-main>

        <v-footer app>
            <v-card flat tile>
                <v-card-text>&copy; 2023 My App</v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
}
</script>

<style scoped>
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
