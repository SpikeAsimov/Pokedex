<template>
    <div class="image-container">
        <img :src="imgUrl" alt="Thumbnail">
    </div>
</template>

<script>
    export default {
        props: ['imgUrl']
    }
</script>

<style scoped>
    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        min-width: 255px;
    }

    img {
        border-radius: 15%;
        border: 10px hsl(41, 90%, 10%) solid;;
        width: 80%;
        padding: 10px;
        background: hsl(353, 90%, 90%);
    }

    img:hover {
        width: 85%;
    }

</style>