<template>
    <div class="heroCover">
        <div class="hero">
            <p class="quote">"God does not play dice with the universe."</p>
            
            - Albert Einstein
        </div>
    </div>
</template>

<script>
export default {
    name: "heroHome"
}
</script>

<style lang="scss" scoped>

.heroCover {
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 30vh;
}

.hero {
    .quote {
        font-size: 4rem;
    }
}

</style>