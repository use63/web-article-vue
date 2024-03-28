<template>
    <div class="sidebar">
        <div class="nav panel">
            <h1>Navigasi</h1>
            <ul>
                <li><a href="#">Top</a></li>
                <li><a href="#">Top</a></li>
                <li><a href="#">Top</a></li>
                <li><a href="#">Top</a></li>
            </ul>
        </div>
        <div class="label panel">
            <h1>Label</h1>
            <ul>
                <li><a href="#">Top</a></li>
                <li><a href="#">Top</a></li>
                <li><a href="#">Top</a></li>
                <li><a href="#">Top</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "sidebarHome"
}
</script>

<style lang="scss" scoped>

.panel {
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: whitesmoke;
    // border-radius: 1rem;
    h1 {
        color: black;
        font-weight: 900;
        font-size: 1.2rem;
        font-family: Arial, Helvetica, sans-serif;
    }
    ul {
        li {
            margin: .5rem 0;
            a {
                color: rgba(0, 0, 0, 0.8);
                text-decoration: none;
            }
            &:hover {
                color: black
            }
        }
    
    }
}

</style>