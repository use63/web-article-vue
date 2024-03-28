<template>
    <div class="terbaru">
        <h1>Android</h1>
        <span>
            <gridPostHome/>
            <gridPostHome/>
            <gridPostHome/>
        </span>
    </div>
</template>

<script>
import gridPostHome from "@/components/Home/gridPost.vue"
export default {
    name: "perkategoriHome",
    components: {
        gridPostHome
    }
}
</script>

<style lang="scss" scoped>

.terbaru {
    h1 {
        background-color: lightskyblue;
        padding: 1em;
        margin: 3em 0 2em;
    }
    span {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        span {
            display: flex;
            flex-direction: column;
        }
    }
}

</style>