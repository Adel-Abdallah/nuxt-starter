<template>
    <v-app-bar app color="primary" dark>
        <v-toolbar-title>
            <NuxtLink to="/" class="nav-link">SpaceX</NuxtLink>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/rockets" class="nav-link">Rockets</NuxtLink>
        <NuxtLink to="/launches" class="nav-link">Launches</NuxtLink>
        <NuxtLink to="/favorites" class="nav-link">Favorites</NuxtLink>
    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
.nav-link {
    color: white;
    text-decoration: none;
    margin-right: 10px;
}

.nav-link:hover {
    color: #ccc;
}
</style>
