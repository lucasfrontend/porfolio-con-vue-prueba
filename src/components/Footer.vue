<template>
    <div class="footer">
        <span>Make with <font-awesome-icon icon="fa-solid fa-heart" /> by <span><a href="https://porfolio-with-vue-and-tailwind.vercel.app/" class="barri" target="_blank">LucasMar</a></span></span>
    </div>
</template>

<script>

export default {
    name: 'Footer',

}

</script>

<style lang="scss" scoped>
.footer{
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    padding: 0.5rem;
    text-align: right;
    font-size: 0.8rem;
    z-index: 10;
    background-color: rgba(40, 22, 22, 0.34);
    color: var(--light);
    /*
    overflow:hidden;
    */
    .fa-heart {
        color: var(--tertiary);
    }
    .barri{
        color: var(--primary);
    }
}
</style>