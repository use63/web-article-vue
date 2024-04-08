<template>
    <div class="footer">
        <p>2024 &copy; <a class="author" target="_blank" href="http://nori.my.id">Nori Nofandi</a></p>
        <p>Build With <a class="vuejs" target="_blank" href="https://vuejs.org/">Vue.js</a></p>
    </div>
</template>

<script>
export default {
    name: "footerHome"
}
</script>

<style lang="scss" scoped>
.footer {
    color: #444;
    width: 60%;
    margin: auto;
    background-color: lightskyblue;
    text-align: center;
    height: 15vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: .75rem;
    
        a {
            padding: 3px;
            border-radius: 3px;
            transition: .3s;
            text-decoration: none;
            background-color: #eaeaea;
            font-weight: 700;
    
            &:hover {
                background-color: navy;
            }
        }
    
        .author {
            color: lightskyblue;
    
        }
    
        .vuejs {
            color: #42b883;
        }
}
</style>