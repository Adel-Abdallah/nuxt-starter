<template>
    <v-app>
        <NavBar />
        <div class="main">
            <v-main>
                <slot />
            </v-main>
        </div>
        <AppFooter />
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    components: {
        NavBar,
        AppFooter,
    },
}
</script>

<style scoped>
.main {
    padding-top: 64px;
}
</style>
