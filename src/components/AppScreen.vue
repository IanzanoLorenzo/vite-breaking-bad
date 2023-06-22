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
}
</script>
<template lang="">
    <div class="container">
        <div class="row h-100">
            <div class="col-12 h-100">
                <div class="screen h-100 w-100">
                    <AppCards v-for="(pokemon, index) in store.pokemons" :key="index" :pokemonName="pokemon.name" :type1="pokemon.type1" :type2="pokemon.type2" :image="pokemon.imageUrl" :position="pokemon.number" :backgroundColor="pokemon.color"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .container{
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
    }
</style>