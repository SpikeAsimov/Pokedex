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