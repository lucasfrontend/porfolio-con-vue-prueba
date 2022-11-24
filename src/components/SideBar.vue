<template>
    <aside :class="`${is_expanded && 'is_expanded'}`">
        <router-link class="" to="/">
            <div class="sdch"></div>
        </router-link>
        <div class="menu-toggle-container">
            <button class="menu-toggle" @click="toggleMenu">
                <font-awesome-icon icon="fa-solid fa-angles-right" />
            </button>
        </div>

        <div class="menu">
            <router-link class="button-menu" to="/">
                <span class="icons">
                    <font-awesome-icon icon="fa-solid fa-home" />
                </span>
                <span class="items">Home</span>
            </router-link>

            <router-link class="button-menu" to="/about">
                <span class="icons">
                    <font-awesome-icon icon="fa-solid fa-hand" />
                </span>
                <span class="items">bienvenido</span>
            </router-link>

            <router-link class="button-menu" to="/item1">
                <span class="icons">
                    <font-awesome-icon icon="fa-solid fa-download" /> 
                </span>
                <span class="items">Item 1</span>
            </router-link>

            <!--
            <router-link class="button-menu" to="/beer">
                <span class="icons">
                    <font-awesome-icon icon="fa-beer-mug-empty" />
                </span>
                <span class="items">Cerveza</span>
            </router-link>
            -->
            
            <router-link class="button-menu" to="/glossary">
                <span class="icons">
                    <font-awesome-icon icon="fa-solid fa-list" />
                </span>
                <span class="items">Glosario</span>
            </router-link>

            <router-link class="button-menu" to="/staff">
                <span class="icons">
                    <font-awesome-icon icon="fa-solid fa-people-group" />
                </span>               
                <span class="items">Staff</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === true);

const toggleMenu = () => {
    is_expanded.value = !is_expanded.value
}
</script>

<style lang="scss" scoped>
aside{
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 84px);
    overflow: hidden;
    min-height: 100vh;
    padding: 0rem;
    transition: 0.3s ease-out;
    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
        width: calc(2rem + 60px);

    }
    .sdch{
        background-image: url("../assets/logo_sdch.png");
        background-position: center;
        background-size: cover; 
        min-height: 80px;
        min-width: 65px;
        margin: 0.6rem 0.7rem 1rem 0rem;

    }
    
    .menu-toggle-container{
        color: var(--light);
        display: flex;
        justify-content: flex-end;
        transition: 0.3s ease-out;
        .menu-toggle{
            color: var(--light);
            font-size: 1.7rem;
            margin: 1rem auto;
        }
        &:hover{
            transform: translateX(0.5rem);
        }
    }
    .menu{
        margin: 0 -1rem;
        .button-menu{
            display: flex;
            align-items: center;
            text-align: center;
            text-decoration: none;
            padding: 0.5;
            transition: 0.2s ease-out;
            color: var(--light);
            .icons {
                font-size: 1.7rem;
                transition: 0.2s ease-out;
                margin: 1rem 3.5rem;
                @media (max-width: 768px) {
                    margin: 1rem 3rem;
                }
            }
            .items {
                transition: 0.3s ease-out;
                color: var(--primary);
            }
            
            &:hover {
                background-color: var(--dark-alt);
                color: var(--primary);
            }
            &.router-link-exact-active{
                color: var(--primary);
                background-color: var(--dark-alt);
            }
        }
    }
    &.is_expanded{
        width: var(--sidebar-width);
        z-index: 10;
        .menu-toggle-container{
            .menu-toggle{
                transform: rotate(180deg);
                margin: 1rem 2.5rem 2rem;
                .fa-angles-right{
                    font-size: 1.5rem;
                    
                }
            }
        }
        .menu{
            
            .button-menu{
                display: flex;
                flex-direction: row-reverse;
                justify-content: space-between;
                .items{
                    padding-left: 2rem;
                    min-width: 50px;
                    text-align: left;
                    align-items: left;
                    color: var(--light);
                    transition: 0.3s ease-out;
                }
                
                &:hover {
                //agregar color de fondo
                background-color: var(--dark-alt);
                color: var(--primary);                    
                    .icons, .items {
                        color: var(--primary);                    
                    }
                }
                
            }
        }

    }
}

</style>