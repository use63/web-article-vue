<template>
    <div class="terbaru">
        <h1 id="ArtikelTerbaru">Artikel Terbaru</h1>
        <div class="list">
            <listPostHome/>
            <listPostHome/>
            <listPostHome/>
            <listPostHome/>
        </div>
    </div>
</template>

<script>
import listPostHome from "@/components/Home/listPost.vue"
export default {
    name: "terbaruHome",
    components: {
        listPostHome
    }
}
</script>

<style lang="scss" scoped>

.terbaru {
    h1 {
        background-color: lightskyblue;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 700;
        color: white;
        padding: 1em;
        margin: 0 0 2rem;
    }
    .list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
}

</style>