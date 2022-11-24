<template>
    <div>
        <h3>item D</h3>
        <p>{{ $route.params.id }}</p>
        <button @click="goUrl()">Click Here</button>
        <button @click="retrieveParameter()">Recuperar</button>
    </div>
</template>

<script>

export default {
    name: 'ItemD',
    methods: {
        goUrl: function(){
            this.$router.push({ name: 'ruta'})
        },
        retrieveParameter(){
            console.log(this.$route.params.id);
            console.log(this.$route.query.text)

        }
    }
}

</script>

<style lang="scss" scoped></style>