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
        border-radius: 20%;
        border: 5px hsl(41, 90%, 10%) solid;;
        width: 80%;
    }

</style>