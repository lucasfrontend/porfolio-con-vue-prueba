<template>
    <div class="col-4 col-md-6 col-xl-4 word-card">
        <h5> {{ name }} </h5>
        <p> {{ description }} </p>
        <img v-if="img" class="img-fluid" :src='img' :alt='alt' />
    </div>
        <!--
-->
</template>

<script>
export default {
    name: 'VCardWord',
    props: {
        name: String,
        description: String,
        img: String,
        alt: String
    }
}

</script>

<style lang="scss" scoped>
.word-card {
    min-width: 240px;
    padding: 30px 0 40px;
    margin: 3px 3px 30px 3px;
    background-color: var(--light);
    text-align: left;
    border-radius: 3px;
}

img{
    border-radius: 3px;
    min-width: 150px;
    min-height: 50px;
}

p{
    color: var(--dark-alt);
}
</style>