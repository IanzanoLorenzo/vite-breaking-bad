<script>
import AppScreen from './components/AppScreen.vue';
import AppTopBar from './components/AppTopBar.vue';
import axios from 'axios';
import { store } from "./store.js";
export default {
  components:{
    AppScreen,
    AppTopBar
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    axios.get(store.apiURL).then((rensp)=>{
      store.pokemons = rensp.data.docs
    })
  },
}
</script>
<template>
<div class="background">
    <AppTopBar />
    <AppScreen />
</div>
</template>
<style lang="scss">
  @import './styles/general.scss';
  .background{
    background-color: #b71b1b;
    width: 100vw;
    height: 100vh;
    padding: 75px 0;
  }
</style>