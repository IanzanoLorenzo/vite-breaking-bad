<script>
import AppCards from './AppCards.vue';
import { store } from '../store';
export default {
    components:{
        AppCards
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        store.loading = true;
    },
}
</script>
<template lang="">
    <div class="container-md container-fluid">
        <div class="row h-100">
            <div class="col-12 h-100">
                <div class="screen h-100 p-5">
                    <div class="row h-100 w-100 m-0">
                        <AppCards v-for="(pokemon, index) in store.pokemons" :key="index" :pokemonName="pokemon.name" :type1="pokemon.type1" :type2="pokemon.type2" :image="pokemon.imageUrl" :position="pokemon.number" :backgroundColor="pokemon.color"/>
                        <div class="p-4"></div>
                    </div>
                    <div>v-else</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .container-md.container-fluid{
        height: calc(100% - 120px);
        margin-top: 20px;
    }
    .col-12{
        background-color: #dedede;
        border-radius: 50px;
        padding: 50px;
    }
    .screen{
        background-color: #676b70 ;
        overflow: auto;
        scrollbar-gutter: 0px;
        &::-webkit-scrollbar {
            width: 10px;
            background-color: rgb(170, 168, 168);
        }
        &::-webkit-scrollbar-thumb{
            background-color: white;
        }
    }
</style>