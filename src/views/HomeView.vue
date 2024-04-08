<template>
    <div class="container">
        <div class="hero">
            <heroHome/>
        </div>
        <div class="home">
            <div class="main">
                <terbaruHome/>
                <perkategoriHome/>
                <perkategoriHome/>
            </div>
            <div class="sidebar">
                <sidebarHome/>
            </div>
        </div>
        <div class="foo">
            <footerHome/>
        </div>
    </div>
</template>

<script>
import heroHome from '@/components/Home/hero.vue'
import sidebarHome from '@/components/Home/sidebar.vue'
import terbaruHome from '@/components/Home/terbaru.vue'
import perkategoriHome from '@/components/Home/perkategori.vue'
import footerHome from '@/components/Home/footer.vue'

export default {
    name: "HomeView",
    components: {
        heroHome,
        sidebarHome,
        terbaruHome,
        perkategoriHome,
        footerHome
    }
}
</script>

<style lang="scss" scoped>

.container {
    background-color: skyblue;
    .hero {
        width: 60%;
        margin: auto;
    }
    .home {
        background-color: white;
        border-radius: 0 0 1rem 0;
        width: 60%;
        margin: auto;
        display: flex;
        gap: 1rem;
        padding-top: 1rem;
        .sidebar {
            min-width: 25%;
            position: sticky;
            top: 1rem;
        }
    }
}

</style>