<template>
    <div class="listPost">
        <div class="image">
            <img src="/img/landingpage.jpg" alt="">
        </div>
        <div class="text">
            <h3>Judul Postingan</h3>
            <p>
                <span>24 Desember 2024 | 23:45</span>
                penggalan artikel, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo quia ipsa veniam optio odit possimus perspiciatis quibusdam sed? Modi aliquam adipisci, dolore nisi corrupti cupiditate vero mollitia unde temporibus?
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "listPostHome"
}
</script>

<style lang="scss" scoped>

.listPost {
    margin: 0 1rem;
    display: grid;
    grid-template-columns: auto auto;
    cursor: default;
    &:hover {
        filter: saturate(1.5);
    }
}

.image {
    overflow: hidden;
    transition: all 3s;
    img {
        max-width: 300px;
        border-radius: 1rem;
    }
}

.text {
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    h3 {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
    }
    p {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: justify;
        span {
            font-family: Arial, Helvetica, sans-serif;
            display: block;
            color: gray;
            margin-bottom: .5em;
            font-size: small;
        }
    }
}

</style>