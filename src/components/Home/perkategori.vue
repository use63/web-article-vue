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
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: 700;
        color: white;
        padding: 1em;
        margin: 0 0 2rem;
    }
    span {
        display: flex;
        flex-direction: row;
        span {
            display: flex;
            flex-direction: column;
        }
    }
}

</style>