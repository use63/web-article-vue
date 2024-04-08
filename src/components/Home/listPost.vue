<template>
    <div class="listPost">
        <div class="picture">
            <img src="/img/javascript.jpg" alt="">
        </div>
        <div class="text">
            <span class="title">
                <h1>Judul postingan</h1>
            </span>
            <span class="date">
                12 Desember 2024 | Nori Nofandi
            </span>
            <span class="article">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iste tenetur id at non itaque?
                    Labore, est quisquam! Doloribus laudantium debitis aut quisquam ea quae, nesciunt obcaecati tempora
                    nemo voluptas!</p>
            </span>
            <span class="tags">
                Tags: 
                <span class="tag">Android</span>
                <span class="tag">Android</span>
                <span class="tag">Android</span>
                <span class="tag">Android</span>
            </span>
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
    display: flex;
    margin-bottom: 1em;
    margin-left: 1em;
    border-radius: 1rem;
    overflow: hidden;
}
.picture {
    width: 300px;
    max-height: 180px;
    background-color: aquamarine;

    &:hover {
        background-color: red;
    }
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    .title {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h1 {
            font-weight: 700;
            font-size: 1.3rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        p {
            color: #444;
        }
    }

    .article {
        color: #444;
    }

    .date {
        color: #555;
        font-size: .9rem;
    }

    .tags {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: .2rem;
        color: #666;
        font-size: .9rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        .tag {
            background-color: navy;
            font-size: .8rem;
            font-weight: 300;
            padding: 3px;
            border-radius: 3px;
            color: white;
            transition: .2s;
            &:hover {
                background-color: red;
                color: navy;
                cursor: pointer;
            }
        }
    }
}

</style>